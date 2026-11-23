document.addEventListener

async function fetchData(query) {
  try {
    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`,
    );
   if (!response.ok) throw new Error("Invalid input!");
    const data = await response.json();
    console.log("Fetched data:", data);
    return data; 
  } catch (error) {
    console.error(error.message);
  }
}

const searchText = document.querySelector("#query");
const form = document.querySelector("form");
const results = document.querySelector("#results");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  results.innerHTML = "";
  console.log(searchText.value);
  fetchData(searchText.value);
});



