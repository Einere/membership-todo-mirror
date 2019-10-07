const todoQueries = {
    select: {
        getAllBoards: 'SELECT * FROM Board',
        getBoardById: 'SELECT * FROM Board WHERE id = ?',
        getBoardByUserId: 'SELECT * FROM Board WHERE owner = (SELECT id from User WHERE user_id = ?)',
        getCategoriesByBoardId: 'SELECT * FROM Category WHERE board = ?',
        getCategoryById: 'SELECT * FROM Category WHERE id = ?',
        getNotesByCategoryId: 'SELECT * FROM Note WHERE category = ?',
        getMaxPositionByCategoryId: 'SELECT position FROM Note WHERE category = ? ORDER BY position DESC',
        getNoteById: 'SELECT * FROM Note WHERE id = ?',
        getModeById: 'SELECT * FROM Mode WHERE id = ?',
        getModeByMode: 'SELECT * FROM Mode WHERE mode = ?'
    },
    create: {
        createBoard: 'INSERT INTO Board (name, owner, mode) VALUES (?, ?, ?)',
        createCategory: 'INSERT INTO Category (name, board) VALUES (?, ?)',
        createNote: 'INSERT INTO Note (content, position, category, author) VALUES (?, ?, ?, ?)',
        createMode: 'INSERT INTO Mode (mode) VALUES (?)'
    },
    update: {
        updateBoardModeById: 'UPDATE Board SET mode = ? WHERE id = ?',
        updateBoardNameById: 'UPDATE Board SET name = ? WHERE id = ?',
        updateCategoryNameById: 'UPDATE Category SET name = ? WHERE id = ?',
        updateNoteContentById: 'UPDATE Note SET content = ? WHERE id = ?',
        updateNoteCategoryById: 'UPDATE Note SET category = ? WHERE id = ?',
        updateNotePositionById: 'UPDATE Note SET position = ? WHERE id = ?',
        updateModeById: 'UPDATE Mode SET mode = ? WHERE id = ?'
    },
    delete: {
        deleteBoardById: 'DELETE FROM Board WHERE id = ?',
        deleteCategoryById: 'DELETE FROM Category WHERE id = ?',
        deleteNoteById: 'DELETE FROM Note WHERE id = ?',
    }
};

module.exports = todoQueries;