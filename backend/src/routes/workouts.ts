import { Router } from "express";
import { getWorkouts } from "../api/getWorkouts";
import { postWorkout } from "../api/postWorkout";
import { updateWorkout } from "../api/updateWorkout";
//import { deleteWorkout } from "../api/deleteWorkout";

const router = Router();

router.get("/", getWorkouts);
router.post("/", postWorkout);
router.put("/:id", updateWorkout);
//router.delete("/:id", deleteWorkout);

export default router;
