var key = document.querySelector('#censored');

const censoredLetters = {1:'q',2:'w',3:'x'}

function censor(e) {
    for (var letter in censoredLetters)
    {
        if (key.value.toLowerCase().endsWith(censoredLetters[letter]))
            {
            key.value = key.value.slice(0,-1);
            }
        }
}
        
document.addEventListener('keyup', censor);
