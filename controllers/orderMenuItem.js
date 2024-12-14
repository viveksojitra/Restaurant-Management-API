const orderMenuItem = require("../models/orderMenuItem");

const getOrderMenuItem = (req, res) => {
    const orderMenuItemId = req.params.orderMenuItemId;
    try {
        const ORDERMENUITEM = orderMenuItem.findById(orderMenuItemId).populate('order').populate('menuItem');

        console.log(ORDERMENUITEM);
        res.status(200).json(ORDERMENUITEM);
    } catch (error) {
        res.status(400).json(error);
    }
}

const getOrderMenuItems = async (req, res) => {
    try {
        const ORDERMENUITEM = await orderMenuItem.find({});
        res.status(200).json(ORDERMENUITEM);
    } catch (error) {
        res.status(400).json(error);
    }
}

const postOrderMenuItem = (req, res) => {
    try {
        const { items, suggestion } = req.body;
        const newOrderMenuItem = new orderMenuItem({
            items,
            suggestion
        })
        newOrderMenuItem.save();
        res.status(200).json(newOrderMenuItem);
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = {
    getOrderMenuItems,
    postOrderMenuItem,
    getOrderMenuItem
}