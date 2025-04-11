import { prisma } from "../../../utils/prisma";

export async function updateProductContent(id : number ,instructor_id : string, content : any ) {
    const product = await prisma.product.findUnique({
        where : {id , instructor_id}
    })
    return prisma.product.update({
        where : {id , instructor_id}, 
        data : {
            content : [...product!.content, content]
        }
    })
}