const { Schema, model } = require("mongoose")

const userSchema = new Schema(
  {
    firstName: String, 
    lastName: String,
    email: String,
    cart: {
      type: Schema.Types.ObjectId,
      ref: 'Cart'
    }
  },
  { timestamps: true }
)

module.exports = model("User", userSchema)
