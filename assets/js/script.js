// Premier champ = NOM 

errorLastName = document.querySelector('#errorLastName');
inputLastName = document.querySelector('#lastname');

inputLastName.addEventListener('blur', erreurLastName);

function erreurLastName() {
    majuscules = /^[A-Z]+$/;

    if(document.querySelector('#lastname').value.match(majuscules)) {
        errorLastName.innerHTML = "";
        return true;
    }

    else if (document.querySelector('#lastname').value === ("")) {
        errorLastName.innerHTML = "Veuillez renseigner votre nom";
        return false;
    }

    else {
        errorLastName.innerHTML = 'Veuillez utiliser des caractères valides ainsi que des majuscules';
        return false;
    }
}


// Deuxième champ = Prénom 

errorFirstName = document.querySelector('#errorFirstName');
inputFirstName = document.querySelector('#firstname');

inputFirstName.addEventListener('blur', erreurFirstName);

function erreurFirstName() {
    letters = /^[A-Za-z]+$/;

    if(document.querySelector('#firstname').value.match(letters)) {
        errorFirstName.innerHTML = "";
        return true;
    }

    else if (document.querySelector('#firstname').value === ("")) {
        errorFirstName.innerHTML = "Veuillez renseigner votre prénom";
        return false; 
    }

    else {
        errorFirstName.innerHTML = "Veuillez utiliser des caractères valides";
        return false;
    }
}


// Troisième champ = adresse mail 

errorMail = document.querySelector('#errorMail');
inputMail = document.querySelector('#mail');

inputMail.addEventListener('blur', erreurMail);

function erreurMail() {
     mail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    if(document.querySelector('#mail').value.match(mail)) {
      
        errorMail.innerHTML = "";
        return true;
    }

    else if (document.querySelector('#mail').value === ("")) {
        errorMail.innerHTML = "Veuillez renseigner votre adresse mail";
        return false;
    }

    else {
        errorMail.innerHTML = "Veuillez remplir une adresse mail valide";
        return false;
    }
}

// Quatrième champ = numéro de téléphone 

errorTel = document.querySelector('#errorTel');
inputTel = document.querySelector('#tel');

inputTel.addEventListener('blur', erreurTel);

function erreurTel() {
    // var tel = /^[0-9]$/;
    var tel = /^(06|07|09|01|02|03|04|05)[0-9]{8}$/ ;

    if(document.querySelector('#tel').value.match(tel)) {

        errorTel.innerHTML = "";
        return true;
    }

    else if (document.querySelector('#tel').value === ("")) {
        errorTel.innerHTML = "Veuillez renseigner votre numéro de téléphone";
        return false;
    }

    else {
        errorTel.innerHTML = "Veuillez indiquer un numéro de téléphone valide";
        return false;
    }

}

// Cinquième champ = numéro de la rue 

