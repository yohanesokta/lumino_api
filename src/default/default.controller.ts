import express, { response } from "express"
import { sendJson } from "../utils/exepts";
import { request } from "http";
import { getUserdatabyID } from "../user/user.repository";
export const Router = express.Router();


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



