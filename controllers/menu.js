const menu = require("../models/menu");

const getMenu = async (req, res) => {
    const menuId = req.params.menuId;
    try {
        const MENU = await menu.findById(menuId);
        res.status(200).json(MENU);
    } catch (error) {
        res.status(400).json(error);
    }
};

const getMenus = async (req, res) => {
    try {
        const MENU = await menu.find({});
        res.status(200).json(MENU);
    } catch (error) {
        res.status(400).json(error);
    }
};

const postMenu = async (req, res) => {
    try {
        const { menuDate, category } = req.body;
        const newMenu = await new menu({
            menuDate,
            category,
        });
        await newMenu.save();
        res.status(200).json(newMenu);
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = {
    getMenus,
    postMenu,
    getMenu
}