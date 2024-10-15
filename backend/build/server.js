"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const App_1 = __importDefault(require("./App"));
const port = process.env.PORT || 3000;
const server = (0, http_1.createServer)(App_1.default);
server.listen(port, (err) => {
    if (err)
        throw err;
    console.log(`Server is running on port ${port}\nwaiting for mongoose connection...`);
});
