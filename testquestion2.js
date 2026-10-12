let pokemons = ["Pikachu", "Raichu", "Bulbasaur", "Mewtwo", "Charizard"];
let yPos;

function setup() {
  createCanvas(200, 300);
  fill("pink");
  textAlign(CENTER);
  textSize(20);

  yPos = 100;
}

function draw() {
  background(0);

  for (let i = 0; i < pokemons.length; i++) {
    text(pokemons[i], width / 2, yPos + i * 30);
  }
}