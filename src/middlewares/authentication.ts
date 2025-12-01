import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET: string = process.env.JWT_SECRET || "dev-secret-key";

export interface AuthRequest extends Request {
  user?: {
    id: number;
    email: string;
  };
}

export const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized: No token" });
    }

    const decoded = jwt.verify(token, JWT_SECRET) as {
      id: number;
      email: string;
    };

    req.user = decoded;
    next();

  } catch (err) {
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};
