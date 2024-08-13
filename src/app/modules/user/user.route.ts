import express from "express";
import {
  createUser,
  getStudentUsers,
  getUserById,
  getUsers,
} from "./user.controller";
const router = express.Router();

router.get("/", getUsers);
router.get("/students", getStudentUsers);
router.get("/:id", getUserById);
router.post("/create-user", createUser);

export default router;
