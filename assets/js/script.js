error = document.querySelector('#error');
requieredInput = document.querySelector('#name');


requieredInput.addEventListener('blur', erreur);
function erreur(requieredInput) {
    var letters = /^[A-Za-z]+$/;
    var vide = "";
    if((document.querySelector('#name').value.match(letters)) && (document.querySelector('#name').value.match(vide))) {
        return true;
    }

    else {
        error.innerHTML = 'Mauvaise saisie';
        error.style.color = 'red';
        return false;
    }
}