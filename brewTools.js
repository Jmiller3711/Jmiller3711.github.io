console.log("brewTools.js init");

var HopAdditionOneTimer = undefined;
var HopAdditionOneTicker = undefined;
var HopOneRemainingMinutes = 0;
var HopOneRemainingSeconds = 0;
var hop1Label = undefined;
var audio = new Audio('./audio/timerAlarm.mp3');

function addSubtractMinutes(mins)
{
    HopOneRemainingMinutes = HopOneRemainingMinutes + mins;
    hop1Label.innerText = HopOneRemainingMinutes + " min : " + HopOneRemainingSeconds + " sec";
}

function startHopOneTimer()
{
    console.log("Hop 1 timer started");

    var totalSeconds = HopOneRemainingMinutes * 60 + HopOneRemainingSeconds;
    HopAdditionOneTimer = setTimeout(alarmHopOne, totalSeconds * 1000);
    HopAdditionOneTicker = setInterval(tickHopOne, 1000);
}

function tickHopOne()
{
    console.log(HopOneRemainingSeconds);
    hop1Label.innerText = HopOneRemainingMinutes + " min : " + HopOneRemainingSeconds + " sec";
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
    hop1Label.innerText = HopOneRemainingMinutes + " min : " + HopOneRemainingSeconds + " sec";
    console.log("Hop 1 timer has reset");
}

function alarmHopOne()
{
    console.log("Hop 1 timer done");
    audio.play();
    setTimeout(function(){ alert("Hop 1 Timer has Finshed!"); }, 3);
}

function everythingIsLoaded()
{
    hop1Label = document.querySelector("#hop1Label");
}

document.addEventListener("DOMContentLoaded", everythingIsLoaded);