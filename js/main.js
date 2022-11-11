const startBtn = document.querySelector(".startBtn")
let petName;
let gameOn = true;
startBtn.addEventListener("click", retrieveName)


let tamagotchi =  {
petName, 
age: 0,
hunger: 0,
bordedom: 0,
sleepiness:0,
}
console.log(tamagotchi)

let age = document.querySelector("#age")
age.innerHTML = `Age: ${tamagotchi.age}`
let hunger = document.querySelector("#hunger")
hunger.innerHTML = `Hunger: ${tamagotchi.hunger}`
let boredom = document.querySelector("#boredom")
boredom.innerHTML = `Bordeom: ${tamagotchi.bordedom}`

function retrieveName(){
  let input = prompt("What is your pet name?")
  tamagotchi.petName = input
  console.log(tamagotchi.petName)
  this.style.display = "none";
  
     

}