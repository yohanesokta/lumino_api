import express, { response } from "express";
import { adminMentorGets, adminMentorRouter } from "./mentor/admin.mentor.controller";
import { getAllUsers, getUserById, mentorUpdate } from "./admin.repository";
import { sendJson, validator } from "../utils/exepts";
export const adminRouter = express.Router();
export const adminUserRouter = express.Router();

adminRouter.use("/mentor",adminMentorRouter)
adminRouter.use("/mentors",adminMentorGets)

adminUserRouter.get("/",async (request, response) => {
    const id = request.query.id
    const role = request.query.role
    const skip = request.query.skip || 0
    const take = request.query.take || 10
    try {
        let userdata;
        if ( id ) {
            userdata = await getUserById(String(id))
        } else if ( skip && take ) {
            userdata = await getAllUsers(Number(skip), Number(take), (role == "user" || role == "admin" || role == "mentor") ? role : null)
        }
        if ( !userdata ) {
            response.status(404).json(sendJson({message : "User Not Found"}));
            return;
        }
        response.status(200).json(sendJson({message : "success" , data : userdata}));
    } catch (error) {
        console.log(error)
        response.status(500).json(sendJson({message : "Internal Server Error"}));
    }
})

adminUserRouter.put("/",async (request, response) => {
    const id = request.body.id
    const role = request.body.role
    const valid = validator({
        id : request.body.id,
        role : request.body.role,
    })
    if (!valid.status) {
        response.status(400).json(sendJson({message : valid.data}));
        return;
    }
    try {
        const userdata = await mentorUpdate(String(id), {role : role})
        response.status(200).json(sendJson({message : "success" , data : userdata}));
    } catch (error) {
        console.log(error)
        response.status(500).json(sendJson({message : "Internal Server Error"}));
    }
})