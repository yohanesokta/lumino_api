import express from "express"
import "dotenv/config"
import { Router as AuthController } from "./auth/auth.controller";
import { adminRouter, adminUserRouter } from "./admin/admin.controller";
import { middleware_admin, middleware_allrole, middleware_user } from "./middleware";
import { Router as UserController } from "./user/user.controller";
import { Router as DefaultRouter } from "./default/default.controller";
import { Router as PublicController } from "./public/public.controller";
import cors from "cors"

import jsonSwager from "../docs/swagger.json";
import { swagger_static } from "../docs/swagger.static";
import { homepage } from "./utils/hompage.status";
import {logger} from "./utils/prisma";
import {createProductRouter } from "./admin/product/product.controller";
import { midtramsRouter } from "./default/midtrans/midtrans.controller";
import { PaymentController } from "./user/payment/payment.controller";

const app = express();
const app_port = process.env.APP_PORT || 3000
jsonSwager.servers[0].url = process.env.APP_URL!

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE","PUT"],
    allowedHeaders: ["Content-Type", "Authorization"]
}))

app.use(express.json())

app.get("/", homepage)
app.get("/docs/api/option.json", (_, res) => { res.send(jsonSwager) })
app.get("/docs", (_, res) => { res.send(swagger_static("/docs/api/option.json")) })
app.use('/payment',midtramsRouter)
app.use("/auth", AuthController)
app.use('/public',PublicController)
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