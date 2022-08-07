const { Schema, model } = require("mongoose")

const photoSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        dimensions: {
            type: [Number],
            required: true
        },
        pictureUrl: {
            type: String,
            required: true
        },
        sales: Number,
        visits: Number
    },
    { timestamps: true }
)


module.exports = model("Photo", photoSchema)