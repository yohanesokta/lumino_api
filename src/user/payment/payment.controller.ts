import { randomUUID } from "crypto";
import express from "express"

export const PaymentController = express.Router();

const snap = {
        serverKey : process.env.SERVER_KEY ?? "",
        clientKey : process.env.CLIENT_KEY ?? ""
}

PaymentController.post('/transaction',async (request,response) => {
    let parameter = {
        "transaction_details": {
            "order_id": randomUUID(),
            "gross_amount": 1
        },
        "credit_card":{
            "secure" : true
        },
        "customer_details": {
            "first_name": request.user?.userdata.username!,
            "last_name": "",
            "email": "budi.pra@example.com",
            "phone": "08111222333"
        }
    };

    try {
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