import { userSecretDeselect } from "../utils/exepts"
import { prisma } from "../utils/prisma"


export const getUserdatabyID = async (user_id : string) => {
   return await prisma.users.findFirst({where:{id: user_id},select : userSecretDeselect})
}

export interface checkoutRequire {
   user_id : string
   product_id : string
}

export const validationClassCheckout = async ( data : checkoutRequire) => {
   return await prisma.sertificate.findMany({
      where : {
         product_id : data.product_id,
         user_id : data.user_id
      }
   })
}