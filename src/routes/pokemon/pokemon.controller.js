import fetch from "node-fetch";

// call pokemon api by pokemon name
async function httpGetPokemon(req, res) {
    try {
        const name = req.params.pokemonName;
        const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
        const api_res = await fetch(url);
        const api_data = await api_res.json();
        res.render('html/assets/pokemon', {
            name: api_data.name,
            img_src: api_data.sprites.other['official-artwork'].front_default || api_data.sprites.front_default,
        });
    } catch (error) {
        res.render('html/assets/404');
    }
}

export {
    httpGetPokemon,
}