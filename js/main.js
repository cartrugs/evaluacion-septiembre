// Cuando se carga el contenido de la página
document.addEventListener('DOMContentLoaded', () => {

    const pokemonInput = document.querySelector('#pokemonInput');  // Campo esntrada texto
    console.log(pokemonInput)
    const searchButton = document.querySelector('#searchButton');  // Botón buscar
    console.log(searchButton)

    // Manejar el click para busqueda
    searchButton.addEventListener('click', async () => {
        // Obtener el nombre del pokemon
        
        // let pokemonName = pokemonInput.value;

        try {
            // Realiza solicitud con fetch
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

            // if (pokemonName === pokemonInput.value) {
            //     const data = await res.json();
            // }

            if(!res.ok) {
                throw new Error('pokemon no encontrado');
            }

            // // Respuesta en json
            // const data = await res.json();

            const pokemonName = data.name;
            console.log(data.name)


        } catch (error) {
            console.log('error')

        }
    });



})// LOAD-------------------------------------------