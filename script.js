document.getElementById("pokemonSubmit").addEventListener("click", function (event) {
    event.preventDefault();
    const pokeName = document.getElementById("pokemonInput").value;
    if (pokeName === "")
        return;
    console.log(pokeName);
    const url = " https://pokeapi.co/api/v2/pokemon/" + pokeName;
    fetch(url)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            console.log(json);
            let results = "";
            results += '<h2>' + json.name + "</h2>";
            results += "<p> <h2>";

            results += "base experience:  " + json.base_experience;

            results += "<h2/></p>";
            results += '<img src="' + json.sprites.front_default + '"/>';
            document.getElementById("pokemonResults").innerHTML = results;
        });


});
