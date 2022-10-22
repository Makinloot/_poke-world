import express from "express";
import { httpHomePage, httpSearchPokemon } from "./home.controller.js";

const homeRouter = express.Router();

// home routes
homeRouter.get('/', httpHomePage);
homeRouter.post('/search', httpSearchPokemon);

export {
    homeRouter,
}