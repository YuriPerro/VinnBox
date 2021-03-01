import express from "express";
import auth from "../middlewares/auth";
import TaskController from "../controllers/task";

const router = express.Router();
router.post("/task/:templateId", auth, TaskController.create);
router.delete("/task/:taskId", auth, TaskController.delete);
router.put("/task/:taskId", auth, TaskController.update);

export default router;
