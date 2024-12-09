import mongoose from "mongoose";
const quizSchema = new mongoose.Schema(
 {
   name: {
    type: String,
    default: "Unnamed Quiz",
   },
   description: String,
   quizType: {
     type: String,
     enum: ["GRADED_QUIZ", "PRACTICE_QUIZ", "GRADED_SURVEY", "UNGRADED_SURVEY"],
     default: "GRADED_QUIZ",
   },
   assignmentGroup: {
     type: String,
     enum: ["QUIZZES", "EXAMS", "ASSIGNMENTS", "PROJECT"],
     default: "QUIZZES",
   },
   shuffleAnswers: {
    type: Boolean,
    default: true,
   },
   timeLimit: {
    type: Number,
    default: 20,
   },
   allowedAttempts: {
     type: Number,
     default: 1,
   },
   showCorrectAnswers: {
    type: Boolean,
    default: true,
   },
   showCorrectAnswersDate: {
    type: Date,
    default: Date.now(),
   },
   accessCode: {
    type: String,
    default: "",
   },
   oneQuestionAtATime: {
    type: Boolean,
    default: true,
   },
   webcamRequired: {
    type: Boolean,
    default: false,
   },
   lockAfterAnswering: {
    type: Boolean,
    default: false,
   },
   published: { type: Boolean, default: false },
   availableStartDate: {
    type: Date,
    default: Date.now(),
   },
   availableEndDate: {
    type: Date,
    default: Date.now(),
   },
   dueDate: {
    type: Date,
    default: Date.now(),
   },
   questions: Array,
   course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
 },
 { collection: "quizzes" }
);
export default quizSchema;