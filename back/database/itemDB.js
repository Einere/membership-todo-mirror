const pool = require('./db.js');
const {itemModel} = require('./models/index.js');
const itemQueries = require('./SQL/itemQueries.js');

const itemDB = {
    async getAllItems() {
        const [rows] = await pool.query(itemQueries.getAllItems);

        return rows.length ? rows.map((row) => itemModel(row)) : null;
    },
    async getItemById(id) {
        const [rows] = await pool.query(itemQueries.getItemById, [id]);

        return rows.length ? itemModel(rows[0]) : null;
    },
    async createItem(item) {
        const [rows] = await pool.query(itemQueries.createItem, [item.src, item.category, item.title, item.content, item.href, item.link]);

        return rows ? this.getItemById(rows.insertId) : null;
    },
    async updateItem(item) {
        const [rows] = await pool.query(itemQueries.updateItem, [item.src, item.category, item.title, item.content, item.href, item.link]);

        return rows.changedRows ? rows.changedRows : null;
    },
    async deleteItem(id) {
        const [rows] = await pool.query(itemQueries.deleteItem, [id]);

        return !!rows;
    }
};

module.exports = itemDB;