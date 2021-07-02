// This is the card search function

function getCard() {
  let query = document.querySelector(`#query`).value;
  console.log(query);
  console.log(typeof query);
  if (query === "") {
    return;
  }
  fetch(`https://api.scryfall.com/cards/named?fuzzy=${query}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      cardimg.setAttribute(`src`, `${result.image_uris.normal}`);
      document.querySelector(`#name`).innerHTML = `${result.name}`;
      type.innerHTML = `${result.type_line}`;
      cost.innerHTML = `${result.mana_cost}`;
      text.innerHTML = `${result.oracle_text}`;
      if (result.flavor_text === undefined) {
        return;
      } else {
        flavor.innerHTML = `${result.flavor_text}`;
      }
    })
    .catch((error) => console.log(`Error: ${error}`));
}


// This allows us to execute a card search by hitting the `Enter` key

query.addEventListener("keypress", function (event) {
  if (event.defaultPrevented) {
    return;
  }
  switch (event.key) {
    case "Enter":
      getCard();
      break;
    default:
      return;
  }
  event.preventDefault();
});



// For future update: Return MTG symbols (Mana Colors | Colorless | Tap)
// https://scryfall.com/docs/api/card-symbols