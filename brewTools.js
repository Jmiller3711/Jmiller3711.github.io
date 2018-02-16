console.log("brewTools.js init");

var BoilTimer = undefined;
var BoilTicker = undefined;
var BoilRemainingMinutes = 0;
var BoilRemainingSeconds = 0;
var boilLabel = undefined;

var HopAddition1Timer = undefined;
var HopAddition1Ticker = undefined;
var Hop1RemainingMinutes = 0;
var Hop1RemainingSeconds = 0;
var hop1Label = undefined;

var HopAddition2Timer = undefined;
var HopAddition2Ticker = undefined;
var Hop2RemainingMinutes = 0;
var Hop2RemainingSeconds = 0;
var hop2Label = undefined;

var HopAddition3Timer = undefined;
var HopAddition3Ticker = undefined;
var Hop3RemainingMinutes = 0;
var Hop3RemainingSeconds = 0;
var hop3Label = undefined;

var audio = new Audio('./audio/timerAlarm.mp3');

//Boil Timer
function addSubtractBoilMinutes(mins)
{
    BoilRemainingMinutes = BoilRemainingMinutes + mins;
    boilLabel.innerText = BoilRemainingMinutes + " min : " + BoilRemainingSeconds + " sec";
}

function startBoilTimer()
{
    console.log("Boil timer started");

    var totalSeconds = BoilRemainingMinutes * 60 + BoilRemainingSeconds;
    BoilTimer = setTimeout(alarmBoil, totalSeconds * 1000);
    BoilTicker = setInterval(tickBoil, 1000);
}

function tickBoil()
{
    console.log(BoilRemainingSeconds);
    boilLabel.innerText = BoilRemainingMinutes + " min : " + BoilRemainingSeconds + " sec";
    BoilRemainingSeconds--;
    if(BoilRemainingSeconds < 0)
    {
        BoilRemainingSeconds = 59;
        BoilRemainingMinutes--;
        if (BoilRemainingMinutes < 0)
        {
            clearInterval(BoilTicker);
        }
    }
}

function resetBoilTimer()
{
    clearTimeout(BoilTimer);
    clearInterval(BoilTicker);
    BoilRemainingMinutes = 0;
    BoilRemainingSeconds = 0;
    BoilLabel.innerText = BoilRemainingMinutes + " min : " + BoilRemainingSeconds + " sec";
    console.log("Hop 1 timer has reset");
}

function alarmBoil()
{
    console.log("Hop 1 timer done");
    audio.play();
    //setTimeout(function(){ alert("Hop 1 Timer has Finshed!"); }, 3);
}



//Hop Addition 1 Timer
function addSubtractHop1Minutes(mins)
{
    Hop1RemainingMinutes = Hop1RemainingMinutes + mins;
    hop1Label.innerText = Hop1RemainingMinutes + " min : " + Hop1RemainingSeconds + " sec";
}

function startHop1Timer()
{
    console.log("Hop 1 timer started");

    var totalSeconds = Hop1RemainingMinutes * 60 + Hop1RemainingSeconds;
    HopAddition1Timer = setTimeout(alarmHop1, totalSeconds * 1000);
    HopAddition1Ticker = setInterval(tickHop1, 1000);
}

function tickHop1()
{
    console.log(Hop1RemainingSeconds);
    hop1Label.innerText = Hop1RemainingMinutes + " min : " + Hop1RemainingSeconds + " sec";
    Hop1RemainingSeconds--;
    if(Hop1RemainingSeconds < 0)
    {
        Hop1RemainingSeconds = 59;
        Hop1RemainingMinutes--;
        if (Hop1RemainingMinutes < 0)
        {
            clearInterval(HopAddition1Ticker);
        }
    }
}

function resetHop1Timer()
{
    clearTimeout(HopAddition1Timer);
    clearInterval(HopAddition1Ticker);
    Hop1RemainingMinutes = 0;
    Hop1RemainingSeconds = 0;
    hop1Label.innerText = Hop1RemainingMinutes + " min : " + Hop1RemainingSeconds + " sec";
    console.log("Hop 1 timer has reset");
}

