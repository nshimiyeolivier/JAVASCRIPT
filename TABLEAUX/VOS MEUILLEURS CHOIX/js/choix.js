var acteurs = [" John", " Peter", " Marry"];
var classement = ["Le premier est ", "Le deuxieme est ", "Le troixieme est "];
var i;
for(i=0; i < acteurs.length; i++) {
document.write ("le numero " + (i+1) + " est " +acteurs[i] +"<br>");
}

document.write ("<br />")

for(i=0; i< classement.length; i++) {
    document.write(classement[i]+acteurs[i] +"<br>")
}


 