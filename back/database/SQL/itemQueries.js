const itemQueries = {
    getAllItems: `SELECT *
                  FROM Item`,
    getItemById: `SELECT *
                  FROM Item
                  WHERE id = ?`,
    createItem: `INSERT INTO Item (src, category, title, content, href, link)
                 VALUES (?, ?, ?, ?, ?, ?)`,
    updateItem: `UPDATE Item
                 SET src      = ?,
                     category = ?,
                     title    = ?,
                     content  = ?,
                     href     = ?,
                     link     = ?
                 WHERE id = ?`,
    deleteItem: `DELETE
                 FROM Item
                 WHERE id = ?`,
};

module.exports = itemQueries;