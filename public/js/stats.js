window.onload = async() => {
    const pokemonName = document.getElementById('pokemon-name').innerText.toLowerCase();

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    const res = await fetch(url);
    const data = await res.json();

    console.log(data);
    showStats(data);
}

function showStats(data) {
    const statsWrappers = document.querySelectorAll('.stat-item');

    data.stats.forEach((item, i) => {
        const statValue = item.base_stat;
        let html = `<div class="stat-item-inner flex-row">${statValue}</div>`;
        statsWrappers[i].innerHTML += html;
    });

    const statInner = document.querySelectorAll('.stat-item-inner');
    const statHeight = document.querySelector('.stat-item-inner').offsetHeight;

    statInner.forEach((item, i) => {
        let blockAmount = item.innerText / 1.5;
        console.log(blockAmount, i)
        statInner[i].style.height = `${blockAmount}%`;
    });
}