import { results } from "../../models/home.model.js";

// return index.html when user is at homepage ('/') ( GET REQUEST )
function httpHomePage(req, res) {
    res.render('index');
}

// return pokemon name to user if it exists ( POST REQUEST )
function httpSearchPokemon(req, res) {
    const name = req.body.name.toLowerCase();

    if(results.includes(name)) {
        res.status(200).json(name);
    } else {
        res.status(404).json('No');
    }
}

// return random pokemon name
function httpRandomPokemon(req, res) {

   const min = Math.ceil(1);
   const max = Math.floor(results.length / 2);
   const randomNum = Math.floor(Math.random() * (max - min + 1)) + 1;
   const randomPokemon = results[randomNum];

   res.json(randomPokemon);
    // res.json(req.body)
}

export {
    httpHomePage,
    httpSearchPokemon,
    httpRandomPokemon,
}
