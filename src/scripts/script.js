async function getDigimonsAPI() {
  const response = await fetch(
    "https://digitalinnovationone.github.io/api-digimon/api/digimon.json"
  );

  return await response.json();
}

async function filtroDigimons(digimonsList, digimonId) {
  const digimon = await digimonsList.find(
    (monster) => monster.id === digimonId
  );

  return digimon;
}

async function renderDigimons(digimon) {
  const nomeDigimonElement = document.getElementById("t-nome__bt");
  nomeDigimonElement.textContent = digimon.name;
  const imgDigimonElement = document.querySelector(".i-card__digimon img");
  imgDigimonElement.src = digimon.image;

  const hpDigimonElement = document.querySelector(".b-nv-in__progress-hp");
  const atkDigimonElement = document.querySelector(".b-nv-in__progress-atk");
  const defDigimonElement = document.querySelector(".b-nv-in__progress-def");

  hpDigimonElement.style.width = digimon.HP + "%";
  atkDigimonElement.style.width = digimon.ATK + "%";
  defDigimonElement.style.width = digimon.DEF + "%";
}

async function main() {
  const digimons = await getDigimonsAPI();
  const randomId = Math.floor(Math.random() * 15) + 1;
  const chooseDigimons = await filtroDigimons(digimons, randomId);

  await renderDigimons(chooseDigimons);
}

main();
