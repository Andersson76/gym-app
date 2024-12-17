import { Request, Response } from "express";
import pool from "../utils/db";

export const deleteWorkout = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const result = await pool.query(`DELETE FROM workouts WHERE id = $1`, [id]);

    console.log("Deleting workout with ID:", id);

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Workout not found" });
    }

    res.json({
      message: "Workout deleted successfully",
    });
  } catch (err) {
    console.error("Error deleting workout:", err);
    res.status(500).json({ message: "Error deleting workout" });
  }
};
