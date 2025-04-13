const choices = document.querySelectorAll(".option");
let PS = document.getElementById("playerScore");
let CS = document.getElementById("compScore");
let Gameresult = document.getElementById("Result");
let resultDiv = document.querySelector(".resultdiv");
let reset = document.getElementById("resetButton");
let showChoosenDiv = document.querySelector(".chosenOptions");
let printOptionUser = document.getElementById("UserChosenOption");
let printOptionComp = document.getElementById("CompChosenOption");

let PScore =0;
let CScore =0;

PS.innertext= PScore;
CS.innertext = CScore;


const gencompchoice = () => {
    const avlOption = ["Rock", "Paper" , "Scissor"];
    let romdomOption = Math.floor(Math.random()*3);
    return avlOption[romdomOption];
};

const playGame = (Userchoice) => {
    console.log("User's choice was",Userchoice);
    let Compchoice = gencompchoice();
    console.log("Comp's choice was", Compchoice);
    GameLogic(Userchoice,Compchoice);
    
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let Userchoice = choice.getAttribute("id");
        playGame(Userchoice);
        
        
    })
})

const GameLogic = (Userchoice,Compchoice) => {

    if(Userchoice == Compchoice){
        console.log("it Was A Draw");
        Gameresult.innerText = "It was a Draw, Play Again.";
        resultDiv.style.backgroundColor = "grey"
    }else if((Userchoice == "Scissor" && Compchoice == "Paper") || (Userchoice == "Paper" && Compchoice == "Rock") || (Userchoice == "Rock" && Compchoice == "Scissor")){
        console.log("Yoy Win!");
        PScore++
        console.log(PScore);
        PS.innerText = PScore;
        Gameresult.innerText = "You Win!";
        resultDiv.style.backgroundColor = "rgba(0, 128, 0, 0.852)"
    }else if((Userchoice == "Rock" && Compchoice == "Paper") || (Userchoice == "Paper" && Compchoice == "Scissor") || (Userchoice == "Scissor" && Compchoice == "Rock")){
        console.log("Yoy lost!");
        CScore++
        console.log(CScore);
        CS.innerText = CScore;
        Gameresult.innerText = "You lost.";
        resultDiv.style.backgroundColor = "red"
    }
    printOptionUser.innerText = "You Choosed:"+ Userchoice;
    printOptionComp.innerText = "Computer Choosed:"+ Compchoice;
    showChoosenDiv.style.display = "flex";
};

reset.addEventListener("click", () => {
    PScore =0;
    CScore =0;
    PS.innerText = PScore;
    CS.innerText = CScore;
    Gameresult.innerText = "Rock Paper Sissor SHOOT!";
    printOptionUser.innerText = "You Choosed:";
    printOptionComp.innerText = "Computer Choosed:";
    showChoosenDiv.style.display = "none";
    resultDiv.style.backgroundColor = "rgba(0, 128, 0, 0.852)"
});