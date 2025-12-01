import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import indexRouter from "./routes/index.router.js";
import adminRouter from "./routes/admin.router.js"
import bodyParser from 'body-parser';
import cookieParser from "cookie-parser";

// Fix __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(indexRouter);
app.use('/admin',adminRouter)

app.set("views", path.join(__dirname, "../views"));
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname, "../uploads")));
app.set("view engine", "ejs");

export default app;
