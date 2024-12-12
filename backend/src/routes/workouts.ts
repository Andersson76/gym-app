import { Router } from "express";
import { getWorkouts } from "../api/getWorkouts";
import { postWorkout } from "../api/postWorkout";

const router = Router();

router.get("/", getWorkouts);
router.post("/", postWorkout);

export default router;
