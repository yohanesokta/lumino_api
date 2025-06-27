import { OrderStatus } from "@prisma/client";
import { prisma } from "../../utils/prisma";

export async function setTransactionStatus(
    transactionId: string,
    status: OrderStatus,
) {
    try {
        return await prisma.order.update({
            where: { id: transactionId },
            data: {
                status,
            },
        });
    } catch (error) {
        console.error("Error updating transaction status:", error);
        throw error;
    }
}