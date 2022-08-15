const mongoose = require("mongoose")


const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, `must be provied`],
  },
  price: {
    type: Number,
    required: [true, `must be provied`],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  company: {
    type: String,
    enum: {
      values: ["ikea", "liddy", "caressa", "marcos"],
      message: "{VALUE} is not suppoted",
    },
    //   enum:['ikea','liddy','caressa','marcos'],
  },
});

const Products = mongoose.model("Products", productSchema);


module.exports = Products;