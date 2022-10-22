console.log('red');
const form = document.getElementById('searchPokemon');
const search = document.getElementById('searchInput');


form.addEventListener('submit', async(e) => {
    e.preventDefault();
    const requestBody = {
        name: search.value
    }
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody)
    }

    const res = await fetch('/search', options);
    const data = await res.json();

    try {
        setTimeout(() => {
            window.location.pathname = `/pokemon/${data}`;
        }, data)
        
    } catch (error) {
        console.log(error);
    }

})