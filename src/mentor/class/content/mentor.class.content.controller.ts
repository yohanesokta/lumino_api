import express from 'express';
import { sendJson, validator } from '../../../utils/exepts';
import { addContentToClass } from './mentor.class.content.service';
export const ClassContent = express.Router();

ClassContent.post("/",async (request,response) => {
    const validationResult = validator({
        class_id : request.body.class_id,
        content_type : request.body.content_type,
        content_title : request.body.content_title,
        content_data : request.body.content_data,
        instructor_id : request.user?.userdata.id
    });
    if (!validationResult.status) {
        response.status(400).json(sendJson({message : "some value is required" , data : validationResult.data}));
    } else {
        const Result = await addContentToClass(validationResult.data);
        if (!Result) {
            response.status(400).json(sendJson({message : "failed to add content" , data : {}}));
            return;
        } else {
            response.status(200).json(sendJson({message : "success add content" , data : {}}));
            return;
        }
    }
})