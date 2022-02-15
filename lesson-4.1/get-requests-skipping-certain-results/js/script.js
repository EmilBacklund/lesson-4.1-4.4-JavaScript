const url = "https://elephant-api.herokuapp.com/elephants";
const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + url;

const resultContainer = document.querySelector(".results");

async function makeApiCall() {
  try {
    const response = await fetch(corsFix);

    const elephants = await response.json();

    console.log(elephants);

    // elephants.forEach(function (elephant) {

    //   resultContainer.innerHTML += `<div class="card">
    //   <h4>${elephant.name}</h4>
    //   <img src="${elephant.image}" alt="${elephant.name}" />
    //   </div>`;
    // });

    for (let i = 0; i < elephants.length; i++) {
      if (!elephants[i].name) {
        continue;
      }

      resultContainer.innerHTML += `<div class="card">
        <h4>${elephants[i].name}</h4>
        <img src="${elephants[i].image}" alt="${elephants[i].name}" />
        </div>`;
    }
  } catch (error) {
    console.log(error);
    resultContainer.innerHTML = message("error", error);
  }
}

makeApiCall();
