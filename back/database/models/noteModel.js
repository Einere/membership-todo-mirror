const noteModel = (result) => {
    return {
        id: result.id,
        content: result.content,
        position: result.position,
        category: result.category,
        author: result.author,
        name: result.name
    };
};

module.exports = noteModel;