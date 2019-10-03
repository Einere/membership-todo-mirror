const logModel = (result) => {
    return {
        id: result.id,
        action: result.action,
        time: result.time,
        actor: result.actor,
        what: result.what,
        from: result.from,
        to: result.to,
    };
};

module.exports = logModel;