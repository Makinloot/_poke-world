// import { listResults } from "../../models/list.model.js";
import fetch from "node-fetch";

async function httpGetList(req, res) {
    
    const page = req.query.page;
    const limit = 4;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    
    // fetch pokemons according to query.page
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${startIndex}`;
    const list_res = await fetch(url);
    const list_data = await list_res.json();
    
    // fetch images for each pokemon
    let imgArr = [];
    const nameData = list_data.results.map(item => item.name);
    for(let i = 0; i < nameData.length; i++) {
        const name_url = `https://pokeapi.co/api/v2/pokemon/${nameData[i]}`;
        const name_res = await fetch(name_url);
        const name_data = await name_res.json();
        const imagesSrc = name_data.sprites.other['official-artwork'].front_default || name_data.sprites.front_default || 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1';
        imgArr.push(imagesSrc);
    };
    
    const pageLength = Math.floor(list_data.count / limit);

    res.render('html/assets/list', {
        list: list_data.results.map(item => item.name),
        current_page: page,
        last_page: pageLength,
        images: imgArr,
    });
} 

export {
    httpGetList,
}