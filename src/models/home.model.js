import fetch from "node-fetch";

// fetch every pokemon
const url = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`
const res = await fetch(url);
const data = await res.json();

// return only NAMES from data
const results = data.results.map(item => {
    return item.name;
});

export {
    results,
}