import express from "express";
import { router } from "./routes.js";

const app = express();

app.use(express.json())
app.use(router);

app.listen(3333, () => {
    console.log('server at port 3333 is running')
});
