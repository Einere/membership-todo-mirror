const userQueries = {
    getAllUsers: `SELECT *
                  FROM User`,
    getUserById: `SELECT *
                  FROM User
                  WHERE id = ?`,
    getUserByUserId: `SELECT *
                      FROM User
                      WHERE user_id = ?`,
    createUser: `INSERT INTO User (user_id, password, name, privilege)
                 VALUES (?, ?, ?, ?)`,
    updateUser: ``,
    deleteUserById: `DELETE
                     FROM User
                     WHERE id = ?`,
    deleteUserByUserId: `DELETE
                         FROM User
                         WHERE user_id = ?`,
    logIn: `SELECT *
            FROM User
            WHERE (user_id = ? AND password = ?)`,
    updateUserPrivilege: `UPDATE User
                          SET privilege = ?
                          WHERE id = ?`
};

module.exports = userQueries;