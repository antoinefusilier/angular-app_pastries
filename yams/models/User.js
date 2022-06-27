import mongoose from "mongoose";
// const { Schema, model } = mongoose;

export const UserShema = new mongoose.Schema({
    email: {
        type : String,
        required: true,
    },
    password: {
        type : String,
        required: true,
    },
    token:{
        type: String
    }
});

export const UserModel = mongoose.model('users', UserShema);
