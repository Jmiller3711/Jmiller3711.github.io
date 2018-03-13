function loadData(year) 
{
    $.getScript('https://script.google.com/macros/s/AKfycbwbHIPbB096wnWNFtiqNOnWL6vo9yRe3CSSHeHlA8vXRlBdbf4v/exec?callback=gotData&year='+year);
}
function gotData(d)
{
    console.log(d);
    if(d.success)
    {
        console.log(d.data);

        for (var seed = 0; seed < d.data.length; seed++)
        {
            $("." + d.data[seed].regionABVR+ "." + d.data[seed].seed)
            .html(d.data[seed].name + " (" + d.data[seed].seed + ")")
            .data("team",d.data[seed]); //puts team on html data
        }
    }
}
$(function()
{
    $("#resetButton").click(function()
    {
        $(".inputField").val(""); //sets value
    });
    $("select#stat").change(function()
    {
        console.log($(this).val()); //returns value
        var stat = $(this).val();
        $(".r1").each(function()
      {
        var teamInput = $(this).prev().find("input");
        if (!teamInput.length) teamInput = $(this).next().find("input");
        teamInput.val($(this).data("team")[stat]);
        });
    })
    loadData();
});	

function onRumbleClick()
{
  var allFirstRounds = $(".r1");

  //set the team's stat for each round one element based on what's in the input box which was loaded by switching the stat type dropdown or changed by the user
  allFirstRounds.each(function(element){
    var teamData = element.data("team");
    var stat = 37; //use the function where we set the input of each round one team, but instead of setting the value, GET the value
    //should be very similar
    teamData.stat = stat;
    element.data("team", teamData);
  })

  computeRound(allFirstRounds);
}

function computeRound(TeamsToBattle)
{
  //if we run out of teams we're done and can leave
  if(TeamsToBattle.length == 0 ) return;

  if(TeamsToBattle.length == 1) return; //I think that means we're at the championship and we're done.. need to test this

  var firstGuy = TeamsToBattle.first(); //.first() is a jquery function. it won't work on a regular js array
  //we grab the first thing in the array, which should be an option tag which should have a data-team attribute on it

  var mySeed = firstGuy.data("team").seed;
  var myRegion = firstGuy.data("team").region;
  
  var MyOpponent = firstGuy.siblings().first();

  var mySlotIfIWin = firstGuy.index();  //this is the index of the option tag under the select which holds the dropdown for this bout
  var hisSlotIfHeWins = MyOpponent.index();

  firstGuy.text(firstGuy.data("team").name);
  MyOpponent.text()

  var myStat = firstGuy.data("team").stat;
  var hisStat = MyOpponent.data("team").stat;

  //recreate TeamsToBattle without me or my opponent
  var newTeamsToBattle = [];
  for(var i=0; i<TeamsToBattle.length; i++){
    var teamSeed = TeamsToBattle[i].data("team").seed;
    if(teamSeed != mySeed && teamSeed != MyOpponent.data("team").seed)
      newTeamsToBattle.push(TeamsToBattle[i]);
  }

  var winner;
  if(myStat > hisStat){
    //I win
    firstGuy.parent().selectedIndex(mySlotIfIWin);
    winner = firstGuy.data("team");
  } else {
    //he wins
    firstGuy.parent().selectedIndex(hisSlotIfHeWins);
    winner = MyOpponent.data("team");
  }

  //problem here, we need to figure out where the winner might get placed into the next bracket.. if you were very careful with your naming we'll be okay, but if you messed up at all it won't work at all
  var winnerGoesHere = $(".dropdown option[value='"+firstGuy.val().slice(0,-2) + 'or' + MyOpponent.val()+"']"); // we concatted 1or16or8or9SW with 5or12or4or13SW  (but we removed the SW from teh first one)
  winnerGoesHere.data("team", winner);

  newTeamsToBattle.push(winnerGoesHere);


//we removed two peolp from the array, and added one back.
//so if we re-call the function we expect there to be one less team to battle
//so eventually this 'loop' will end when we hit 0 (or 1) teams left
computeRound(newTeamsToBattle);
}