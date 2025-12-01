import { Request, Response, NextFunction } from "express";
import { userService } from "../services/admin.service";
import { AuthRequest } from "../middlewares/authentication.js";

export const dashBoard = async (req:AuthRequest, res: Response, next: NextFunction) => {
    try {

        res.render('admin/dashboard', {
            user: req.user
        })

    } catch(e) {
        console.error("Dashboard render error:", e);
        next(e); 
    }
}


export const login = async (req:Request, res: Response, next: NextFunction) => {
    try {

        res.render('admin/login')

    } catch(e) {
        console.error("Login render error:", e);
        next(e);
    }
}

export const postLogin = async (req:Request, res: Response, next: NextFunction) => {
    try {

        const {email, password} = req.body
        const result = await userService.doLogin(email,password)

        res.cookie("token", result.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // only HTTPS in prod
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000, // 1 day
        path: "/"
        });

        res.redirect('/admin')

    } catch(e) {
        console.error("Login render error:", e);
        next(e);
    }
}

export const saveUser = async (req:Request, res: Response, next: NextFunction) => {
    try {

        const { email,password, fullname, age } = req.body

        const user = await userService.saveUser(email,password, fullname, age)

        res.status(201).json({
            message: "User created successfully",
            user,
        });

    } catch(e) {
        console.error("error:", e);
        next(e);
    }
}

export const logUserOut = (req: Request, res: Response) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/"
  });

  res.redirect('/admin/login')
};

export const editProfile = async (req: AuthRequest, res: Response) => {

    try {

         if (!req.user) {
            return res.status(401).send("User not authenticated");
        }

        const user = await userService.getInfo(req.user.id)
        
        res.render('admin/profile-info', {user})
    } catch(e){
        console.error("error:", e);
    }
};



export default {dashBoard, login, postLogin, logUserOut, editProfile}