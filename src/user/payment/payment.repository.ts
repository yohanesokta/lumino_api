import { OrderStatus } from "@prisma/client";
import { prisma } from "../../utils/prisma";
import exp from "constants";

export const findProductById = async (productId: string) => {
    return await prisma.productEC.findUnique({
        where: { id: productId },
        include: {
            tools: true,
        },
    });
}

export const createPayment = async (userId: string, productId: string,total_price : number) => {
    return await prisma.order.create({
        data: {
            user_id: userId,
            product_id: productId,
            total_price,
            status : OrderStatus.pending,
        },
    });
}

export const findOrder = async (userId: string) => {
    return await prisma.order.findMany({
        where: { user_id: userId },
        include: {
            product: {
                include: {
                    tools: true,
                },
            },
        },
    });
}