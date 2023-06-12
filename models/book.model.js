const mongoose = require("mongoose");
const Joi = require("joi");

const bookModel = require("./book.model");
const User = require("./user.model");

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      max: 40,
    },
    description: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    status: { type: String, enum: ["published", "draft"] , default: "draft"},
    coverImageUrl: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Define a pre-save hook to validate data using Joi
// userSchema.pre("save", async function (next) {
//   const user = this; // Reference to the current user being saved

//   try {
//     // Define a Joi schema for validation
//     const schema = Joi.object({
//       name: Joi.string().required(),
//       username: Joi.string().email().required(),
//       password: Joi.string().min(6).required(),
//       salt: Joi.string().
//     });

//     // Validate the user data using Joi
//     await schema.validateAsync(user.toObject());

//     // Validation passed, move to the next middleware/hook
//     next();
//   } catch (error) {
//     // Validation failed, pass the error to the next middleware/hook
//     next(error);
//   }
// });

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
