const container = document.querySelector(".container");

const url =
  "https://api.rawg.io/api/games/3200?key=54582cd735a340b89b17702eae51578b";

async function fetchGame() {
  try {
    const response = await fetch(url);
    const result = await response.json();

    console.log(result);

    container.innerHTML = `<h1>${result.name}</h1>
        <div class="details-image" 
        style="background-image: url('${result.background_image}')"></div>
        <div class="details-description">${result.description}</div>
        <time class="details-date">Released: ${result.released}</time>`;
  } catch (error) {
    console.log(error);
  }
}

fetchGame();
