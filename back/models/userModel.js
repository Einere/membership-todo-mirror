const userModel = (user) => {
    return {
        id: user.id,
        userId: user.user_id,
        password: user.password,
        name: user.name,
        privilege: user.privilege,
    };
};

module.exports = userModel;