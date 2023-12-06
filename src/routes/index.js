import express from "express";
export { router as userRoute } from "../modules/users/users.route.js";

export const router = express.Router();

router.use("/users", userRoute);
