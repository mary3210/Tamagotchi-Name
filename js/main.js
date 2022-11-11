const startBtn = document.querySelector(".startBtn")
let petName;
let gameOn = true;
startBtn.addEventListener("click", retrieveName)


let tamagotchi =  {
petName, 
age: 0,
hunger: 3,
boredom: 3,
sleepiness:0,
}
console.log(tamagotchi)

let age = document.querySelector("#age")
age.innerHTML = `Age: ${tamagotchi.age}`
let hunger = document.querySelector("#hunger")
hunger.innerHTML = `Hunger: ${tamagotchi.hunger}`
let boredom = document.querySelector("#boredom")
boredom.innerHTML = `Boredom: ${tamagotchi.boredom}`
let sleepiness = document.querySelector("#sleepiness")
sleepiness.innerHTML = `Tired: ${tamagotchi.sleepiness}`


let feed = document.querySelector('#feed')
let play = document.querySelector('#play')
let sleep = document.querySelector('#sleep')

function retrieveName(){
  let input = prompt("What is your pet name?")
  tamagotchi.petName = input
  console.log(tamagotchi.petName)
  this.style.display = "none";
}

  function decreaseStat(btn){
    if (btn === "food" && tamagotchi.hunger < 10 && tamagotchi.hunger >0){
      //console.log(tamagotchi.hunger)
      tamagotchi.hunger = tamagotchi.hunger -1
      hunger.innerHTML = `Hunger: ${tamagotchi.hunger}`
      
    }
    else if(btn ==="play" && tamagotchi.boredom <10 && tamagotchi.boredom >0){
      tamagotchi.boredom = tamagotchi.boredom -1
      boredom.innerHTML = `Boredom: ${tamagotchi.boredom}`
    }
  
  }