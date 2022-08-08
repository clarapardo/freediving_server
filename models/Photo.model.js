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
        photoUrl: {
            type: String,
            required: true
        },
        location: String,
        sales: Number,
        visits: Number,
        gridSize: {
            type: String,
            enum: ['small', 'square', 'medium', 'large', 'extralarge']
        }
    },
    { timestamps: true }
)


module.exports = model("Photo", photoSchema)