import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import userRoute from "./routes/user_routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import courseRoute from "./routes/course_route.js";
import mediaRoute from "./routes/media_routes.js";
dotenv.config();

//call db connection here
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/v1/user", userRoute);
app.use("/api/v1/course", courseRoute);
app.use("/api/v1/media", mediaRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
