const { Schema, model } = require("mongoose")

const photoSchema = new Schema(
    {
        items: [{
            type: Schema.Types.ObjectId,
            ref: 'Photo'
        }]
    },
    { timestamps: true }
)


module.exports = model('Cart', photoSchema)