"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const index_router_1 = __importDefault(require("./routes/index.router"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(index_router_1.default);
app.set("views", path_1.default.join(__dirname, "../views/site"));
app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
app.use(express_1.default.static(path_1.default.join(__dirname, "../uploads")));
app.set("view engine", "ejs");
exports.default = app;
//# sourceMappingURL=app.js.map