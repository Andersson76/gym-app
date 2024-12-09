import { Router } from "express";
import testRoutes from "./test";

const router = Router();

router.use("/test", testRoutes); //Koppla '/test' routes
router.get("/", (req, res) => {
  res.send("Hello from backend =)");
});

export default router;
