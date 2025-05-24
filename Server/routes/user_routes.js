import express from "express";
import { loginUser, signUpUser } from "../controllers/user_controller.js";

const Router = express.Router();

Router.route("/signup").post(signUpUser);
Router.route("/login").post(loginUser);

export default Router;
