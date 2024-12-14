const mongoose = require("mongoose");

const staffRoleSchema = new mongoose.Schema({
    staffRoleCode: {
        type: String,
        required: true
    },
    staffRoleDescription: {
        type: String
    },
});

module.exports = mongoose.model("StaffRole", staffRoleSchema);