function alarmHop1()
{
    console.log("Hop 1 timer done");
    audio.play();
    //setTimeout(function(){ alert("Hop 1 Timer has Finshed!"); }, 3);
}

//Hop Addition 2 Timer
function addSubtractHop2Minutes(mins)
{
    Hop2RemainingMinutes = Hop2RemainingMinutes + mins;
    hop2Label.innerText = Hop2RemainingMinutes + " min : " + Hop2RemainingSeconds + " sec";
}

function startHop2Timer()
{
    console.log("Hop 2 timer started");

    var totalSeconds = Hop2RemainingMinutes * 60 + Hop2RemainingSeconds;
    HopAddition2Timer = setTimeout(alarmHop2, totalSeconds * 1000);
    HopAddition2Ticker = setInterval(tickHop2, 1000);
}

function tickHop2()
{
    console.log(Hop2RemainingSeconds);
    hop2Label.innerText = Hop2RemainingMinutes + " min : " + Hop2RemainingSeconds + " sec";
    Hop2RemainingSeconds--;
    if(Hop2RemainingSeconds < 0)
    {
        Hop2RemainingSeconds = 59;
        Hop2RemainingMinutes--;
        if (Hop2RemainingMinutes < 0)
        {
            clearInterval(HopAddition2Ticker);
        }
    }
}

function resetHop2Timer()
{
    clearTimeout(HopAddition2Timer);
    clearInterval(HopAddition2Ticker);
    Hop2RemainingMinutes = 0;
    Hop2RemainingSeconds = 0;
    hop2Label.innerText = Hop2RemainingMinutes + " min : " + Hop2RemainingSeconds + " sec";
    console.log("Hop 2 timer has reset");
}

function alarmHop2()
{
    console.log("Hop 2 timer done");
    audio.play();
    //setTimeout(function(){ alert("Hop 2 Timer has Finshed!"); }, 3);
}

//Hop Addition 3 Timer
function addSubtractHop3Minutes(mins)
{
    Hop3RemainingMinutes = Hop3RemainingMinutes + mins;
    hop3Label.innerText = Hop3RemainingMinutes + " min : " + Hop3RemainingSeconds + " sec";
}

function startHop3Timer()
{
    console.log("Hop 3 timer started");

    var totalSeconds = Hop3RemainingMinutes * 60 + Hop3RemainingSeconds;
    HopAddition3Timer = setTimeout(alarmHop3, totalSeconds * 1000);
    HopAddition3Ticker = setInterval(tickHop3, 1000);
}

function tickHop3()
{
    console.log(Hop3RemainingSeconds);
    hop3Label.innerText = Hop3RemainingMinutes + " min : " + Hop3RemainingSeconds + " sec";
    Hop3RemainingSeconds--;
    if(Hop3RemainingSeconds < 0)
    {
        Hop3RemainingSeconds = 59;
        Hop3RemainingMinutes--;
        if (Hop3RemainingMinutes < 0)
        {
            clearInterval(HopAddition3Ticker);
        }
    }
}

function resetHop3Timer()
{
    clearTimeout(HopAddition3Timer);
    clearInterval(HopAddition3Ticker);
    Hop3RemainingMinutes = 0;
    Hop3RemainingSeconds = 0;
    hop3Label.innerText = Hop3RemainingMinutes + " min : " + Hop3RemainingSeconds + " sec";
    console.log("Hop 3 timer has reset");
}

function alarmHop3()
{
    console.log("Hop 3 timer done");
    audio.play();
    //setTimeout(function(){ alert("Hop 3 Timer has Finshed!"); }, 3);
}

//Common 
function everythingIsLoaded()
{
    boilLabel = document.querySelector("#boilLabel");
    hop1Label = document.querySelector("#hop1Label");
    hop2Label = document.querySelector("#hop2Label");
    hop3Label = document.querySelector("#hop3Label");
}

document.addEventListener("DOMContentLoaded", everythingIsLoaded);