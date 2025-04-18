import { checkoutRequire, validationClassCheckout } from "../user.repository";

export const ValidationUserIsBuy = async (data : checkoutRequire) => {
    try { 
        const sertificate = await validationClassCheckout(data)
        console.log("Sertificate",sertificate)
        return {
            status : true,
            message : "Success"
        }
    } catch(error) {
        return {
            status :  false,
            message : "Internal Server Error"
        }
    }
}