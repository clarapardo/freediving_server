const { Schema, model } = require("mongoose")

const userSchema = new Schema(
  {
    // username: String,
    // password: String,
    cart: {
      type: Schema.Types.ObjectId,
      ref: 'Cart'
    }
  },
  { timestamps: true }
)

module.exports = model("User", userSchema)
