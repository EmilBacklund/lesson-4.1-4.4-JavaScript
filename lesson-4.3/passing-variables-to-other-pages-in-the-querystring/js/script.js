const resultsContainer = document.querySelector(".results");

const url =
  "https://api.rawg.io/api/games?key=54582cd735a340b89b17702eae51578b";

async function fetchGames() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);

    resultsContainer.innerHTML = "";

    const games = json.results;
    console.log(games[0].id);

    for (let i = 0; i < games.length; i++) {
      console.log(games[i].id);
      resultsContainer.innerHTML += `<a href="details.html?id=${games[i].id}" class="card">
        <div class="image" style="background-image: url(${games[i].background_image});"></div>
        <div class="details">
            <h4 class="name">${games[i].name}</h4>
        </div>
    </a>
        `;
    }
  } catch (error) {
    console.log(error);
  }
}

fetchGames();
