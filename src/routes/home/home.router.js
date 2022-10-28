import express from "express";
import { httpHomePage, httpSearchPokemon, httpRandomPokemon } from "./home.controller.js";

const homeRouter = express.Router();

// home routes
homeRouter.get('/', httpHomePage);
homeRouter.post('/search', httpSearchPokemon);
homeRouter.get('/random', httpRandomPokemon);

export {
    homeRouter,
}