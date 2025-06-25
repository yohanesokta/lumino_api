import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const productCreate = async (
    title: string,
    image: string,
    price: string,
    category: string,
    description: string,
    rating: string,
    features: string[],
    tools: []
    
    ) => {

    return prisma.productEC.create({
        data: {
            title,
            image,
            price: parseFloat(price),
            category,
            description,
            features: features || [],
            rating: parseFloat(rating),
            tools: {
                create: tools ? tools.map((tool: { name: string; icon: string }) => ({
                    name: tool.name,
                    icon: tool.icon,
                })) : [],
            },
        },
        include: {
            tools: true,
        },
    });
}
