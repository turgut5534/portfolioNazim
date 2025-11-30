import { prisma } from "../lib/prisma";

export const userService = {
  async getOne() {
    const user = await prisma.users.findFirst({
      include: {
        user_info: true,
        user_titles: true,
        user_skills: true,
        user_experiences: true,
        portfolios: {
          include: {
            portfolio_descriptions: true,
            portfolio_categories: {
              include: {
                categories: true
              }
            }
          }
        }
      }
    });

    return user;
  }
};
