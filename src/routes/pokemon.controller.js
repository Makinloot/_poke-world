import fetch from "node-fetch";

async function httpGetPokemon(req, res) {
    // call pokemon api by pokemon name
    const name = req.params.pokemonName;
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const api_res = await fetch(url);
    const api_data = await api_res.json();

    // res.json('BABY GHIRLLL')
    res.render('index', {
        name: api_data.name,
        img_src: api_data.sprites.other['official-artwork'].front_default || api_data.sprites.front_default,
    });
}

export {
    httpGetPokemon,
}