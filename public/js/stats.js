// fetch pokemon data according to 'pokemon-name' element innerText
window.onload = async() => {
    const pokemonName = document.getElementById('pokemon-name').innerText.toLowerCase();

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    const res = await fetch(url);
    const data = await res.json();
    
    // to see data uncomment below
    // console.log(data);

    showStats(data);
}

// display stats height according to stats amount
function showStats(data) {

    const statsWrappers = document.querySelectorAll('.stat-item');
    data.stats.forEach((item, i) => {
        const statValue = item.base_stat;
        let html = `<div class="stat-item-inner flex-row">${statValue}</div>`;
        statsWrappers[i].innerHTML += html;
    });

    const statInner = document.querySelectorAll('.stat-item-inner');
    statInner.forEach((item, i) => {
        let blockAmount = item.innerText / 1.5;
        statInner[i].style.height = `${blockAmount}%`;
    });
}