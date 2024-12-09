import mongoose from "mongoose";
import attemptSchema from "./attemptSchema.js";
const attemptModel = mongoose.model("QuizAttemptModel", attemptSchema);
export default attemptModel;