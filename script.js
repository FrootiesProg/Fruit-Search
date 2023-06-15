const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

// Function to perform the search based on the input string
function search(str) {
  if (!str) {
    // Return an empty array if there is no input
    return [];
  }

  const inputVal = str.toLowerCase();
  const results = fruit.filter((fruitName) =>
    fruitName.toLowerCase().includes(inputVal)
  );

  return results;
}

// Function to show the suggestions box
function showSuggestions() {
  const suggestionsList = document.createElement("ul");
  suggestionsList.id = "suggestions";

  // Create the input element
  const input = document.createElement("input");
  input.id = "fruit";
  input.type = "text";

  // Append the input element to the suggestions list
  suggestionsList.appendChild(input);

  // Append the suggestions list to the search container
  document.getElementById("search-container").appendChild(suggestionsList);

  // Add an event listener to the input element
  input.addEventListener("input", promptSuggestions);
}

// Function to highlight a suggestion when hovered
function highlightSuggestion(e) {
  // Get the highlighted suggestion
  const highlighted = suggestions.querySelector(".highlighted");

  // If there is a highlighted suggestion
  if (highlighted) {
    // Remove the highlighted class from the highlighted suggestion
    highlighted.classList.remove("highlighted");
  }

  // Add the highlighted class to the hovered suggestion
  e.target.classList.add("highlighted");
}

// Function to handle the use of a suggestion
function useSuggestion(e) {
  if (e.target.nodeName === "LI") {
    // Get the selected suggestion
    const selectedSuggestion = e.target.textContent;

    // Set the search bar's value to the selected suggestion
    input.value = selectedSuggestion;
  }

  // Hide the suggestions list
  suggestions.classList.remove("has-suggestions");
}

// Event listener for the suggestions container to handle suggestion clicks
suggestions.addEventListener("click", useSuggestion);

// Function to prompt and display the suggestions
function promptSuggestions() {
  const text = input.value;
  let suggestions = [];

  if (text.length > 0) {
    // Filter the fruit list based on the input text
    suggestions = fruit.filter((fruitName) =>
      fruitName.toLowerCase().startsWith(text.toLowerCase())
    );
  }

  // Remove the existing suggestions list
  const existingSuggestionsList = document.querySelector("#suggestions");
  if (existingSuggestionsList) {
    existingSuggestionsList.parentNode.removeChild(existingSuggestionsList);
  }

  if (suggestions.length > 0) {
    const suggestionsList = document.createElement("ul");
    suggestionsList.id = "suggestions";

    for (const suggestion of suggestions) {
      const li = document.createElement("li");
      li.textContent = suggestion;
      suggestionsList.appendChild(li);
    }

    document.getElementById("search-container").appendChild(suggestionsList);
  }
}

// Add event listeners to the input and suggestions elements
input.addEventListener("input", promptSuggestions);
input.addEventListener("focus", promptSuggestions);
suggestions.addEventListener("click", useSuggestion);
suggestions.addEventListener("mouseover", highlightSuggestion);
