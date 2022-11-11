const startBtn = document.querySelector(".startBtn")
let gameOn = true;
let petName;
startBtn.addEventListener("click", startPrompt)




 function startPrompt(){
    let input = prompt("What is your pet name?")
    petName = input
    console.log(petName)
    this.style.display = "none";
    return petName
       

}
