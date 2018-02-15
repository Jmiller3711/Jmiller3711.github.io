console.log("brewTools.js init");

var HopAdditionOneTimer = undefined;
var HopAdditionOneTicker = undefined;
var HopOneRemainingMinutes = 0;
var HopOneRemainingSeconds = 0;
var hop1Label = document.querySelector("#hop1Labell")

function add5Minutes()
{
    HopOneRemainingMinutes = HopOneRemainingMinutes + 5;
}

function add1Minute()
{
    HopOneRemainingMinutes = HopOneRemainingMinutes + 1;
}

function subtract5Minutes()
{
    HopOneRemainingMinutes = HopOneRemainingMinutes - 5;
}

function subtract1Minute()
{
    HopOneRemainingMinutes = HopOneRemainingMinutes - 1;
}

function startHopOneTimer()
{
    console.log("Hop 1 timer started");
    //hop1Label.innerText = document.querySelector("#hop1Label");

    var totalSeconds = HopOneRemainingMinutes * 60 + HopOneRemainingSeconds;
    
    HopAdditionOneTimer = setTimeout(alarmHopOne, totalSeconds * 1000);
    HopAdditionOneTicker = setInterval(tickHopeOne, 1000);
}

function tickHopeOne()
{
    console.log(HopOneRemainingSeconds);
    HopOneRemainingSeconds--;
    if(HopOneRemainingSeconds < 0)
    {
        HopOneRemainingSeconds = 59;
        HopOneRemainingMinutes--;
        if (HopOneRemainingMinutes < 0)
        {
            clearInterval(HopAdditionOneTicker);
        }
    }
}

function resetHopOneTimer()
{
    clearTimeout(HopAdditionOneTimer);
    clearInterval(HopAdditionOneTicker);
    HopOneRemainingMinutes = 0;
    HopOneRemainingSeconds = 0;
    console.log("Hop 1 timer has reset");
}

function alarmHopOne()
{
    console.log("Hop 1 timer done");

    var audio = new Audio('./audio/timerAlarm.mp3');
    audio.play();

    setTimeout(function(){ alert("Hop 1 Timer has Finshed!"); }, 1);
}
