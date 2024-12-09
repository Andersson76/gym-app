import { Router } from "express";

const router = Router();

router.post("/", (req, res) => {
  res.json({ message: "Post request recieved!" });
});

export default router;
