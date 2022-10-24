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
            img_src: api_data.sprites.other['official-artwork'].front_default || api_data.sprites.front_default || 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1',
            stats: api_data.stats.map(item => item.base_stat),
            stats_names: api_data.stats.map(item => item.stat.name),
            abilities: api_data.abilities.map(item => item.ability.name),
            types: api_data.types.map(item => item.type.name),
            base_experience: api_data.base_experience,
            height: api_data.height,
            weight: api_data.weight,
        });
    } catch (error) {
        res.render('html/assets/404');
    }
}

export {
    httpGetPokemon,
}