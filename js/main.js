const startBtn = document.querySelector(".startBtn")
let petName;
let gameOn = true;
startBtn.addEventListener("click", retrieveName)


let tamagotchi =  { 
petName,
age: 0,
hunger: 0,
boredom: 0,
sleepiness:0,
}



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

let body = document.querySelector('body')

function retrieveName(){
  let input = prompt("What is your pet name?")
  tamagotchi.petName = input
  console.log(tamagotchi.petName)
  this.style.display = "none";
  let nameOfPet = document.querySelector('#nameOfPet')
  nameOfPet.innerHTML = tamagotchi.petName
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
    else if(btn ==="sleep" && tamagotchi.sleepiness <10 && tamagotchi.sleepiness >0){
      tamagotchi.sleepiness = tamagotchi.sleepiness -1
      sleepiness.innerHTML = `Tired: ${tamagotchi.sleepiness}`
      setTimeout(setBlack, 50)
      setTimeout(setWhite, 1000)
      
    }
  
  }

  function setBlack(){
    body.style.backgroundColor = 'black'
  }
function setWhite(){
  body.style.backgroundColor ="white"
}

function time(){

let gameInterval = setInterval(addToStat, 5000)


function addToStat(){
  
  //let stats = [tamagotchi.hunger, tamagotchi.age, tamagotchi.boredom, tamagotchi.sleepiness]
  //for( i=0; i < stats.length; i ++){
  //  console.log("index " + i)
  //  console.log("stat value " + stats[i])
  //  stats[i] += 1
   // console.log("updated stat value " + stats[i])
  //updateTama()

  //}
  tamagotchi.hunger+= 1
  hunger.innerHTML = `Hunger: ${tamagotchi.hunger}`

  tamagotchi.age +=1
  age.innerHTML = `Age: ${tamagotchi.age}`

  tamagotchi.boredom += 1
  boredom.innerHTML = `Boredom: ${tamagotchi.boredom}`

  tamagotchi.sleepiness +=1
  sleepiness.innerHTML = `Tired: ${tamagotchi.sleepiness}`

changeImg()
  if(tamagotchi.boredom == 10 || tamagotchi.hunger == 10 ||  tamagotchi.sleepiness == 10){
    clearInterval(gameInterval)
    console.log("You lost!")
  }
}
}

function changeImg(){
  img = document.querySelector(".tama-char")
  console.log(img)
  if (tamagotchi.age == 5){
    img.setAttribute("src", "https://www.kindpng.com/picc/m/56-566340_cute-potato-png-kawaii-potato-transparent-png.png")

  }

}




time()


