import { Request, Response, NextFunction } from "express";
import { userService } from "../services/admin.service";

export const dashBoard = async (req:Request, res: Response, next: NextFunction) => {
    try {

        res.render('admin/dashboard')

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

        res.send('email')

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


export default {dashBoard, login, postLogin}