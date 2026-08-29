const Board = require("../models/Board");

// Create Board
exports.createBoard = async (req, res) => {
    try {
        const board = await Board.create({
            title: req.body.title,
            owner: req.user.id
        });

        res.status(201).json(board);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// Get Boards
exports.getBoards = async (req, res) => {
    try {

        const boards = await Board.find({
            owner: req.user.id
        });

        res.json(boards);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};
//get board by id

exports.getBoardById = async (req, res) => {

    try {

        const board = await Board.findOne({
            _id: req.params.id,
            owner: req.user.id
        });

        if (!board) {
            return res.status(404).json({
                message: "Board not found"
            });
        }

        res.json(board);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Update Board
exports.updateBoard = async (req, res) => {

    try {

        const board = await Board.findOneAndUpdate(
            {
                _id: req.params.id,
                owner: req.user.id
            },
            {
                title: req.body.title
            },
            {
                new: true
            }
        );

        if (!board) {
            return res.status(404).json({
                message: "Board not found"
            });
        }

        res.json(board);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Delete Board
exports.deleteBoard = async (req, res) => {

    try {

        const board = await Board.findOneAndDelete({
            _id: req.params.id,
            owner: req.user.id
        });

        if (!board) {
            return res.status(404).json({
                message: "Board not found"
            });
        }

        res.json({
            message: "Board deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};