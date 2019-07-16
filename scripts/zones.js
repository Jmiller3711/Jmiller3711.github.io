function startGame() {
    selectRandomQuadrant();
    var myFunc01 = function() 
    {
        var i = 0;
        while (i < 20) 
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

function selectRandomQuadrant() {
    var selection = Math.floor(Math.random() * 4) + 1  
    if (selection == 1) { //North
        $('#north').css('background-color', 'purple');
    } 
    else if (selection == 2) { //East
        $('#east').css('background-color', 'purple');
    }
    else if (selection == 3) { //South
        $('#south').css('background-color', 'purple');
    }
    else if (selection == 4) { //West
        $('#west').css('background-color', 'purple');
    }
    else {
        alert("Error");
    }
}

function northClick() {
    var time = document.getElementById('time').innerHTML;
    var backgroundColor = $('#north').css('background-color');
    if (time > 0) {
        if (backgroundColor == "rgb(128, 0, 128)"){ 
            resetBoardColors();
            selectRandomQuadrant();
        }
        else {
            alert("You lose points");
        }
    }
    else {
        alert("Game Over");
    }
}

function eastClick() {
    var time = document.getElementById('time').innerHTML;
    var backgroundColor = $('#east').css('background-color');
    if (time > 0) {
        if (backgroundColor == "rgb(128, 0, 128)"){ 
            resetBoardColors();
            selectRandomQuadrant();
        }
        else {
            alert("You lose points");
        }
    }
    else {
        alert("Game Over");
    }
}

function southClick() {
    var time = document.getElementById('time').innerHTML;
    var backgroundColor = $('#south').css('background-color');
    if (time > 0) {
        if (backgroundColor == "rgb(128, 0, 128)"){ 
            resetBoardColors();
            selectRandomQuadrant();
        }
        else {
            alert("You lose points");
        }
    }
    else {
        alert("Game Over");
    }
}

function westClick() {
    var time = document.getElementById('time').innerHTML;
    var backgroundColor = $('#west').css('background-color');
    if (time > 0) {
        if (backgroundColor == "rgb(128, 0, 128)"){ 
            resetBoardColors();
            selectRandomQuadrant();
        }
        else {
            alert("You lose points");
        }
    }
    else {
        alert("Game Over");
    }
}

function resetBoardColors() {
    $('#north').css('background-color', 'red');
    $('#east').css('background-color', 'blue');
    $('#south').css('background-color', 'green');
    $('#west').css('background-color', 'yellow');
}