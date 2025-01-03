import {
  deleteTask,
  fetchTasks,
  getTaskByID,
  UpdateTask,
  AddTask,
} from "../Controller/task.js";
import User from "../models/user.js";
import express from "express";
import { loggedMiddleware, isAdmin } from "../Middleware/User.js";

const router = express.Router();

//routers

router.get("/", loggedMiddleware, isAdmin, fetchTasks);
router.get("/:id", getTaskByID);

router.post("/", AddTask);

router.patch("/:id", UpdateTask);

router.delete("/:id", deleteTask);
export default router;
