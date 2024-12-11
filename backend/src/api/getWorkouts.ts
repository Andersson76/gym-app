import { Request, Response } from "express";
import { Pool } from "pg";

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: "database",
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
});

export const getWorkouts = async (req: Request, res: Response) => {
  try {
    const result = await pool.query("SELECT * FROM workouts");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching workouts:", error);
    res.status(500).json({ error: "Error fetching workouts." });
  }
};
