import mongoose from "mongoose";
const quizAttemptSchema = new mongoose.Schema(
 {
    quiz: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel" },
    timestamp: Date,
    score: Number,
    answers: Array,
 },
 { collection: "quizAttempts" }
);
export default quizAttemptSchema;