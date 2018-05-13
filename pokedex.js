let myButtons = document.querySelector('#thekingsstats');
let myButton2 = document.querySelector('#theelectricbird');
let myButton3 = document.querySelector('#darkbunny');

let list = document.querySelector('.nidokingname');
let ability1 = document.querySelector('.nidokingmove')
let ability2 = document.querySelector('.nidokingmove2')
let ability3 = document.querySelector('.nidokingmove3')
let speed = document.querySelector('.number')
let specialdefense = document.querySelector('.number1')
let specialattack = document.querySelector('.number2')
let defense = document.querySelector('.number3')
let attack = document.querySelector('.number4')
let hp = document.querySelector('.number5')

let list2 = document.querySelector('.zapdosname');
let ability4 = document.querySelector('.zapdosmove')
let ability5 = document.querySelector('.zapdosmove2')
let ability6 = document.querySelector('.ability6')
let speed1 = document.querySelector('.zapdosspeed')
let specialdefense1 = document.querySelector('.zapdosspecialdefense')
let specialattack1 = document.querySelector('.zapdosspecialattack')
let defense1 = document.querySelector('.zapdosdefense')
let attack1 = document.querySelector('.zapdosattack')
let hp1 = document.querySelector('.zapdoshp')

let list3 = document.querySelector('.umbreonname');
let ability7 = document.querySelector('.umbreonmove')
let ability8 = document.querySelector('.umbreonmove2')
let speed2 = document.querySelector('.umbreonspeed')
let specialdefense2 = document.querySelector('.umbreonspecialdefense')
let specialattack2 = document.querySelector('.umbreonspecialattack')
let defense2 = document.querySelector('.umbreondefense')
let attack2 = document.querySelector('.umbreonattack')
let hp2 = document.querySelector('.umbreonhp')

class Trainer {
  constructor(myResponse) {
    this.name = myResponse.data.name;

    // there is no variable called josesPokemon. where is this coming from?
    this.pokemon = josesPokemon.data.name;
  }
}

class Pokemon {
  constructor(myResponse) {
    this.name = myResponse.data.name;
    this.ability1 = myResponse.data.abilities[0].ability.name;
    this.ability2 = myResponse.data.abilities[1].ability.name;

    if (myResponse.data.abilities.length >= 3) {
      this.ability3 = myResponse.data.abilities[2].ability.name;
    }
    this.speed = myResponse.data.stats[0].base_stat;
    this.specialdefense = myResponse.data.stats[1].base_stat;
    this.specialattack = myResponse.data.stats[2].base_stat;
    this.defense = myResponse.data.stats[3].base_stat;
    this.attack = myResponse.data.stats[4].base_stat;
    this.hp = myResponse.data.stats[5].base_stat;
  }
}

myButtons.addEventListener('click', function() {

  axios.get('https://raw.githubusercontent.com/jzap19/pokedex/master/34.json')
    .then(function(myResponse) {
      let nidoKing = new Pokemon(myResponse);

      list.innerHTML = nidoKing.name;
      ability1.innerHTML = nidoKing.ability1;
      ability2.innerHTML = nidoKing.ability2;
      ability3.innerHTML = nidoKing.ability3;
      speed.innerHTML = nidoKing.speed;
      specialdefense.innerHTML = nidoKing.specialdefense;
      specialattack.innerHTML = nidoKing.specialattack;
      defense.innerHTML = nidoKing.defense;
      attack.innerHTML = nidoKing.attack;
      hp.innerHTML = nidoKing.hp;
    })
});
myButton2.addEventListener('click', function() {
  axios.get('https://raw.githubusercontent.com/jzap19/pokedex/master/145.json')
    .then(function(myResponse) {
      let zapdos = new Pokemon(myResponse);

      list2.innerHTML = zapdos.name;
      ability4.innerHTML = zapdos.ability1;
      ability5.innerHTML = zapdos.ability2;
      speed1.innerHTML = zapdos.speed;
      specialdefense1.innerHTML = zapdos.specialdefense;
      specialattack1.innerHTML = zapdos.specialattack;
      defense1.innerHTML = zapdos.defense;
      attack1.innerHTML = zapdos.attack;
      hp1.innerHTML = zapdos.hp;

    })
});
myButton3.addEventListener('click', function() {

  axios.get('https://raw.githubusercontent.com/jzap19/pokedex/master/197.json')
    .then(function(myResponse) {
      let umbreon = new Pokemon(myResponse);

      list3.innerHTML = umbreon.name;
      ability7.innerHTML = umbreon.ability1;
      ability8.innerHTML = umbreon.ability2;
      speed2.innerHTML = umbreon.speed;
      specialdefense2.innerHTML = umbreon.specialdefense;
      specialattack2.innerHTML = umbreon.specialattack;
      defense2.innerHTML = umbreon.defense;
      attack2.innerHTML = umbreon.attack;
      hp2.innerHTML = umbreon.hp;
    })
});
