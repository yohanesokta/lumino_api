import { prisma } from "../../utils/prisma";

export const productCreate = async (
    title: string,
    image: string,
    price: number,
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
            price,
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


export async function getAllProducts() {
    return prisma.productEC.findMany({
        include: {
            tools: true,
        },
    });
}

export async function getProductById(id: string) {
    return prisma.productEC.findUnique({
        where: { id },
        include: {
            tools: true,
        },
    });
}
