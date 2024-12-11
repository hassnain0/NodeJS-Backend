    const mongoose = require("mongoose");

    const dataSchema = new mongoose.Schema(
    {
        text: {
        type: String,
        required: true,
        unique: true,
        },
    },
    { timestamps: true }
    );

    const dataModel=mongoose.model('data',dataSchema)

    module.exports=dataModel;