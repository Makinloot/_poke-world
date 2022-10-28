// return random pokemon name and insert in #random-btn href
window.onload = async() => {
    const randomizerBtn = document.getElementById('random-btn');
    const random_res = await fetch('/random');
    const random_data = await random_res.json();

    randomizerBtn.href = `/pokemon/${random_data}`;
}