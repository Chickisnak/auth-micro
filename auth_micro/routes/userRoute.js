import { Router } from "express"
import UserController from "../controller/UserController.js";

const router = Router();

router.get("/getUser/:id", UserController.getUser)
router.get("/getUsers", UserController.getUsers)

export default router