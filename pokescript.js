class Trainer {
  constructor(name, pokemon) {
    this.name = name;
    this.pokemon = pokemon;
  }

  all() {
    return this.pokemon;
  }

  get(name) {
    for (let i = 0; i < this.pokemon.length; i++) {
      let pokemonName = this.pokemon[i].name;
      if (pokemonName === name) {
        return this.pokemon[i];
      }
    }
    return false;
  }
}

class Pokemon {
  constructor(name, hp, attack, defense, abilities) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.abilities = abilities;
  }
}

let nidoking = new Pokemon('nidoking');
let zapdos = new Pokemon('zapdos');
let umbreon = new Pokemon('umbreon');
let Jose = new Trainer('Jose', nidoking, zapdos, umbreon);
console.log(Jose);


let chosenOne = document.querySelector('#choosePokemon');
chosenOne.addEventListener('click', function(e) {

  function getPokemonStats(pokemon) {
    let mainlink = 'https://aglegaspi.github.io/pokedex/';
    let url = mainlink + pokemon.name + '.json';

    axios.get(url)
      .then(function(response) {

        pokemon.hp = response.data.stats[5].base_stat;

        pokemon.attack = response.data.stats[4].base_stat;

        pokemon.defense = response.data.stats[3].base_stat;

        let abilityNames = [];
        let abilitiesApi = response.data.abilities;
        for (let x = 0; x < abilitiesApi.length; x++) {
          abilityNames.push(abilitiesApi[x].ability.name);
        }
        pokemon.abilities = abilityNames.join(', ');

        console.log(pokemon)
      })
  };


  getPokemonStats(nidoking);
  getPokemonStats(zapdos);
  getPokemonStats(umbreon);

  function showStats(pokemon) {
    let myPokemon = Jose.get(pokemon);
    hp.innerText = pokemon.hp;
    attack.innerText = pokemon.attack;
    defense.innerText = pokemon.defense;
    abilities.innerText = pokemon.abilities;
  }
});
let hp = document.querySelector('#dispHp');
let attack = document.querySelector('#dispAttack');
let defense = document.querySelector('#dispDefense');
let abilities = document.querySelector('#dispAbilities');
