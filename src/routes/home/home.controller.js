import { results } from "../../models/home.model.js";

// return index.html when user is at homepage ('/')
function httpHomePage(req, res) {
    res.render('index');
}

// return pokemon name to user if it exists
function httpSearchPokemon(req, res) {
    const name = req.body.name.toLowerCase();

    if(results.includes(name)) {
        res.status(200).json(name);
    } else {
        res.status(404).json('No');
    }
}

export {
    httpHomePage,
    httpSearchPokemon,
}
