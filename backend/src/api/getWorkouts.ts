import { Request, Response } from "express";
import pool from "../utils/db";

export const getWorkouts = async (req: Request, res: Response) => {
  try {
    const result = await pool.query(
      "SELECT * FROM workouts ORDER BY date DESC"
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching workouts:", error);
    res.status(500).json({ error: "Error fetching workouts." });
  }
};
