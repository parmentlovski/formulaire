// VARIABLES 

inputLastName = document.querySelector('#lastname');
inputFirstName = document.querySelector('#firstname');
inputMail = document.querySelector('#mail');
inputTel = document.querySelector('#tel');
inputStreet = document.querySelector('#street');
inputPostal = document.querySelector('#postal');
inputCity = document.querySelector('#city');
inputMessage = document.querySelector('#message');
validate = document.querySelector('#validate');


// EVENEMENTS

inputLastName.addEventListener('blur', erreurLastName);
inputFirstName.addEventListener('blur', erreurFirstName);
inputMail.addEventListener('blur', erreurMail);
inputTel.addEventListener('blur', erreurTel);
inputStreet.addEventListener('blur', erreurStreet);
inputPostal.addEventListener('blur', erreurPostal);
inputCity.addEventListener('blur', erreurCity);
inputMessage.addEventListener('blur', erreurMessage); 


// FONCTIONS

// Premier champ = NOM 

function erreurLastName(e) {

    majuscules = /^[A-Z ]+$/;
    errorLastName = document.querySelector('#errorLastName');

    if (document.querySelector('#lastname').value.match(majuscules)) {
        errorLastName.innerHTML = "";
        validate.style.display = "inherit";
        return true;
    }

    else if (document.querySelector('#lastname').value === ("")) {
        errorLastName.innerHTML = "Veuillez renseigner votre nom";
        validate.style.display = "none";
        e.preventDefault();
        return false;
    }

    else {
        errorLastName.innerHTML = 'Veuillez utiliser des caractères valides ainsi que des majuscules';
        validate.style.display = "none";
        e.preventDefault();
        return false;
    }
}


// Deuxième champ = Prénom 

function erreurFirstName() {

    letters = /^[A-Za-z é-]+$/;
    errorFirstName = document.querySelector('#errorFirstName');

    if (document.querySelector('#firstname').value.match(letters)) {
        errorFirstName.innerHTML = "";
        validate.style.display = "inherit";
        return true;
    }

    else if (document.querySelector('#firstname').value === ("")) {
        errorFirstName.innerHTML = "Veuillez renseigner votre prénom";
        validate.style.display = "none";
        return false; 
    }

    else {
        errorFirstName.innerHTML = "Veuillez utiliser des caractères valides";
        validate.style.display = "none";
        return false;
    }
}


// Troisième champ = adresse mail 

function erreurMail() {

    mail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    errorMail = document.querySelector('#errorMail');

    if(document.querySelector('#mail').value.match(mail)) {
        errorMail.innerHTML = "";
        validate.style.display = "inherit";
        return true;
    }

    else if (document.querySelector('#mail').value === ("")) {
        errorMail.innerHTML = "Veuillez renseigner votre adresse mail";
        validate.style.display = "none";
        return false;
    }

    else {
        errorMail.innerHTML = "Veuillez remplir une adresse mail valide";
        validate.style.display = "none";
        return false;
    }
}


// Quatrième champ = numéro de téléphone 

function erreurTel() {
    
    tel = /^(06|07|09|01|02|03|04|05)[0-9]{8}$/ ;
    errorTel = document.querySelector('#errorTel');

    if (document.querySelector('#tel').value.match(tel)) {
        errorTel.innerHTML = "";
        validate.style.display = "inherit";
        return true;
    }

    else if (document.querySelector('#tel').value === ("")) {
        errorTel.innerHTML = "Veuillez renseigner votre numéro de téléphone";
        validate.style.display = "none";
        return false;
    }

    else {
        errorTel.innerHTML = "Veuillez indiquer un numéro de téléphone valide";
        validate.style.display = "none";
        return false;
    }

}


// Cinquième champ = numéro de la rue 

function erreurStreet() {

    street = /^[a-zA-Z0-9, -ç]+$/;
    errorStreet = document.querySelector("#errorStreet");

    if(document.querySelector('#street').value.match(street)) {
        errorStreet.innerHTML = "";
        validate.style.display = "inherit";
        return true;
    }

    else if (document.querySelector('#street').value === ("")) {
        errorStreet.innerHTML = "Veuillez renseigner votre rue";
        validate.style.display = "none";
        return false;
    }

    else {
        errorStreet.innerHTML = "Veuillez indiquer une rue valide";
        validate.style.display = "none";
        return false;
    }
}


// Sixième champ = code postal 

function erreurPostal() {

    postal = /^([0-9]{5})$/;
    errorPostal = document.querySelector("#errorPostal");

    if (document.querySelector('#postal').value.match(postal)) {
        errorPostal.innerHTML = "";
        validate.style.display = "inherit";
        return true;
    }

    else if (document.querySelector('#postal').value ===("")) {
        errorPostal.innerHTML = "Veuillez renseigner votre code postal";
        validate.style.display = "none";
        return false;
    }

    else {
        errorPostal.innerHTML = "Veuillez indiquer un code postal valide";
        validate.style.display = "none";
        return false;
    }
}

// Septième champ = ville 

function erreurCity() {

    city = /^[a-zA-Z, -ç]+$/;
    errorCity = document.querySelector("#errorCity");

    if (document.querySelector("#city").value.match(city)) {
        errorCity.innerHTML = "";
        validate.style.display = "inherit";
        return true;
    }

    else if (document.querySelector('#city').value === ("")) {
        errorCity.innerHTML = "Veuillez renseigner votre ville";
        validate.style.display = "none";
        return false;
    }

    else {
        errorCity.innerHTML = "Veuillez indique une ville valide";
        validate.style.display = "none";
        return false;
    }
}


// Huitième champ = message 

function erreurMessage() {
   
    message = /^[a-zA-Z0-9, -ç]+$/;
    errorMessage = document.querySelector('#errorMessage');

    if (document.querySelector('#message').value.match(message)) {
        errorMessage.innerHTML = "";
        validate.style.display = "inherit";
        return true;
    }

    else if (document.querySelector('#message').value === ("")) {
        errorMessage.innerHTML = "Veuillez renseigner un message";
        validate.style.display = "none";
        return false;
    }

    else {
        errorMessage.innerHTML = "Veuillez indiquer un message valide";
        validate.style.display = "none";
        return false;
    }
}
