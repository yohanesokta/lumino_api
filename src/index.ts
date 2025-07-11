import dotenv from "dotenv"

if (process.env.NODE_ENV !== "production") {
    dotenv.config();
    console.log("Development environment variables loaded-2");
}

import express from "express";
import cookieParser from "cookie-parser";
import { Router as AuthController } from "./auth/auth.controller";
import { adminRouter, adminUserRouter } from "./admin/admin.controller";
import { middleware_admin, middleware_allrole, middleware_user } from "./middleware";
import { Router as UserController } from "./user/user.controller";
import { Router as DefaultRouter } from "./default/default.controller";
import { Router as PublicController } from "./public/public.controller";
import cors from "cors";

import jsonSwager from "../docs/swagger.json";
import { swagger_static } from "../docs/swagger.static";
import { homepage } from "./utils/hompage.status";
import { logger } from "./utils/prisma";
import { createProductRouter } from "./admin/product/product.controller";
import { midtramsRouter } from "./default/midtrans/midtrans.controller";
import { PaymentController } from "./user/payment/payment.controller";
import path from "path";

const app = express();

const app_port = process.env.APP_PORT || 3000
jsonSwager.servers[0].url = process.env.APP_URL!
app.use(cookieParser())
app.use(express.json())
const allowedOrigins = [
    process.env.CLIENT_URL!,
    'http://localhost:3000',
    'http://localhost:5173'
]

app.use(cors({
    origin: function (origin , callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null,true)
        } else{
            callback(new Error('Not Allowed by cors'))
        }
    },
    methods: ["GET", "POST", "PATCH", "DELETE","PUT"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}))

app.get("/", homepage)
app.get('/debug',(request,response)=>{
    response.json(process.env)
})
app.get("/docs/api/option.json", (_, res) => { res.send(jsonSwager) })
app.get("/docs", (_, res) => { res.send(swagger_static("/docs/api/option.json")) })
app.use('/payment',midtramsRouter)
app.use("/auth", AuthController)
app.use('/public',PublicController)

app.use("/images", express.static(path.join(__dirname,'..','..', 'uploads')))

app.use("/user", middleware_allrole, UserController)
app.use("/admin", middleware_admin, adminRouter)
app.use("/admin/user",middleware_admin,adminUserRouter)
app.use("/admin/ec/product", middleware_admin,createProductRouter)
app.use("/default", middleware_allrole, DefaultRouter)
app.use('/user/payment',middleware_user,PaymentController)
app.listen(app_port, () => {
    logger.info(`Server is running on port : ${app_port}`)
})

export default app