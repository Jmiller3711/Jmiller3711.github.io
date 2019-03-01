function writeToFile(firstName, lastName){
    var pom = document.createElement('a');

    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + 
    encodeURIComponent(firstName) + 
    "\r\n" +
    encodeURIComponent(lastName));

    pom.setAttribute('download', 'brewFormTest.txt');
  
    pom.style.display = 'none';
    document.body.appendChild(pom);
  
    pom.click();
  
    document.body.removeChild(pom);
}

function emailResults(totalGrainWeight, strikeWaterVolume, targetMashTemp, spargeWaterTemp, initialMashTemp, finalMashTemp, preBoilSpecificGravity, preBoilVolume, postBoilVolume, originalSpecificGravity, brewDayNotes, firstName, lastName, email){

    var line1 = "Hello " + firstName + " " + lastName + "," + "%0D%0A" + "%0D%0A";
    var line2 = "Thank you for using my brew form. Below are your results:" + "%0D%0A" + "%0D%0A";

    var line3 = "Pre-Brew Calculations:" + "%0D%0A";
    var line4 = "Total Grain Weight = " + totalGrainWeight + " lbs" + "%0D%0A";
    var line5 = "Strike Water Volume = " + strikeWaterVolume + " gal" + "%0D%0A";
    var line6 = "Target Mash Temp = " + targetMashTemp + " F" + "%0D%0A";
    var line7 = "Sparge Water Temp = " + spargeWaterTemp + " F" + "%0D%0A" + "%0D%0A";

    var line8 = "Mash Calculations:" + "%0D%0A";
    var line9 = "Initial Mash Temperature = " + initialMashTemp + " F" + "%0D%0A";
    var line10 = "Final Mash Temperature = " + finalMashTemp + " F" + "%0D%0A" + "%0D%0A";

    var line11 = "Boil Calculations:" + "%0D%0A";
    var line12 = "Pre-Boil SG  = " + preBoilSpecificGravity + "%0D%0A";
    var line13 = "Pre-Boil V  = " + preBoilVolume + " gal" + "%0D%0A";
    var line14 = "Post-Boil V  = " + postBoilVolume + " gal" + "%0D%0A" + "%0D%0A";

    var line15 = "Post Boil Calculations:" + "%0D%0A";
    var line16 = "Post-Boil Original SG  = " + originalSpecificGravity + "%0D%0A" + "%0D%0A";

    var line17 = "Brew Day Notes:" + "%0D%0A";
    var line18;
    if (brewDayNotes == "") {
        line18 = "User did not supply any notes" + "%0D%0A" + "%0D%0A";;
    }
    else {
        line18 = brewDayNotes + "%0D%0A" + "%0D%0A";
    }

    var line19 = "JPMillerEngineering.com";

    var greeting = line1 + line2;
    var preBrew = line3 + line4 + line5 + line6 + line7;
    var mash = line8 + line9 + line10;
    var boil = line11 + line12 + line13 + line14;
    var postBoil = line15 + line16;
    var notes = line17 + line18;
    var postScript = line19;

    var body = greeting + preBrew + mash + boil + postBoil + notes + postScript;

    var subject = "Brew Form Created by JPMillerEngineering.com";

    var myString = 'mailto:' + email + '?subject=' + subject + '&body=' + body;
    console.log("myString: ", myString);

    window.open(myString);
}