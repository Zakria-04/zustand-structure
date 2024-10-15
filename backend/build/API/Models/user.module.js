"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    userPass: {
        type: String,
        required: true,
    },
});
const USER_MODEL = (0, mongoose_1.model)("code-structure_server", UserSchema);
exports.default = USER_MODEL;
