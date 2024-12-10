import { Router } from "express";
import testRoutes from "./test";

const router = Router();

router.use("/test", testRoutes);

router.get("/", (req, res) => {
  res.send("Hello from Index");
});

export default router;
