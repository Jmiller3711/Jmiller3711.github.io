console.log("brewTools.js init");

function startTimer()
{
    console.log("Timer has started");
    var secondsToWait = 5;
    setTimeout(doSomething, secondsToWait * 1000);

    alert("start button works");
}

function resetTimer()
{
    console.log("Timer has reset");
    alert("restart button works");
}

function doSomething()
{
    alert("Neat");
}