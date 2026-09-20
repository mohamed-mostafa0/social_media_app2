import {Router} from "express"
import postService from './Services/post.service.js'
import { authentication } from "../../Middlewares/index.js"

export const PostController = Router()


PostController.post("/add-post" , authentication , postService.addPost)