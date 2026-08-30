const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");

const {
    createBoard,
    getBoards,
    getBoardById,
    updateBoard,
    deleteBoard
} = require("../controllers/boardController");

router.post("/", auth, createBoard);

router.get("/", auth, getBoards);
router.get("/:id", auth, getBoardById);
router.put("/:id", auth, updateBoard);
router.delete("/:id", auth, deleteBoard);
module.exports = router;