var key = document.querySelector('#censored');

const censoredLetters = {1:81,2:87,3:88}

function censor(e) {
    for ( i in censoredLetters){

        if (e.keyCode == censoredLetters[i]) {
            e.preventDefault();
        }
    }
   }
        
document.addEventListener('keydown', censor);

