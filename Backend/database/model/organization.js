const mongoose = require("mongoose")

const organizationSchema = mongoose.Schema({
    companyName: { type: String },
    companyEmail: { type: String},
})

const organizations = mongoose.model("organizations",organizationSchema)

module.exports = organizations