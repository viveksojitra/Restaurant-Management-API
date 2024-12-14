const menuItem = require("../models/menuItem");

const getMenuItem = async (req, res) => {
    const menuItemId = req.params.menuItemId;
    try {
        const menuItem = await menuItem.findById(menuItemId).populate('menu');

        console.log(menuItem);
        res.status(200).json(menuItem);
    } catch (error) {
        res.status(400).json(error);
    }
}

const getMenuItems = async (req, res) => {
    try {
        const menuItems = await menuItem.find({});
        res.status(200).json(menuItems);
    } catch (error) {
        res.status(400).json(error);
    }
}

const postMenuItem = async (req, res) => {
    try {
        const { price, description } = req.body;

        const newMenuItem = await new menuItem({
            price,
            description
        });
        await newMenuItem.save();
        res.status(200).json(newMenuItem);
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = {
    getMenuItem,
    getMenuItems,
    postMenuItem
}