import model from "./model.js";
import attemptModel from "./attemptModel.js";
export async function findQuizzesForCourse(courseId) {
    return await model.find({ course: courseId });
}
export async function findQuizById(quizId) {
    return await model.findOne({ _id: quizId });
}
export async function findQuizAttempts(quizId, userId) {
    return await attemptModel.find({ quiz: quizId, user: userId });
}
export async function createQuizAttempt(quizId, userId, score, answers) {
    return await attemptModel.create({ quiz: quizId, user: userId, score: score, answers: answers, timestamp: Date.now()});
}
export async function createNewQuiz(courseId) {
    return await model.create({ course: courseId });
}
export async function updateQuiz(quizId, quizUpdates) {
    return await model.updateOne({ _id: quizId}, { $set: quizUpdates });
}
export async function deleteQuiz(quizId) {
    return await model.deleteOne({ _id: quizId });
}