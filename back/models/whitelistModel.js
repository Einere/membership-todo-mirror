const whitelistModel = (result) => {
    return {
        id: result.id,
        user: result.user,
        mode: result.mode,
    };
};

module.exports = whitelistModel;