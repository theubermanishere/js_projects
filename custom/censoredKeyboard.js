var key = document.querySelector('#censored');

const censoredLetters = ['q','w','x']

function censor(e) {
    for (var letter in censoredLetters)
    {
        if (key.value.toLowerCase().endsWith(letter))
            {
            key.value = key.value.slice(0,-1);
                console.log(key.value);
            }
        }
}
        
document.addEventListener('keyup', censor);
