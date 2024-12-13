"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getWorkouts_1 = require("../api/getWorkouts");
const postWorkout_1 = require("../api/postWorkout");
const router = (0, express_1.Router)();
router.get("/", getWorkouts_1.getWorkouts);
router.post("/", postWorkout_1.postWorkout);
exports.default = router;
