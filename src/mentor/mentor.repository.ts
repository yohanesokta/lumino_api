import { prisma } from "../utils/prisma"
import { Product , Category } from "./class/mentor.class.service"


export const createNewProduct = async (product : Product) => {
    return await prisma.product.create({data : {
        name : product.name,
        description : product.description,
        price : product.price,
        instructor_id : product.instructor_id,
        duration : product.duration,
        requerement : product.requerement,
        categories : {
            create : {
                category : {
                    connect : {
                        id : product.category_id
                    }
                }
            }
        }
    }})
}


export const createNewCategorie = async (category : Category) => {
    return await prisma.category.create({data : {
        name : category.name,
        description : category.description,
        slug : category.slug
    }})
}

export const getProductMentor = async (mentor_id : string, class_id: string | undefined) => { 
    let where : any;
    if (class_id == "undefined") {
        where = {
            instructor_id : mentor_id,
        }
    } else {
        where = {
            instructor_id : mentor_id,
            id : class_id
        }
    }
    
    return await prisma.product.findMany({
        include : { categories : { include : { category : true } } },
        where : where
    })
}

export const getCategory = async () => {
    return await prisma.category.findMany()
}