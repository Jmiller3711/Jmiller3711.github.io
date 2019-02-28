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

function emailResults(firstName, lastName, email){
    var line1 = "Hello " + firstName + " " + lastName + "," + "%0D%0A" + "%0D%0A";
    var line2 = "Thank you for using my brew form. Below are your results:" + "%0D%0A";
    var body = line1 + line2;

    var subject = "Brew Form Created by JPMillerEngineering.com";

    var myString = 'mailto:' + email + '?subject=' + subject + '&body=' + body;
    console.log("myString: ", myString);

    window.open(myString);
}