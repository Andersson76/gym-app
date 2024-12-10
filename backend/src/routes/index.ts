import { Router } from "express";
import testRoutes from "./test";
import workoutsRoutes from "./workouts";

const router = Router();

router.use("/test", testRoutes);

router.use("/workouts", workoutsRoutes);

router.get("/", (req, res) => {
  res.send("Hello from Index");
});

export default router;
