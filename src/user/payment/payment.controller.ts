import { randomUUID } from "crypto";
import express from "express"
import { createPayment, findOrder, findProductById } from "./payment.repository";

export const PaymentController = express.Router();

const snap = {
        serverKey : process.env.SERVER_KEY ?? "",
        clientKey : process.env.CLIENT_KEY ?? ""
}

PaymentController.post('/transaction',async (request,response) => {
    const targetProduct = request.body.product_id;
    console.log("Target Product ID:", targetProduct);
    if (!targetProduct) {
        response.status(400).json({
            status: "Bad Request",
            message: "Product ID is required"
        });
        return
    }

    try {
        const product = await findProductById(targetProduct);
        if (!product) {
            response.status(404).json({
                status: "Not Found",
                message: "Product not found"
            });
        }
         let parameter = {
            "transaction_details": {
                "order_id": randomUUID(),
                "gross_amount": product!.price.toString()
            },
            "credit_card":{
                "secure" : true
            },
            "customer_details": {
                "first_name": request.user?.userdata.username!,
                "last_name": "",
                "email": request.user?.userdata.email!,
                "phone": " "
            }
        };

        const order = await createPayment(request.user?.userdata.id!, targetProduct, product!.price);
        if (!order) {
            response.status(500).json({
                status: "Internal Server Error",
                message: "Failed to create order"
            });
        }


        let transaction = await fetch('https://app.sandbox.midtrans.com/snap/v1/transactions',{
            method : "POST",
            headers : {
                'Accep':'application/json',
                'Authorization' : `Basic ${btoa(snap.serverKey)}:`,
                'Content-Type': 'application/json' 
            },
            body : JSON.stringify(parameter)
        })
        const result = await transaction.json()
        response.json(result)
    } catch (err) {
        console.log(err)
        response.status(500).json({
            status : "Internal Server Error"
        })
    }
})

PaymentController.get('/transaction', async (request, response) => {
    try {
        const userId = request.user?.userdata.id!;
        const transactions = await findOrder(userId);
        if (!transactions) {
            response.status(404).json({
                status: "Not Found",
                message: "No transactions found for this user"
            });
            return;
        }
        response.json({
            status: "Success",
            data: transactions
        });
    } catch (error) {
        console.error("Error fetching transactions:", error);
        response.status(500).json({
            status: "Internal Server Error",
            message: "Failed to fetch transactions"
        });
    }
});