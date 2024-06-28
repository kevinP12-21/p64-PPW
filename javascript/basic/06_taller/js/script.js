document.addEventListener('DOMContentLoaded', () => {
    const currentWordElement = document.getElementById('current-word');
    const familiarityInput = document.getElementById('familiarity');
    const submitVoteButton = document.getElementById('submit-vote');
    const resultsList = document.getElementById('results-list');

    const words = ["biblioteca", "antología", "lexicografía", "neologismo", "onomatopeya"];
    let currentWordIndex = 0;
    let votes = [];

    function displayNextWord() {
        currentWordElement.textContent = words[currentWordIndex];
        familiarityInput.value = '';
    }

    submitVoteButton.addEventListener('click', () => {
        const familiarity = parseInt(familiarityInput.value);
        if (isNaN(familiarity) || familiarity < 1 || familiarity > 5) {
            alert("Por favor, ingrese un número entre 1 y 5.");
            return;
        }

        votes.push(familiarity);
        const resultItem = document.createElement('li');
        resultItem.textContent = `Palabra: ${words[currentWordIndex]} - Voto: ${familiarity}`;
        resultsList.appendChild(resultItem);

        currentWordIndex++;
        if (currentWordIndex < words.length) {
            displayNextWord();
        } else {
            alert("Todas las palabras han sido votadas.");
        }
    });

    displayNextWord();
});
