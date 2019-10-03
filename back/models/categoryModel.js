const categoryModel = (result) => {
    return {
        id: result.id,
        name: result.name,
        board: result.board,
    };
};

module.exports = categoryModel;