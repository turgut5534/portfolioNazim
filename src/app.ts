import express from "express"
import path from "path";
import indexRouter from "./routes/index.router"

const app = express()
app.use(express.json())
app.use(indexRouter)
app.set("views", path.join(__dirname, "../views/site"));
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname, "../uploads")));
app.set("view engine", "ejs");

export default app;