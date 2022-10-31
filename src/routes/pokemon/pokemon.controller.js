import fetch from "node-fetch";

// call pokemon api by pokemon name
async function httpGetPokemon(req, res) {
    try {
        // fetch pokemon general data
        const name = req.params.pokemonName;
        const id = req.params.pokemonId;
        const url = `https://pokeapi.co/api/v2/pokemon/${name}` || `https://pokeapi.co/api/v2/pokemon/${id}`;
        const api_res = await fetch(url);
        const api_data = await api_res.json();

        // fetch pokemon species data
        const speciesURL = `https://pokeapi.co/api/v2/pokemon-species/${name}/`;
        const species_res = await fetch(speciesURL);
        const species_data = await species_res.json();

        // filter flavor_text_entries array and return only english text
        const flavorTexts = species_data.flavor_text_entries.filter(item => item.language.name === 'en');

        res.render('html/assets/pokemon', {
            id: api_data.id,
            name: api_data.name,
            img_src: api_data.sprites.other['official-artwork'].front_default || api_data.sprites.front_default || 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1',
            stats: api_data.stats.map(item => item.base_stat),
            stats_names: api_data.stats.map(item => item.stat.name),
            abilities: api_data.abilities.map(item => item.ability.name),
            types: api_data.types.map(item => item.type.name),
            base_experience: api_data.base_experience,
            height: api_data.height,
            weight: api_data.weight,
            base_happiness: species_data.base_happiness,
            capture_rate: species_data.capture_rate,
            color: species_data.color.name,
            flavor_text: [
                // get flavor texts excluding 0 index
                flavorTexts[1].flavor_text,
                flavorTexts[3].flavor_text,
            ]
        });

    } catch (error) {
        res.render('html/assets/404');
    }
}

export {
    httpGetPokemon,
}