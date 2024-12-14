const customers = require("../models/customers");

const getCustomer = async (req, res) => {
    try {
        const CUSTOMER = await customers.findById(req.params.customerId);

        res.status(200).json(CUSTOMER);
    } catch (error) {
        res.status(400).json(error);
    }
}

const getCustomers = async (req, res) => {
    try {
        const CUSTOMERS = await customers.find({});

        res.status(200).json(CUSTOMERS);
    } catch (error) {
        res.status(400).json(error);
    }
}

const postCustomer = async (req, res) => {
    try {
        const { fname, lname, contact, email, userDescription } = req.body;

        const newCustomer = await new customers({
            fname,
            lname,
            contact,
            email,
            userDescription
        })

        await newCustomer.save();

        res.status(200).json(newCustomer);
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = {
    getCustomers,
    postCustomer,
    getCustomer
}