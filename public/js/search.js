// function to search pokemon by its name
export function searchPokemon(form, input) {
    form.addEventListener('submit', async(e) => {
        
        try {
            e.preventDefault();
            const requestBody = {
                name: input.value
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

            // await data before changing location
            setTimeout(() => {
                window.location.pathname = `/pokemon/${data}`;
            }, data);

        } catch (error) {
            console.error(error);
        }
    })
}