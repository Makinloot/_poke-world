// import fetch from "node-fetch";
// import { imgArr } from "../routes/list/list.controller.js";

// async function pushImageSrcInArray(data) {
//     for(let i = 0; i < data.length; i++) {
//         const name_url = `https://pokeapi.co/api/v2/pokemon/${data[i]}`;
//         const name_res = await fetch(name_url);
//         const name_data = await name_res.json();
//         const imagesSrc = name_data.sprites.other['official-artwork'].front_default || name_data.sprites.front_default || 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1';
//         imgArr.push(imagesSrc);
//     }
// }

// export {
//     pushImageSrcInArray,
// }