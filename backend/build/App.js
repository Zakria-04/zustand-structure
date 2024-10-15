"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const routes_1 = __importDefault(require("./API/Router/routes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/", routes_1.default);
const url = "mongodb+srv://code-structure_server:code-structure_server123@cluster0.0waqbd5.mongodb.net/";
mongoose_1.default.connect(url);
mongoose_1.default.connection.on("connected", () => {
    console.log("Mongoose connected");
});
mongoose_1.default.connection.on("error", (err) => {
    console.error("MongoDB error", err);
});
app.get("/server", (req, res) => {
    res.status(200).json({ server: "server is online" });
});
exports.default = app;
