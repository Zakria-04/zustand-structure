"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.createNewUser = void 0;
const user_module_1 = __importDefault(require("../Models/user.module"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const createNewUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userName, userPass } = req.body;
    const password = yield bcryptjs_1.default.hash(userPass, 10);
    user_module_1.default.create({
        userName: userName,
        userPass: password,
    })
        .then((Cres) => {
        res.status(200).json({ user: Cres });
    })
        .catch((err) => {
        res.status(500).json({ error: true, errorMessage: err.message });
    });
});
exports.createNewUser = createNewUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userName, userPass } = req.body;
        const user = user_module_1.default.findOne(userName);
        if (!user) {
            res.status(401).json({
                auth: false,
                errorMessage: "UserName or Password is incorrect",
            });
        }
        // const isPasswordValid = await bcrypt.compare(userPass, 123);
        // if (!isPasswordValid) {
        // }
        res.status(200).json({ user });
    }
    catch (err) { }
});
exports.loginUser = loginUser;
