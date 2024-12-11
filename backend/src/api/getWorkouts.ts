import { Request, Response } from "express";
import { Pool } from "pg";

const pool = new Pool({
  user: process.env.PGUSER,
  host: "database",
  database: process.env.PGDB,
  password: process.env.PGPASSWORD,
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
