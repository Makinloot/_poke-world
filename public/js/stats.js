import 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js';
// fetch pokemon data according to 'pokemon-name' element innerText
window.onload = async() => {
    const pokemonName = document.getElementById('pokemon-name').innerText.toLowerCase();

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    const res = await fetch(url);
    const data = await res.json();
    
    const statsData = data.stats.map(item => item.base_stat);
    const labelsData = data.stats.map(item => item.stat.name);
    initChart(statsData, labelsData);
}

function initChart(stats, labels) {
    const ctx = document.getElementById('stats-chart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Base stats',
                data: stats,
                backgroundColor: [
                    'rgba(255, 99, 132, .7)',
                    'rgba(54, 162, 235, .7)',
                    'rgba(255, 206, 86, .7)',
                    'rgba(75, 192, 192, .7)',
                    'rgba(153, 102, 255, .7)',
                    'rgba(255, 159, 64, .7)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: false,
                } 
            }
        }
    });

}


// // display stats height according to stats amount
// function showStats(data) {

//     const statsWrappers = document.querySelectorAll('.stat-item');
//     data.stats.forEach((item, i) => {
//         const statValue = item.base_stat;
//         let html = `<div class="stat-item-inner flex-row">${statValue}</div>`;
//         statsWrappers[i].innerHTML += html;
//     });

//     const statInner = document.querySelectorAll('.stat-item-inner');
//     statInner.forEach((item, i) => {
//         let blockAmount = item.innerText / 1.5;
//         statInner[i].style.height = `${blockAmount}%`;
//     });
// }