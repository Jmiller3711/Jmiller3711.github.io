//original colors (must update in zones.css)
var originalNorthColor = "#ff6666";
var originalEastColor = "#99ccff";
var originalSouthColor = "#ccffcc";
var originalWestColor = "#ffff99";

//highlight colors
var highlightNorthColor = "rgb(255, 0, 0)"; //red
var highlightEastColor = "rgb(0, 0, 255)"; //blue
var highlightSouthColor = "rgb(0, 128, 0)"; //green
var highlightWestColor = "rgb(255, 255, 0)"; //yellow

function startGame() {
    document.getElementById('score').innerHTML = 0;
    selectRandomQuadrant();
    var myFunc01 = function() 
    {
        var i = 0;
        while (i <= 20) 
        {
            (function(i) 
            {
                setTimeout(function() 
                {
                    document.getElementById('time').innerHTML = 20 - i;
                }, 1000 * i)    
            })(i++)
        }   
    };
    myFunc01();
}

function stopGame() {
    location.reload();
}

function howToPlay() {
    alert("ZONES is easy to play:\nClick the highlighted zones as fast as you can\nYou get 1 point for every correct click\nYou lose 1 point for every incorrect click\n\nThe current record is: 52 points by JPM");
}

function selectRandomQuadrant() {
    var selection = Math.floor(Math.random() * 4) + 1  
    if (selection == 1) { //North
        $('#north').css('background-color', highlightNorthColor);
    } 
    else if (selection == 2) { //East
        $('#east').css('background-color', highlightEastColor);
    }
    else if (selection == 3) { //South
        $('#south').css('background-color', highlightSouthColor);
    }
    else if (selection == 4) { //West
        $('#west').css('background-color', highlightWestColor);
    }
    else {
        alert("Error");
    }
}

function northClick() {
    var time = document.getElementById('time').innerHTML;
    var backgroundColor = $('#north').css('background-color');
    if (time > 0) {
        if (backgroundColor == highlightNorthColor){ //red
            updateScore(1);
            resetBoardColors();
            selectRandomQuadrant();
        }
        else {
            updateScore(-1);
        }
    }
    else {
        gameOver();
    }
}

function eastClick() {
    var time = document.getElementById('time').innerHTML;
    var backgroundColor = $('#east').css('background-color');
    if (time > 0) {
        if (backgroundColor == highlightEastColor){ //blue
            updateScore(1);
            resetBoardColors();
            selectRandomQuadrant();
        }
        else {
            updateScore(-1);
        }
    }
    else {
        gameOver();
    }
}

function southClick() {
    var time = document.getElementById('time').innerHTML;
    var backgroundColor = $('#south').css('background-color'); 
    if (time > 0) {
        if (backgroundColor == highlightSouthColor){ //green
            updateScore(1);
            resetBoardColors();
            selectRandomQuadrant();
        }
        else {
            updateScore(-1);
        }
    }
    else {
        gameOver();
    }
}

function westClick() {
    var time = document.getElementById('time').innerHTML;
    var backgroundColor = $('#west').css('background-color');
    if (time > 0) {
        if (backgroundColor == highlightWestColor){ //yellow
            updateScore(1);
            resetBoardColors();
            selectRandomQuadrant();
        }
        else {
            updateScore(-1);
        }
    }
    else {
        gameOver();
    }
}

function updateScore(updateValue) {
    var currentScore = document.getElementById('score').innerHTML;
    document.getElementById('score').innerHTML = parseInt(currentScore) + updateValue;
}

function gameOver() {
    resetBoardColors();
    var currentScore = document.getElementById('score').innerHTML;
    alert("You scored " + currentScore + " points. \n\n0-19: Just Plain Slow\n20-39: You're Just Average\n40-49: You're Pretty Fast\n50+: You're Lightning!");
}

function resetBoardColors() {
    $('#north').css('background-color', originalNorthColor);
    $('#east').css('background-color', originalEastColor);
    $('#south').css('background-color', originalSouthColor);
    $('#west').css('background-color', originalWestColor);
}