const order = require("../models/order");

const getOrder = async (req, res) => {
    const orderId = req.params.orderId;
    try {
        const ORDER = await order.findById(orderId).populate('staff').populate('table');

        console.log(ORDER);
        res.status(200).json(ORDER);
    } catch (error) {
        res.status(400).json(error);
    }
}

const getOrders = async (req, res) => {
    try {
        const ORDERS = await order.find({});
        res.status(200).json(ORDERS);
    } catch (error) {
        res.status(400).json(error);
    }
}

const postOrder = async (req, res) => {
    try {
        const { orderDateTime } = req.body;

        const newOrder = await new order({
            orderDateTime
        });
        await newOrder.save();
        res.status(200).json(newOrder);
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = {
    getOrders,
    postOrder,
    getOrder
}