import { Request, Response } from "express";
import pool from "../utils/db";

export const updateWorkout = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, date } = req.body;

  if (!title || !description || !date) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const result = await pool.query(
      `UPDATE workouts SET title = $1, description = $2, date = $3 WHERE id = $4 RETURNING *`,
      [title, description, date, id]
    );

    if (result.rowCount === 0) {
      return res.status(400).json({ message: "Workout not found" });
    }
  } catch (err) {
    console.error("Error updating workout:", err);
    res.status(500).json({ message: "Error updating workout" });
  }
};
