import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// routes
import { pokemonRouter } from "./routes/pokemon.router.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'pug');

// set routes
app.use('/pokemon', pokemonRouter)


export {
    app,
}