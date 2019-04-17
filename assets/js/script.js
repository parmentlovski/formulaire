// VARIABLES 

inputLastName = document.querySelector('#lastname');
inputFirstName = document.querySelector('#firstname');
inputMail = document.querySelector('#mail');
inputTel = document.querySelector('#tel');
inputStreet = document.querySelector('#street');
inputPostal = document.querySelector('#postal');
inputCity = document.querySelector('#city');
inputMessage = document.querySelector('#message');
errorSubmit = document.querySelector('#errorSubmit');


// reg ex
majuscules = /^[A-Z ]+$/;
letters = /^[A-Za-z é-]+$/;
mail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
city = /^[a-zA-Z, -ç]+$/;
postal = /^([0-9]{5})$/;
street = /^[a-zA-Z0-9, -ç]+$/;
tel = /^(06|07|09|01|02|03|04|05)[0-9]{8}$/ ;
message = /^[a-zA-Z0-9, -ç]+$/;

var lastNameValidation = false;
var firstNameValidation = false; 
var mailValidation = false;
var cityValidation = false;
var postalValidation = false;
var telValidation = false;
var streetValidation = false;
var telValidation = false;
var messageValidation = false;


// EVENEMENTS

inputLastName.addEventListener('blur', erreurLastName);
inputFirstName.addEventListener('blur', erreurFirstName);
inputMail.addEventListener('blur', erreurMail);
inputTel.addEventListener('blur', erreurTel);
inputStreet.addEventListener('blur', erreurStreet);
inputPostal.addEventListener('blur', erreurPostal);
inputCity.addEventListener('blur', erreurCity);
inputMessage.addEventListener('blur', erreurMessage);
document.querySelector('#validate').addEventListener('click', notSubmit);


// FONCTIONS

// Premier champ = NOM 

function erreurLastName() {

    errorLastName = document.querySelector('#errorLastName');

    if (document.querySelector('#lastname').value.match(majuscules)) {
        errorLastName.innerHTML = "";
        document.querySelector('#lastname').style.backgroundColor = "#88CC88";
        lastNameValidation = true;
    }

    else if (document.querySelector('#lastname').value === ("")) {
        errorLastName.innerHTML = "Veuillez renseigner votre nom";
        document.querySelector('#lastname').style.backgroundColor = "inherit";
        lastNameValidation = false;
    }

    else {
        errorLastName.innerHTML = 'Veuillez utiliser des caractères valides ainsi que des majuscules';
        document.querySelector('#lastname').style.backgroundColor = "inherit";
        lastNameValidation = false;
    }
    
}


// Deuxième champ = Prénom 

function erreurFirstName() {

    errorFirstName = document.querySelector('#errorFirstName');

    if (document.querySelector('#firstname').value.match(letters)) {
        errorFirstName.innerHTML = "";
        document.querySelector('#firstname').style.backgroundColor = "#88CC88";
        firstNameValidation = true;
    }

    else if (document.querySelector('#firstname').value === ("")) {
        errorFirstName.innerHTML = "Veuillez renseigner votre prénom";
        document.querySelector('#firstname').style.backgroundColor = "inherit";
        firstNameValidation = false;
    }

    else {
        errorFirstName.innerHTML = "Veuillez utiliser des caractères valides";
        document.querySelector('#firstname').style.backgroundColor = "inherit";
        firstNameValidation = false;
    }
}


// Troisième champ = adresse mail 

function erreurMail() {

    errorMail = document.querySelector('#errorMail');

    if(document.querySelector('#mail').value.match(mail)) {
        errorMail.innerHTML = "";
        document.querySelector('#mail').style.backgroundColor = "#88CC88";
        mailValidation = true;
    }

    else if (document.querySelector('#mail').value === ("")) {
        errorMail.innerHTML = "Veuillez renseigner votre adresse mail";
        document.querySelector('#mail').style.backgroundColor = "inherit";
        mailValidation = false;
    }

    else {
        errorMail.innerHTML = "Veuillez remplir une adresse mail valide";
        document.querySelector('#mail').style.backgroundColor = "inherit";
        mailValidation = false;
    }   
}


// Quatrième champ = numéro de téléphone 

