/*fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then(response => {
    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }
    return response.json();
  })
  .then(data => console.log(data.name))
  .catch(error => console.error(error));

*/

async function fetchData() {
  const status = document.getElementById("fetchStatus");
  const imgElement = document.getElementById("pokemonSprite");
  status.textContent = "";
  imgElement.style.display = "none";

  try {
    const pokemonName = document.getElementById("pokemonName").value.trim().toLowerCase();
    if (!pokemonName) {
      status.textContent = "Please enter a valid Pokemon name.";
      return;
    }

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    if (!response.ok) {
      throw new Error(`Pokemon not found: ${pokemonName}`);
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");

    if (pokemonSprite) {
      imgElement.src = pokemonSprite;
      imgElement.style.display = "block";
    } else {
      imgElement.style.display = "none";
    }

    const cryUrl = `https://play.pokemonshowdown.com/audio/cries/${pokemonName}.mp3`;
    const audio = new Audio(cryUrl);
    audio.volume = 0.5;
    audio.play().catch(() => {
      console.warn(`Could not play cry for ${pokemonName}`);
    });

  }
  catch (error) {
    console.error(error);
    status.textContent = "Could not find Pokemon. Please try another name.";
    const imgElement = document.getElementById("pokemonSprite");
    if (imgElement) {
      imgElement.style.display = "none";
    }
  }
}

const pokemonInput = document.getElementById("pokemonName");
if (pokemonInput) {
  pokemonInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      fetchData();
    }
  });
}


