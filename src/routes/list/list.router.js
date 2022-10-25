import express from "express";
import { httpGetList } from "./list.controller.js";

const listRouter = express.Router();

listRouter.get('/', httpGetList);

export {
    listRouter,
}