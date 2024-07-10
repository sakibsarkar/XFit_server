"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const globalError_1 = __importDefault(require("./app/middlewere/globalError"));
const not_found_1 = require("./app/middlewere/not-found");
const routes_1 = __importDefault(require("./app/routes"));
const app = (0, express_1.default)();
// Middlewares
app.use((0, cors_1.default)({
    origin: "*",
}));
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
app.get("/", (req, res) => {
    res.send("Hello from server");
});
app.use("/api/v1", routes_1.default);
// 404 Handler
app.use(not_found_1.notFound);
app.use(globalError_1.default);
exports.default = app;
