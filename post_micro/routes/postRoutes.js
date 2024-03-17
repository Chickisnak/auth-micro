import {Router} from "express"
import PostController from "../controller/PostController.js"
import AuthMiddleware from "../middleware/AuthMiddleware.js"

const router = Router()

router.get("/post", PostController.index)
router.post("/post",AuthMiddleware, PostController.store)


export default router