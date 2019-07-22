var pulledTeeth = [];
var badTooth = 0;
var gameInProgress = false;

function startGame() {
    badTooth = selectRandomTooth();
    document.getElementById("trexImg").src="../pics/trex2.png";
    alert("Start game, good luck!");
    gameInProgress = true;
}

function stopGame() {
    location.reload();
}

function howToPlay() {
    alert("Dinosaur Dentist is easy to play:\nPull the dinosaur's teeth and hope he doesn't bite you!");
}

function selectRandomTooth() {
    return Math.floor(Math.random() * 10) + 1;
}

function toothClick(toothNumber) {
    if (!gameInProgress) {
        alert("Please start a game to start pulling teeth!")
        return;
    }

    if (pulledTeeth.includes(toothNumber))
    {
        alert("This tooth has already been pulled!");
        return;
    }

    if (badTooth == toothNumber){
        document.getElementById("trexImg").src="../pics/trex3.png";
        gameOver();
    }
    else {
        pulledTeeth.push(toothNumber);
        alert("You clicked tooth " + toothNumber +"\npulled teeth = " + pulledTeeth);
    }
}

function gameOver() {
    badTooth = 0;
    document.getElementById("trexImg").src="../pics/trex3.png";
    gameInProgress = false;
}