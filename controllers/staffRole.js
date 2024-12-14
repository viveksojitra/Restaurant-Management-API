const staffRole = require("../models/staffRole");

const getStaffRole = async (req, res) => {
    try {
        const STAFFROLE = await staffRole.findById(req.params.staffRoleId);
        res.status(200).json(STAFFROLE);
    } catch (error) {
        res.status(400).json(error);
    }
}

const getStaffRoles = async (req, res) => {
    try {
        const STAFFROLE = await staffRole.find({});
        res.status(200).json(STAFFROLE);
    } catch (error) {
        res.status(400).json(error);
    }
}

const postStaffRole = async (req, res) => {
    try {
        const { staffRoleCode, staffRoleDescription } = req.body;
        const newStaffRole = await new staffRole({
            staffRoleCode,
            staffRoleDescription
        });
        await newStaffRole.save();
        res.status(200).json(newStaffRole);
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = {
    getStaffRoles,
    postStaffRole,
    getStaffRole
}