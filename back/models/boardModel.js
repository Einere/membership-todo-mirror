const boardModel = (result) => {
    return {
        id: result.id,
        name: result.name,
        owner: result.owner,
        mode: result.mode,
    };
};

module.exports = boardModel;