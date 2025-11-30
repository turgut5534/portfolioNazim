import { db } from "../database/connection";
import { User } from "../models/user.model";

// export async function getAllUsers(): Promise<User[]> {
//   const [rows] = await db.query("SELECT * FROM User");
//   return rows as User[];
// }

export const userService = {
  async getOne(): Promise<any | null> {
    const [rows] = await db.query(
      `
      SELECT 
        u.id AS user_id,
        u.fullname,
        u.email,
        u.age,
        u.photourl,
        u.summary,
        u.created_at,
        u.updated_at,

        ui.address,
        ui.phone,
        ui.instagram,
        ui.twitter,
        ui.linkedin,
        ui.facebook,
        ui.degree,
        ui.cv_url,
        ui.github,

        ut.id AS title_id,
        ut.title AS user_title,

        us.id AS skill_id,
        us.title AS skill_title,
        us.grade AS skill_grade,

        ue.id AS exp_id,
        ue.title AS exp_title,
        ue.from,
        ue.to,
        ue.is_present,
        ue.description AS exp_description,
        ue.place,

        p.id AS portfolio_id,
        p.title AS portfolio_title,
        p.client,
        p.date AS portfolio_date,
        p.url AS portfolio_url,
        p.thumbnail,

        pd.id AS desc_id,
        pd.description AS portfolio_description,

        c.id AS category_id,
        c.title AS category_title
      FROM users u
      LEFT JOIN user_info ui ON ui.user_id = u.id
      LEFT JOIN user_titles ut ON ut.user_id = u.id
      LEFT JOIN user_skills us ON us.user_id = u.id
      LEFT JOIN user_experiences ue ON ue.user_id = u.id
      LEFT JOIN portfolios p ON p.user_id = u.id
      LEFT JOIN portfolio_descriptions pd ON pd.portfolio_id = p.id
      LEFT JOIN portfolio_categories pc ON pc.portfolio_id = p.id
      LEFT JOIN categories c ON c.id = pc.category_id
      LIMIT 1
      `
    );

    const data = rows as any[];

    if (!data || data.length === 0) return null;

    const grouped = this.groupUser(data);
    return grouped;
  },

  groupUser(rows: any[]) {
    const first = rows[0];

    return {
      id: first.user_id,
      fullname: first.fullname,
      email: first.email,
      age: first.age,
      photourl: first.photourl,
      summary: first.summary,
      created_at: first.created_at,
      updated_at: first.updated_at,

      user_info: {
        address: first.address,
        phone: first.phone,
        instagram: first.instagram,
        twitter: first.twitter,
        linkedin: first.linkedin,
        facebook: first.facebook,
        degree: first.degree,
        cv_url: first.cv_url,
        github: first.github
      },

      titles: rows
        .filter(r => r.title_id)
        .map(r => ({ id: r.title_id, title: r.user_title })),

      skills: rows
        .filter(r => r.skill_id)
        .map(r => ({ 
          id: r.skill_id, 
          title: r.skill_title, 
          grade: r.skill_grade 
        })),

      experiences: rows
        .filter(r => r.exp_id)
        .map(r => ({
          id: r.exp_id,
          title: r.exp_title,
          from: r.from,
          to: r.to,
          is_present: r.is_present,
          description: r.exp_description,
          place: r.place
        })),

      portfolios: Object.values(
        rows.reduce((acc, r) => {
          if (!r.portfolio_id) return acc;

          if (!acc[r.portfolio_id]) {
            acc[r.portfolio_id] = {
              id: r.portfolio_id,
              title: r.portfolio_title,
              client: r.client,
              date: r.portfolio_date,
              url: r.portfolio_url,
              thumbnail: r.thumbnail,
              descriptions: [],
              categories: []
            };
          }

          if (r.desc_id) {
            acc[r.portfolio_id].descriptions.push({
              id: r.desc_id,
              description: r.portfolio_description
            });
          }

          if (r.category_id) {
            acc[r.portfolio_id].categories.push({
              id: r.category_id,
              title: r.category_title
            });
          }

          return acc;
        }, {} as Record<number, any>)
      )
    };
  }
};

