function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function getComputerChoice(){
    const rps = ["Rock", "Paper", "Scissors"];
    return rps[Math.floor(Math.random()*3)];
}

function getPlayerSelection(selection){
    selection = prompt("Choose Rock Paper Scissors!");
    selection = selection.toLowerCase();
    return selection
}

function playRound(computerSelection, playerSelection){
    const rps = ["Rock", "Paper", "Scissors"];
    let indexPlayer = rps.indexOf(playerSelection);
    let indexComputer = rps.indexOf(computerSelection);

    if((indexComputer + 1)%3 == indexPlayer){
        return `Player Won! ${playerSelection} beats ${computerSelection}`;
    } else if(indexComputer == indexPlayer){
        return "Draw :/";
    } else{
        return `Player Lost :( ${computerSelection} beats ${playerSelection}`;
    }
}

playerSelection = capitalize(getPlayerSelection())
computerSelection = getComputerChoice()

console.log(`Computer chose: ${computerSelection}\nYou chose: ${playerSelection}\n${playRound(computerSelection, playerSelection)}`);
