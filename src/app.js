import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// routes
import { homeRouter } from "./routes/home/home.router.js";
import { pokemonRouter } from "./routes/pokemon/pokemon.router.js";
import { listRouter } from "./routes/list/list.router.js";

// init express & path
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// express middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

// pug init
app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'pug');

// set routes
app.use('/', homeRouter);
app.use('/pokemon', pokemonRouter);
app.use('/list', listRouter);

export {
    app,
}