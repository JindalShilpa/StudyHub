import express from "express";
import {
  getUserProfile,
  loginUser,
  logoutUser,
  signUpUser,
  updateProfile,
} from "../controllers/user_controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
import upload from "../utils/multer.js";

const Router = express.Router();

Router.route("/signup").post(signUpUser);
Router.route("/login").post(loginUser);
Router.route("/logout").get(logoutUser);
Router.route("/profile").get(isAuthenticated, getUserProfile);
Router.route("/profile/update").put(
  isAuthenticated,
  upload.single("profilePhoto"),
  updateProfile
);
export default Router;
