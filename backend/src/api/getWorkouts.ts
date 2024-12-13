import { Request, Response } from "express";
import { Pool } from "pg";

const pool = new Pool({
  user: process.env.PGUSER || "postgres",
  host: process.env.PGHOST || "database",
  database: process.env.PGDATABASE || "gymapp",
  password: process.env.PGPASSWORD || "extrajoss",
  port: Number(process.env.PGPORT) || 5432,
});

console.log(pool);

export const getWorkouts = async (req: Request, res: Response) => {
  try {
    const result = await pool.query("SELECT * FROM workouts");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching workouts:", error);
    res.status(500).json({ error: "Error fetching workouts." });
  }
};