function erreurTel() {
    
    errorTel = document.querySelector('#errorTel');

    if (document.querySelector('#tel').value.match(tel)) {
        errorTel.innerHTML = "";
        document.querySelector('#tel').style.backgroundColor = "#88CC88";
        telValidation = true;
    }

    else if (document.querySelector('#tel').value === ("")) {
        errorTel.innerHTML = "Veuillez renseigner votre numéro de téléphone";
        document.querySelector('#tel').style.backgroundColor = "inherit";
        telValidation = false;
    }

    else {
        errorTel.innerHTML = "Veuillez indiquer un numéro de téléphone valide";
        document.querySelector('#tel').style.backgroundColor = "inherit";
        telValidation = false;
    }
}


// Cinquième champ = numéro de la rue 

function erreurStreet() {

    errorStreet = document.querySelector("#errorStreet");

    if(document.querySelector('#street').value.match(street)) {
        errorStreet.innerHTML = "";
        document.querySelector('#street').style.backgroundColor = "#88CC88";
        streetValidation = true;
    }

    else if (document.querySelector('#street').value === ("")) {
        errorStreet.innerHTML = "Veuillez renseigner votre rue";
        document.querySelector('#street').style.backgroundColor = "inherit";
        streetValidation = false;
    }

    else {
        errorStreet.innerHTML = "Veuillez indiquer une rue valide";
        document.querySelector('#street').style.backgroundColor = "inherit";
        streetValidation = false;
    }
}


// Sixième champ = code postal 

function erreurPostal() {

    errorPostal = document.querySelector("#errorPostal");

    if (document.querySelector('#postal').value.match(postal)) {
        errorPostal.innerHTML = "";
        document.querySelector('#postal').style.backgroundColor = "#88CC88";
        postalValidation = true;
    }

    else if (document.querySelector('#postal').value ===("")) {
        errorPostal.innerHTML = "Veuillez renseigner votre code postal";
        document.querySelector('#postal').style.backgroundColor = "inherit";
        postalValidation = false;
    }

    else {
        errorPostal.innerHTML = "Veuillez indiquer un code postal valide";
        document.querySelector('#postal').style.backgroundColor = "inherit";
        postalValidation = false;
    }
}

// Septième champ = ville 

function erreurCity() {

    errorCity = document.querySelector("#errorCity");

    if (document.querySelector("#city").value.match(city)) {
        errorCity.innerHTML = "";
        document.querySelector('#city').style.backgroundColor = "#88CC88";
        cityValidation = true;
    }

    else if (document.querySelector('#city').value === ("")) {
        errorCity.innerHTML = "Veuillez renseigner votre ville";
        document.querySelector('#city').style.backgroundColor = "inherit";
        cityValidation = false;
    }

    else {
        errorCity.innerHTML = "Veuillez indique une ville valide";
        document.querySelector('#city').style.backgroundColor = "inherit";
        cityValidation = false;
    }
}


// Huitième champ = message 

function erreurMessage() {
   
    errorMessage = document.querySelector('#errorMessage');

    if (document.querySelector('#message').value.match(message)) {
        errorMessage.innerHTML = "";
        document.querySelector('#message').style.backgroundColor = "#88CC88";
        messageValidation = true;
    }

    else if (document.querySelector('#message').value === ("")) {
        errorMessage.innerHTML = "Veuillez renseigner un message";
        document.querySelector('#message').style.backgroundColor = "inherit";
        messageValidation = false;
    }

    else {
        errorMessage.innerHTML = "Veuillez indiquer un message valide";
        document.querySelector('#message').style.backgroundColor = "inherit";
        messageValidation = false;
    }
}


// VALIDATION 

function notSubmit(e) {

    if ( lastNameValidation === true || firstNameValidation === true || mailValidation === true || cityValidation === true || postalValidation === true || telValidation === true || streetValidation === true || messageValidation === true ){
        alert("Formulaire envoyé !");
        console.log('salut');
    }

    else {
        e.preventDefault();
        window.scrollTo(0,0);
        errorSubmit.innerHTML = "Les champs ne sont pas valides";
        console.log('aurevoir');
    }
}
