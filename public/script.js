import { searchPokemon } from "./js/search.js";

const form = document.getElementById('searchPokemon');
const search = document.getElementById('searchInput');

// init search function
searchPokemon(form, search);