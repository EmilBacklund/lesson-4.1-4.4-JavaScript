//! Always console.log the JSON or use Postman to get knowledge of what
//! properties to use.
const resultContainer = document.querySelector(".results");

const url = "https://cat-fact.herokuapp.com/facts";

async function callApi() {
  const response = await fetch(url);
  const results = await response.json();
  console.log(results);

  results.forEach((result) => {
    resultContainer.innerHTML += `<div>
    <span>${result.text}</span>
    </div>`;
  });
}

callApi();
