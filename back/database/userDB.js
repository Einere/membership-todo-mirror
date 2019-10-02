const pool = require('./db.js');
const userModel = require('../models/userModel.js');
const userQueries = require('./SQL/userQueries.js');
const hashPassword = require('../utils/hashPassword.js');

const user = {
    async getAllUsers() {
        const [rows] = await pool.query(userQueries.getAllUsers);

        return rows.length ? rows.map((row) => userModel(row)) : null;
    },
    async getUserById(id) {
        const [rows] = await pool.query(userQueries.getUserById, [id]);

        return rows.length ? userModel(rows[0]) : null;
    },
    async getUserByUserId(userId) {
        const [rows] = await pool.query(userQueries.getUserByUserId, [userId]);

        return rows.length ? userModel(rows[0]) : null;
    },
    async createUser(user) {
        const [rows] = await pool.query(userQueries.createUser, [user.user_id, hashPassword(user.password), user.name, user.privilege]);

        return rows ? this.getUserById(rows.insertId) : null;
    },
    async updateUserPrivilege(user) {
        const [rows] = await pool.query(userQueries.updateUserPrivilege, [user.privilege, user.id]);

        return rows.changedRows ? rows.changedRows : null;
    },
    async deleteUserById(id) {
        const [rows] = await pool.query(userQueries.deleteUserById, [id]);

        return !!rows;
    },
    async logIn(user) {
        const [rows] = await pool.query(userQueries.logIn, [user.user_id, hashPassword(user.password)]);

        return rows.length ? userModel(rows[0]) : null;
    }
};

module.exports = user;