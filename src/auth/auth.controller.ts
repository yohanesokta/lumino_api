import express, { CookieOptions } from "express";
import { containsSpecialChars, sendJson } from "../utils/exepts";
import { googleCallback, googleRoute, registerUser, userLogin } from "./auth.service";
import { middleware_allrole } from "../middleware";
import { logger } from "../utils/prisma";
export const Router = express.Router();


Router.post("/register", async (request, response) => {
    const username = request.body.username
    const user_email = request.body.user_email
    let user_password = request.body.user_password
    if (!username || !user_email || !user_password) {
        response.status(400).json(sendJson({ message: "all field cant be blank!" })); return;
    } else if (containsSpecialChars(username)) {
        response.status(400).json(sendJson({ message: "cant contains special char" })); return;
    } else {
        try {
            await registerUser({ username, user_email, user_password });
            response.json(sendJson({ message: "registration succsess" }))
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

if (process.env.NODE_ENV == "production") {
    
}

export const cookieOption: CookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV == 'production',
    sameSite: (process.env.NODE_ENV == 'production') ? 'none':'lax',
    maxAge: 24 * 60 * 60 * 1000
}




Router.post("/login", async (request, response) => {
    const user_email = request.body.user_email;
    const user_password = request.body.user_password;
    if (!user_email || !user_password) {
        response.status(401).json(sendJson({ message: "user_email or user_password cant blank!" }));
    } else {
        try {
            const login = await userLogin({ user_email, user_password });
            if (typeof login == "object" && "role" in login) {

                response.cookie('bearer', login.token,cookieOption);

                response.json(sendJson({ data: login }))
            } else {
                response.status(400).json(sendJson({ message: login }))
            }
        } catch (error) {
            logger.error(error)
            response.status(500).json(sendJson({ message: "Internal server error" }))
        }
    }
})

Router.post("/logout", middleware_allrole, async (request, response) => {
    try {
        const userdata = request.user?.userdata
        response.clearCookie('bearer');
        response.json(sendJson({ message: "success" }))
    } catch (error) {
        console.log(error)
        response.status(500).json(sendJson({ message: "Internal server error" }))
    }
})

// google oauth2

Router.get("/google", (request, response) => {
    const redirect_url = request.query.redirect
    if (!redirect_url) {
        response.status(401).json(sendJson({ message: "redirect url cant blank!" })); return;
    }
    try {
        const auth_url = googleRoute(String(redirect_url));
        response.redirect(auth_url)
    } catch (error) {
        response.status(500).json(sendJson({ message: "Internal server error" }))

    }
})
Router.get("/google/callback", async (request, response) => {
    const code = request.query.code;
    const state = request.query.state
    if (!code || !state) {
        response.status(401).json(sendJson({ message: "code or state cant blank!" })); return;
    } else {
        try {
            const google_data = await googleCallback(String(code), String(state))
            if (state == "disable") {
                response.status(200).json(sendJson({ message: "success", data: google_data }))
            } else {
                response.cookie('bearer',google_data!.token,cookieOption)
                response.redirect(state + "?token=" + google_data!.token + "&role=" + google_data!.role)
            }
            response.send()
        } catch (error) {
            console.log(error)
            response.status(500).json(sendJson({ message: "Internal server error" }));
        }
    }
})
