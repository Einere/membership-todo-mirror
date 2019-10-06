const pool = require('./db.js');
const {boardModel, categoryModel, noteModel, modeModel, whitelistMode, logModel} = require('./models/index.js');
const todoQueries = require('./SQL/todoQueries.js');

const todoDB = {
    async createBoard(name, owner, mode) {
        const [rows] = await pool.query(todoQueries.create.createBoard, [name, owner, mode]);

        return rows ? this.getBoardById(rows.insertId) : null;
    },
    async getBoardByUserId(userId) {
        const [rows] = await pool.query(todoQueries.select.getBoardByUserId, [userId]);

        return rows.length ? boardModel(rows[0]) : null;
    },
    async getBoardById(id) {
        const [rows] = await pool.query(todoQueries.select.getBoardById, [id]);

        return rows.length ? boardModel(rows[0]) : null;
    },
    async updateBoardNameById(id, name) {
        const [rows] = await pool.query(todoQueries.update.updateBoardNameById, [name, id]);

        return rows.changedRows ? rows.changedRows : null;
    },
    async updateBoardModeById(id, mode) {
        const [rows] = await pool.query(todoQueries.update.updateBoardModeById, [mode, id]);

        return rows.changedRows ? rows.changedRows : null;
    },
    async deleteBoardById(id) {
        const [rows] = await pool.query(todoQueries.delete.deleteBoardById, [id]);

        return !!rows;
    },
    async createCategory(name, board) {
        const [rows] = await pool.query(todoQueries.create.createCategory, [name, board]);

        return rows ? this.getCategoryById(rows.insertId) : null;
    },
    async getCategoriesByBoardId(boardId) {
        const [rows] = await pool.query(todoQueries.select.getCategoriesByBoardId, [boardId]);

        return rows.length ? rows.map((row) => categoryModel(row)) : null;
    },
    async getCategoryById(id) {
        const [rows] = await pool.query(todoQueries.select.getCategoryById, [id]);

        return rows.length ? categoryModel(rows[0]) : null;
    },
    async updateCategoryNameById(id, name) {
        const [rows] = await pool.query(todoQueries.update.updateCategoryNameById, [name, id]);

        return rows.changedRows ? rows.changedRows : null;
    },
    async deleteCategoryById(id) {
        const [rows] = await pool.query(todoQueries.delete.deleteCategoryById, [id]);

        return !!rows;
    },
    async createNote(category, content, author, position) {
        const [rows] = await pool.query(todoQueries.create.createNote, [content, position, category, author]);

        return rows ? this.getNoteById(rows.insertId) : null;
    },
    async getSomeNotesByCategoryId(categoryId) {
        const [rows] = await pool.query(todoQueries.select.getSomeNotesByCategoryId, [categoryId]);

        return rows.length ? rows.map((row) => noteModel(row)) : null;
    },
    async getNoteById(id) {
        const [rows] = await pool.query(todoQueries.select.getNoteById, [id]);

        return rows.length ? noteModel(rows[0]) : null;
    },
    async updateNoteContentById(id, content) {
        const [rows] = await pool.query(todoQueries.update.updateNoteContentById, [content, id]);

        return rows.changedRows ? rows.changedRows : null;
    },
    async updateNoteCategoryById(id, to) {
        const [rows] = await pool.query(todoQueries.update.updateNoteCategoryById, [to, id]);

        return rows.changedRows ? rows.changedRows : null;
    },
    async updateNotePositionById(id, position) {
        const [rows] = await pool.query(todoQueries.update.updateNotePositionById, [position, id]);

        return rows.changedRows ? rows.changedRows : null;
    },
    async moveNoteById(id, from, to, position) {
        const changedRows1 = await this.updateNoteCategoryById(id, to);
        const changedRows2 = await this.updateNotePositionById(id, position);

        return [changedRows1, changedRows2];
    },
    async deleteNoteById(id) {
        const [rows] = await pool.query(todoQueries.delete.deleteNoteById, [id]);

        return !!rows;
    },
    async getModeById(id) {
        const [rows] = await pool.query(todoQueries.select.getModeById, [id]);

        return rows.length ? modeModel(rows[0]) : null;
    },
    async getModeByMode(mode) {
        const [rows] = await pool.query(todoQueries.select.getModeByMode, [mode]);

        return rows.length ? modeModel(rows[0]) : null;
    },
    async createMode(mode) {
        const [rows] = await pool.query(todoQueries.create.createMode, [mode]);

        return rows ? this.getModeById(rows.insertId) : null;
    },
    async updateModeById(id, mode) {
        const [rows] = await pool.query(todoQueries.update.updateModeById, [mode, id]);

        return rows.changedRows ? rows.changedRows : null;
    }
};

module.exports = todoDB;