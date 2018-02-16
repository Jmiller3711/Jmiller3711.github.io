console.log("brewTools.js init");

var HopAdditionOneTimer = undefined;
var HopAdditionOneTicker = undefined;
var HopOneRemainingMinutes = 0;
var HopOneRemainingSeconds = 0;
var hop1Label = document.querySelector("#hop1Label")

function add5Minutes()
{
    hop1Label.innerText = HopOneRemainingMinutes + " min : " + HopOneRemainingSeconds + " sec";
    HopOneRemainingMinutes = HopOneRemainingMinutes + 5;
}

function add1Minute()
{
    hop1Label.innerText = HopOneRemainingMinutes + " min : " + HopOneRemainingSeconds + " sec";
    HopOneRemainingMinutes = HopOneRemainingMinutes + 1;
}

function subtract5Minutes()
{
    hop1Label.innerText = HopOneRemainingMinutes + " min : " + HopOneRemainingSeconds + " sec";
    OneRemainingMinutes = HopOneRemainingMinutes - 5;
}

function subtract1Minute()
{
    hop1Label.innerText = HopOneRemainingMinutes + " min : " + HopOneRemainingSeconds + " sec";
    HopOneRemainingMinutes = HopOneRemainingMinutes - 1;
}

function startHopOneTimer()
{
    console.log("Hop 1 timer started");

    var totalSeconds = HopOneRemainingMinutes * 60 + HopOneRemainingSeconds;
    everythingIsLoaded();
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

    var audio = new Audio('./audio/timerAlarm.mp3');
    audio.play();

    setTimeout(function(){ alert("Hop 1 Timer has Finshed!"); }, 1);
}

function everythingIsLoaded()
{
    hop1Label = document.querySelector("#hop1Label");
}
