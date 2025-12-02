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


export const updateProfile = async (req: AuthRequest, res: Response) => {

    try {

         if (!req.user) {
            return res.status(401).send("User not authenticated");
        }

        const user = await userService.updateInfo(req.user.id, req.body)
        
        res.redirect('/admin/profile')
    } catch(e){
        console.error("error:", e);
    }
};


export const settings = async (req: AuthRequest, res: Response) => {

    try{ 
        res.render('admin/settings')
    } catch(e) {
        
    }

   

};


export const getSkills = async (req: AuthRequest, res: Response) => {

    try{ 

        if (!req.user) {
            return res.status(401).send("User not authenticated");
        }

        const skills = await userService.getSkills(req.user.id)

        res.render('admin/skills', {skills})

    } catch(e) {
        
    }

};


export const addSkills = async (req: AuthRequest, res: Response) => {

    try{ 

        if (!req.user) {
            return res.status(401).send("User not authenticated");
        }

        await userService.addSkills(req.user.id, req.body.title, req.body.grade)

        res.redirect('/admin/skills')
        
    } catch(e) {
        console.log(e)
    }

};


export const deleteSkill = async (req: AuthRequest, res: Response) => {

    try{ 
        
        if (!req.user) {
            return res.status(401).send("User not authenticated");
        }

        const id= req.params.id

        if (!id) {
            return res.status(400).send("Skill ID is required");
        }
        await userService.deleteSkill(id)

        res.redirect('/admin/skills')
        
    } catch(e) {
        console.log(e)
    }

};


export const updateSkill = async (req: AuthRequest, res: Response) => {

    try{ 

        if (!req.user) {
            return res.status(401).send("User not authenticated");
        }

        await userService.updateSkill(req.user.id, req.body)

        res.redirect('/admin/skills')
        
    } catch(e) {
        console.log(e)
    }

};


export const seeExperiences = async (req: AuthRequest, res: Response) => {

    try{ 
       
        if (!req.user) {
            return res.status(401).send("User not authenticated");
        }

        const experiences = await userService.getExperiences(req.user.id)

        res.render('admin/experiences', {experiences})
        
    } catch(e) {
        console.log(e)
    }

};



export const portfolio = async (req: AuthRequest, res: Response) => {

    try{ 

         if (!req.user) {
            return res.status(401).send("User not authenticated");
        }

        const portfolios = await userService.getPortfolio(req.user.id)

        res.render('admin/portfolio', {portfolios})
        
    } catch(e) {
        console.log(e)
    }

};







export default {dashBoard, login, postLogin, logUserOut, editProfile, updateProfile}