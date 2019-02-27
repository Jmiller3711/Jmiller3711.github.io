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