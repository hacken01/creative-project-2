document.getElementById("pokemonSubmit").addEventListener("click", function (event) {
    event.preventDefault();
    const pokeName = document.getElementById("pokemonInput").value;
    if (pokeName === "")
        return;
    const name = 'flavio'
    let status = "";
    const url = " https://pokeapi.co/api/v2/pokemon/" + pokeName;
    fetch(url)
        .then(function (response) {
            if(response.status == 404){
                document.getElementById("pokemonResults").innerHTML = "No pokemon Found.";
                document.getElementById("pokemonMoves").innerHTML = "Try Another Name";
            }
            return response.json();
        }).then(function (json) {
            console.log(json);
            let results = "";
            let moves = "";
            const nameCapitalized = json.name.charAt(0).toUpperCase() + json.name.slice(1)
            results += '<h1>' + nameCapitalized + "</h1>";
            results += '<img src="' + json.sprites.front_default + '"/>';

            results += "<p> <h3>";
            results += "Base Experience: " + json.base_experience;
            results += "<br/>Height: " + json.height;
            results += "<br/>Weight: " + json.weight;
            results += "<br/>Abilities: ";
            for (let i = 0; i < json.abilities.length; i++) {
                results += json.abilities[i].ability.name + ", ";
            }
            results = results.slice(0, -2);// remove the last comma
            results += "<h3/></p>";

            moves += "<h2>List of moves</h2>";
            moves += "<p> <h3>";
            for (let i = 0; i < json.moves.length; i++) {
                moves += i + 1 + " - " + json.moves[i].move.name + "<br/> ";
            }
            moves += "<h3/></p>";
            document.getElementById("pokemonResults").innerHTML = results;
            document.getElementById("pokemonMoves").innerHTML = moves;
        });
});
