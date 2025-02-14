
import express from "express";
import { sendJson , containsSpecialChars } from "../../utils/exepts";
import { mentorDelete, mentorRegister } from "../admin.service";
import { getManyMentors, getMentorbyId, mentorUpdate } from "../admin.repository";
import { logger } from "../../utils/prisma";

export const adminMentorRouter = express.Router();
export const adminMentorGets = express.Router();

adminMentorRouter.post("/", async (request,response)=>{
    const username = request.body.username
    const user_email = request.body.user_email
    let user_password = request.body.user_password
    if (!username || !user_email || !user_password) {
        response.status(400).json(sendJson({ message: "all field cant be blank!" })); return;
    } else if (containsSpecialChars(username)) {
        response.status(400).json(sendJson({ message: "cant contains special char" })); return;
    } else {
        try{
            await mentorRegister({username,user_email,user_password})
            response.json(sendJson({message:"success"}))
        } catch (error) {
            if (error && typeof error == "object" && "code" in error) {
                if (error.code = "P2002") {
                    response.status(400).json(sendJson({ message: "Email is already registered" }))
                    return;
                }
            }
            response.status(500).json(sendJson({ message: "internal server error" }))
        }
    }
})

adminMentorRouter.delete("/",async(request,response)=>{
    const mentor_id = request.query.mentor_id
    if (!mentor_id) {
        response.status(400).json(sendJson({ message: "need mentor id!, cant be blank!" })); return;
    } else { 
        try {
            if (mentor_id) {
                await mentorDelete(String(mentor_id));
            }
            response.json(sendJson({message:"success"}))
        } catch (error) {
            if (error && typeof error == "object" && "code" in error) {
                if (error.code = "P2003") {
                    response.status(400).json(sendJson({ message: "Mentor not found" }))
                    return;
                }
            }
            response.status(500).json(sendJson({ message: "internal server error" }))
        }
    }
})

adminMentorRouter.put("/",async(request,response)=>{
    const userdata:any = {}
    
    const userid = request.body.user_id 
    if (request.body.username) userdata.username = request.body.username
    if (request.body.user_email) userdata.user_email = request.body.user_email
    if (request.body.bio) userdata.bio = request.body.bio
    if (request.body.profile_picture_url) userdata.profile_picture_url = request.body.profile_picture_url

    if (Object.keys(userdata).length > 0 && userid) {
        try {
            await mentorUpdate(userid,userdata)
            response.json(sendJson({message:"success" , data:userdata}))
        } catch (error){
            logger.error(error)
            response.status(500).json(sendJson({message:"internal server error"}))
        }
    } else {
        response.status(400).json(sendJson({message:"missing user data or user id"}))
    }
})

adminMentorRouter.get("/",async(request,response)=>{
    const mentor_id = request.query.mentor_id
    if (!mentor_id) {
        response.status(400).json(sendJson({ message: "need mentor id!, cant be blank!" })); return;
    } else {
        try {
            const userdata = await getMentorbyId(String(mentor_id))
            response.json(sendJson({message:"success",data:userdata!}))
        } catch (error) {
            if (error && typeof error == "object" && "code" in error) {
                if (error.code = "P2003") {
                    response.status(400).json(sendJson({ message: "Mentor not found" }))
                    return;
                }
            }
            response.status(500).json(sendJson({ message: "internal server error" }))
        }
    }
})
adminMentorGets.get("/",async(request,response)=>{
    const skip  = request.query.skip
    const take = request.query.take
    if (!skip || !take) {
        response.status(400).json(sendJson({ message: "need skip and take!, cant be blank!" })); return;
    } else {
        try {
            const userdata = await getManyMentors(Number(skip),Number(take))
            response.json(sendJson({message:"success",data:{length : userdata.length,users:userdata}}))
        } catch (error) {
            response.status(500).json(sendJson({ message: "internal server error" }))
        }
    }
})


