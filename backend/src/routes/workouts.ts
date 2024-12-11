import { Router } from "express";
import { getWorkouts } from "../api/getWorkouts";
import { postWorkout } from "../api/postWorkout";

const router = Router();

router.get("/workouts", getWorkouts);
router.post("/workouts", postWorkout);

export default router;
