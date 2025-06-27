import express from "express";
import { logger } from "../../utils/prisma";
import { setTransactionStatus } from "./midtrans.repository";
export const midtramsRouter = express.Router();


export interface MidtransNotification {
  transaction_time: string;
  transaction_status: string;
  transaction_id: string;
  status_message: string;
  status_code: string;
  signature_key: string;
  payment_type: string;
  order_id: string;
  merchant_id: string;
  gross_amount: string;
  fraud_status: string;
  expiry_time: string;
  currency: string;
  biller_code: string;
  bill_key: string;
}


midtramsRouter.post('/:base64token/socket',async (request, response) => {
    const slug = request.params.base64token;
    if (slug !== btoa(process.env.APP_KEY!) ) {
        response.status(401).json({
            status: "Unauthorized",
        });

        return;
    }
    try {        
        const notification : MidtransNotification = request.body;
        switch (notification.transaction_status) {
            case "pending":
                setTransactionStatus(notification.order_id, "pending");
                break;
            case "cancel":
                setTransactionStatus(notification.order_id, "cancel");
                break;
            case "settlement":
                setTransactionStatus(notification.order_id, "success");
                break;
        }
    } catch (error) {
        logger.error(`Error processing Midtrans notification: ${error}`);
        response.status(400).json({
            status: "Bad Request",
            message: "Invalid notification format",
        });
        return;
    }


    logger.info(`======== Socket request BY CLIENT [${slug}] ========`);
    logger.info(`Socket request for __ HEADER __: ${JSON.stringify(request.headers)}`);
    logger.info(`Socket request for __ BODY __: ${JSON.stringify(request.body)}`);

})