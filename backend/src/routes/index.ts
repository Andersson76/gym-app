import { Router } from "express";
import testRoutes from "./test";
import workoutsRoutes from "./workouts";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    message: "API is running",
    routes: {
      test: "/test",
      workouts: "/workouts",
    },
  });
});

export default router;
