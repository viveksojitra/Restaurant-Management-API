const table = require("../models/table");

const getTable = async (req, res) => {
    const tableId = req.params.tableId;
    try {
        const table = await table.findById(tableId);
        res.status(200).json(table);
    } catch (error) {
        res.status(400).json(error);
    }
}

const getTables = async (req, res) => {
    try {
        const TABLE = await table.find({});

        res.status(200).json(TABLE);
    } catch (error) {
        res.status(400).json(error);
    }
}

const postTable = async (req, res) => {
    try {
        const { tableNumber, tableDescription } = req.body;

        const newTable = await new table({
            tableNumber,
            tableDescription
        })

        await newTable.save();

        res.status(200).json(newTable);
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = {
    getTables,
    postTable,
    getTable
}