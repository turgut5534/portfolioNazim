import { Request, Response, NextFunction } from "express";
import { userService } from "../services/index.service";

export const homePage = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userService.getOne();  // <-- FIXED
    // return console.log(user)
    // res.json(users);                    // <-- send the result
    res.render("index", { user });

  } catch (err) {
    next(err);
  }
};
