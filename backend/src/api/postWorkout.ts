import { Request, Response } from "express";
import { Pool } from "pg";

const pool = new Pool({
  user: process.env.PGUSER,
  host: "database",
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: 5432,
});
console.log(pool);

export const postWorkout = async (req: Request, res: Response) => {
  const { user_id, date, title, description } = req.body;
  console.log(req.body);

  if (!user_id || !date || !title || !description) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const result = await pool.query(
      "INSERT INTO workouts (user_id, date, title, description) VALUES ($1, $2, $3, $4) RETURNING *",
      [user_id, date, title, description]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error adding workout:", error);
    res.status(500).json({ error: "Error adding workout" });
  }
};
