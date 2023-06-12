const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      max: 40,
    },
    username: {
      type: String,
      required: true,
      max: 40,
    },
    password: {
      type: String,
      required: true,
    },
    salt: {
      type: String,
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

const User = mongoose.model("user", userSchema);
module.exports = User;
