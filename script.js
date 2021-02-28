document.getElementById("pokemonSubmit").addEventListener("click", function (event) {
    event.preventDefault();
    const pokeName = document.getElementById("pokemonInput").value;
    if (pokeName === "")
        return;
    console.log(pokeName);
    const name = 'flavio'

    const url = " https://pokeapi.co/api/v2/pokemon/" + pokeName;
    fetch(url)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            console.log(json);
            let results = "";
            let moves = "";
            const nameCapitalized = json.name.charAt(0).toUpperCase() + json.name.slice(1)
            results += '<h2>' + nameCapitalized + "</h2>";
            results += '<img src="' + json.sprites.front_default + '"/>';

            results += "<p> <h4>";
            results += "Base Experience: " + json.base_experience;
            results += "<br/>Height: " + json.height;
            results += "<br/>Weight: " + json.weight;
            results += "<br/>Abilities: ";
            for (let i = 0; i < json.abilities.length; i++) {
                results += json.abilities[i].ability.name + ", ";
            }
            results = results.slice(0, -1);// remove the last comma
            results += "<h4/></p>";

            moves += "<h2>List of moves</h2>";
            moves += "<p> <h4>";
            for (let i = 0; i < json.moves.length; i++) {
                moves += i + 1 + " - " + json.moves[i].move.name + "<br/> ";
            }
            moves += "<h4/></p>";
            document.getElementById("pokemonResults").innerHTML = results;
            document.getElementById("pokemonMoves").innerHTML = moves;
        });


});
