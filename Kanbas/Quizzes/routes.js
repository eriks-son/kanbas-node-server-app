import * as dao from "./dao.js";
export default function QuizRoutes(app) {
    app.get("/api/quizzes/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const quiz = await dao.findQuizById(quizId);
        res.send(quiz);
    });
    app.put("/api/quizzes/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const quizUpdates = req.body;
        const status = await dao.updateQuiz(quizId, quizUpdates);
        res.send(status);
    });
    app.delete("/api/quizzes/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const status = await dao.deleteQuiz(quizId);
        res.send(status);
    });
    app.get("/api/quizzes/:quizId/attempts/:userId", async (req, res) => {
        const { quizId, userId } = req.params;
        const attempts = await dao.findQuizAttempts(quizId, userId);
        res.send(attempts);
    });
    app.post("/api/quizzes/:quizId/attempts/:userId", async (req, res) => {
        const { quizId, userId } = req.params;
        const score = req.body.score;
        const answers = req.body.answers;
        const attempts = await dao.findQuizAttempts(quizId, userId);
        const quiz = await dao.findQuizById(quizId);
        if (attempts.length >= quiz.allowedAttempts) {
            res.status(401).json({ message: "Unable to submit quiz attempt. Max attempts already reached." });
        } else {
            const status = await dao.createQuizAttempt(quizId, userId, score, answers);
            res.send(status);
        }
    });
}