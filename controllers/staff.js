const staff = require("../models/staff");

const getstaff = async (req, res) => {
    const staffId = req.params.staffId;
    try {
        const staff = await staff.findById(staffId).populate("staffRole");

        console.log(staff);
        res.status(200).json(staff);
    } catch (error) {
        res.status(400).json(error);
    }
}

const getStaffs = async (req, res) => {
    try {
        const STAFF = await staff.find({});
        res.status(200).json(STAFF);
    } catch (error) {
        res.status(400).json(error);
    }
}

const postStaff = async (req, res) => {
    try {
        const { fname, lname } = req.body;
        const newStaff = await new staff({
            fname,
            lname,
        });
        await newStaff.save();
        res.status(200).json(newStaff);
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = {
    getStaffs,
    postStaff,
    getstaff
}