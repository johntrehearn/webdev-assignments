async function fetchData(query) {
  try {
    const clearResults = document.querySelector("#results");
    clearResults.innerHTML = "";
    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`,
    );
    if (!response.ok) throw new Error("Invalid input!");
    const data = await response.json();
    console.log("Fetched data:", data);

    data.forEach((tvShow) => {
      const card = document.createElement("article");
      const url = tvShow.show.url;
      const name = tvShow.show.name;
      const image = tvShow.show.image?.medium;
      const summary = tvShow.show.summary;

      card.innerHTML = `
        <h2>${name}</h2>
        <a href="${url}" target="_blank"></a>
        <img src="${image}" alt="${name}">
        <div>${summary}</div>
      `;
      results.append(card);
    });

    return data;
  } catch (error) {
    console.error(error.message);
  }
}

const searchText = document.querySelector("#query");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(searchText.value);
  fetchData(searchText.value);
});




