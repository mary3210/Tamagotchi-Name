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
    img.setAttribute("src", "data:image/png;base64,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")

  }
  else if(tamagotchi.age == 10){
    img.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_p-iWRG_1D-15xvXVJNkHjl7d__MkEYVrZA&usqp=CAU")
  }

}




time()


