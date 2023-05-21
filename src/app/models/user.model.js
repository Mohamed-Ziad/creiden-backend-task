const { Schema, model } = require("mongoose");
const { isEmail } = require("validator");
const UserModel = new Schema({
    name: {
        type: String,
        required: [true, "username is required"],
        minLength: ["4", "username must be more than 3 character"]
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: [true, "email is required"],
        validate: [isEmail, "invalid email"]
    },
    password: {
        type: String,
        required: [true, "password is required"],
        minLength: [8, "password must be 8 at lest "]
    },
    image: {
        relativePath: {
            type: String,
        },
        fullPath: {
            type: String,
        }
    },
    role: {
        type: String,
        required: [true, "role is required"]
    }
})

module.exports = model("user", UserModel);
