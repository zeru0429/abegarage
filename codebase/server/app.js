import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import appRoute from "./route/index.js";

dotenv.config();
const host = process.env.SERVER_HOST;
const port = process.env.SERVER_PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ 
	origin: true,
	credentials: true 
}));

app.use(appRoute);
app.get("/", (req, res) => {
	res.send("<h1>Response</h1>");
});

// Set the Access-Control-Allow-Origin header dynamically
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    next();
});

app.listen(port, host, () => {
	console.log(`http://${host}:${port}`);
});
