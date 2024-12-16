import { Request, Response } from "express";
import pool from "../utils/db";


export const postWorkout = async (req: Request, res: Response) => {
  const { title, description, date } = req.body;

  if (!title || !description || !date) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const result = await pool.query(
      `INSERT INTO workouts (date, title, description)
       VALUES ($1, $2, $3) RETURNING *`,
      [date, title, description]
    );

    return res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("Error inserting workout:", err);
    return res.status(500).json({ message: "Error adding workout" });
  }
};
