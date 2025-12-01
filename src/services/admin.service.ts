import { prisma } from "../lib/prisma.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

import jwt from "jsonwebtoken";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET

export const userService = {

  async doLogin(email: string, password: string) {
    if (!email || !password) {
      throw new Error("Email and password are required.");
    }

    const user = await prisma.users.findUnique({
      where: { email },
    });

    if (!user) {
      throw new Error("Invalid email or password.");
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw new Error("Invalid email or password.");
    }

    // Generate JWT token
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      JWT_SECRET as string,
      { expiresIn: "1d" } // token valid for 1 day
    );

    return {
      user: {
        id: user.id,
        email: user.email,
        fullname: user.fullname,
      },
      token,
    };
  },

  async saveUser(email: string, password: string, fullname: string, age: number) {
    if (!email || !password) {
      throw new Error("Email and password are required.");
    }

    const existing = await prisma.users.findUnique({
      where: { email },
    });

    if (existing) {
      throw new Error("User already exists.");
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = await prisma.users.create({
      data: {
        email,
        password: hashed,
        fullname,
        age,
      },
      select: {
        id: true,
        email: true,
      },
    });

    return user;
  },

  async getInfo(userId: number) {

    const user= await prisma.users.findUnique({
      where: {id:userId},
      include: {
        user_info: true
      }
    })

    return user;

  },
async updateInfo(userId: number, data: any) {
  return await prisma.users.update({
    where: { id: userId },

    data: {
      // Update users table
      email: data.email,
      fullname: data.fullname,
      age: Number(data.age),

      // Update user_info table
      user_info: {
        upsert: {
          create: {
            address: data.address,
            phone: data.phone,
            instagram: data.instagram,
            twitter: data.twitter,
            linkedIn: data.linkedin,
            facebook: data.facebook,
            degree: data.degree,
            github: data.github
          },
          update: {
            address: data.address,
            phone: data.phone,
            instagram: data.instagram,
            twitter: data.twitter,
            linkedIn: data.linkedin,
            facebook: data.facebook,
            degree: data.degree,
            github: data.github
          }
        }
      }
    },

    include: {
      user_info: true
    }
  });
}


  
};
