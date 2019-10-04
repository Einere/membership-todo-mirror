const noteModel = (result) => {
    return {
        id: result.id,
        content: result.content,
        position: result.position,
        category: result.category,
        author: result.author,
    };
};

module.exports = noteModel;