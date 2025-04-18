import express from 'express';
import { sendJson, validator } from '../../utils/exepts';
import { ValidationUserIsBuy } from './user.class.service';

export const UserClassController = express.Router();

UserClassController.post('/checkout', async (req,res)=>{
    const validation = validator({
        user_id : req.user?.userdata.id,
        product_id : [req.body.product_id,"string"],
    }); 
    if (validation.status) {
        const valid = await ValidationUserIsBuy(validation.data)
        if (valid.status) {
            res.json(sendJson({"message" : "Ok" ,data : validation.data}))
        } else {
            res.send("NO")

        }
    } else { 
        res.json(sendJson({"message" : "Input Not Valid", data : validation.data}))
    }
})

UserClassController.put('/checkout', (req, res) => {
    const validation = validator({
        user_id : req.user?.userdata.id,
        product_id : req.body.product_id,
    });

})

UserClassController.get('/view',(req,res)=> {
    console.log(req.body)
    const validation = validator ({
        user_id : req.user?.userdata.id,
        product_id : req.query.product_id,
    })
    res.json(validation)
})