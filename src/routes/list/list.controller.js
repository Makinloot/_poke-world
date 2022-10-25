// import { listResults } from "../../models/list.model.js";
import fetch from "node-fetch";

async function httpGetList(req, res) {
    
    const page = req.query.page;
    const limit = 10;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${startIndex}`;
    const list_res = await fetch(url);
    const list_data = await list_res.json();
    
    const pageLength = Math.floor(list_data.count / limit);
    // console.log(pageLength);
    
    // console.log('PAGE:', page);
    // res.json(list_data);
    res.render('html/assets/list', {
        list: list_data.results.map(item => item.name),
        current_page: page,
    });
} 

export {
    httpGetList,
}