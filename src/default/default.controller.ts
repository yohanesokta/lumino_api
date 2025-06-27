import express, { response } from "express"
import { mentorUpdate } from "../admin/admin.repository";
import { sendJson } from "../utils/exepts";
import { request } from "http";
import { getUserdatabyID } from "../user/user.repository";
import { getAllProducts, getProductById } from "../admin/product/product.repository";
export const Router = express.Router();

Router.put("/", async(request,response)=> {
    let userdata:any = {}
    const userid = request.user?.userdata.id
    if (request.body.username) userdata.username = request.body.username
    if (request.body.user_email) userdata.user_email = request.body.user_email
    if (request.body.bio) userdata.bio = request.body.bio
    if (request.body.gender) userdata.gender = request.body.gender
    if (request.body.organisasi) userdata.organisasi = request.body.organisasi
    if (request.body.location) userdata.location = request.body.location
    if (request.body.birthday) userdata.birthday = request.body.birthday
    if (request.body.profile_picture_url) userdata.profile_picture_url = request.body.profile_picture_url

    if (Object.keys(userdata).length > 0 && userid) {
            try {
                await mentorUpdate(userid,userdata)
                response.json(sendJson({message:"success" , data:userdata}))
            } catch (error){
                console.log(error)
                response.status(500).json(sendJson({message:"internal server error"}))
            }
        } else {
            response.status(400).json(sendJson({message:"missing user data or user id"}))
        }
})


Router.get("/user",async (request , response) => {
    try {
        const userid = request.user?.userdata.id
        if (!userid) {
            response.json(sendJson({message : "userdata is blank!"}))
        }
        const userdata = await getUserdatabyID(userid!);
        response.json(userdata)
    } catch(error) {
        if (error && typeof error == "object" && "code" in error) {
            if (error.code = "P2002") {
                response.status(400).json(sendJson({ message: "Email is already registered" }))
                return;
            }
        }
        response.status(400).json(sendJson({message : "Internal Server Error"}))
    }
})



Router.get('/product', async (req, response) => {
  try {
    const products = await getAllProducts;
    response.status(200).json(products);
  } catch (error: any) {
    console.error('Error fetching products:', error);
    response.status(500).json({ message: 'Internal server error', error: error.message });
  }
});

Router.get('/product/:id', async (req, response) => {
  const id = req.params.id;
  try {
    const product = await getProductById(id);
    response.status(200).json(product);
  } catch (error: any) {
    console.error('Error fetching product:', error);
    response.status(500).json({ message: 'Internal server error', error: error.message });
  }
});