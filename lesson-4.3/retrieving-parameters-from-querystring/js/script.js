// if I would for example put ?id=1234&name=ben at the end of my
// url, I could log those values with the following:

const queryString = document.location.search;

console.log(queryString);

const params = new URLSearchParams(queryString);

console.log(params);

const id = params.get("id");

console.log(id);

const name = params.get("name");

console.log(name);
