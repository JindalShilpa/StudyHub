import express from "express";
import {
  getUserProfile,
  loginUser,
  logoutUser,
  signUpUser,
} from "../controllers/user_controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const Router = express.Router();

Router.route("/signup").post(signUpUser);
Router.route("/login").post(loginUser);
Router.route("/logout").get(logoutUser );
Router.route("/profile").get(isAuthenticated, getUserProfile);

export default Router;
 