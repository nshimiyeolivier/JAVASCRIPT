function soustraction(a, b) { // Fonction qui fait des soustractions
    return a - b;}

function addition(a, b) { //Fonction qui fait des divisions
    return a / b;}


function multiplication(a, b) { //Fonction qui fait des multiplications
    return a * b;}


function pourcentages(a, b) { //Fonction qui fait des calculs de pourcentages
    return a % b;}


var distance = prompt ("Entre la distance");
var temps = prompt ("Entre le temps en heures");

function calcVitesse(distance, temps) {
    return distance / temps;}

alert ("Vitesse:" + " " + calcVitesse(distance, temps) + "km/h");



