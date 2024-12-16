import { Request, Response } from "express";
import pool from "../utils/db";

export const deleteWorkout = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      `DELETE FROM workouts WHERE id = $1 RETURNING *`,
      [id]
    );

    if(result.rowCount === 0) {
      return res.status(404).json({ message: "Workout not found" })
    }

    res.json({ message: "Workout deleted successfully", workout: result.rows[0] })
  } catch (err) {
    console.error("Error deleting workout:", err)
    res.status(500).json({ message: "Error deleting workout" })
  }
};
