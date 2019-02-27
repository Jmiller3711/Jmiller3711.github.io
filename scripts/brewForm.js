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
    var line1 = "First Name: " + firstName + "%0D%0A";
    var line2 = "Last Name: " + lastName + "%0D%0A";
    var line3 = "Email Used: " + email + "%0D%0A";
    var body = line1 + line2 + line3;

    var subject = "This is the Subject!!!";

    var myString = 'mailto:' + email + '?subject=' + subject + '&body=' + body;
    console.log("myString: ", myString);

    window.open(myString);
}