import { Router, Request, Response } from "express";
import { Workout } from "../interfaces/workout";

const router = Router();

const workouts: Workout[] = [];

// GET all workouts
router.get("/", (req: Request, res: Response) => {
  res.json(workouts);
});

// POST a new workout
router.post("/", (req: Request, res: Response) => {
  const { name, duration, type } = req.body;
  if (!name || !duration || !type) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newWorkout: Workout = {
    id: workouts.length + 1,
    name,
    duration,
    type,
  };

  workouts.push(newWorkout);
  res.status(201).json(newWorkout);
});

export default router;
