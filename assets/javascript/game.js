    // create list of words
    var words = ["jazz","awkward","banjo","dwarves","fishhook","gazebo","gypsy","ivory","jiffy","unzip","yacht"];

    var wins = 0;
    var loss = 0;
    var lettersGuessed = [];
    var numberOfGuesses = 0;
    var numberOfMisses = 10;
    var positionOfLetter = 0;
    var newDisplayWordStatus = '';
    var LettersGuessedRight = 0;
    var wordIndex = Math.floor(Math.random(words) * words.length);
    var word = words[wordIndex];
    var displayWordStatus = '';
    var numberOfLeters = word.length;
    for (var i = 0; i < numberOfLeters; i++) {
            var displayWordStatus = displayWordStatus + "_ ";
        }

    function resetWord() {
        numberOfGuesses = 0;
        lettersGuessed = [];
        positionOfLetter = 0;
        newDisplayWordStatus = '';
        LettersGuessedRight = 0;

        // Select random word from array
        wordIndex = Math.floor(Math.random(words) * words.length);
        word = words[wordIndex];
        console.log("WORD " + word);

        // get length of word for display
        displayWordStatus = '';
        numberOfLeters = word.length;
        for (var i = 0; i < numberOfLeters; i++) {
            displayWordStatus = displayWordStatus + "_ ";
        }
        console.log(displayWordStatus);
    }

    function setStats() {
    
        var targetDiv = document.getElementById("guessesRemaining");
            targetDiv.textContent = numberOfMisses - numberOfGuesses;

        var targetDiv1 = document.getElementById("currentWord");
            targetDiv1.textContent = displayWordStatus;

        var targetDiv2 = document.getElementById("wins");
            targetDiv2.textContent = wins;

        var targetDiv3 = document.getElementById("alreadyGuessed");
            targetDiv3.textContent = lettersGuessed;

        var targetDiv4 = document.getElementById("loss");
            targetDiv4.textContent = loss;

    }

    resetWord();
    // setStats();

    document.onkeyup = function(event) {
        var letter = event.key.toLowerCase();
        // check if letter was already selected
        if (lettersGuessed.indexOf(letter) !== -1) {
            console.log("Guessed Already " + letter);
            // beep here
        } else {
            console.log("not Guessed " + letter);
            if (letter !== ' ') {
                lettersGuessed.push(letter);
            }

            // check if the letter is in the word
            positionOfLetter = word.indexOf(letter);
            if (positionOfLetter === -1) {
                numberOfGuesses++;
                console.log("Letter NOT in Word " + letter);
            } else {
                console.log("Letter in Word " + letter);
                // Go through array and find entryies that match our word
                console.log("Position in Word " + positionOfLetter);
                displayWordStatus = '';
                LettersGuessedRight = 0;
                for (var j = 0; j < word.length; j++) {
                    if (lettersGuessed.indexOf(word[j]) !== -1) {
                        displayWordStatus = displayWordStatus + word[j] + " ";
                        LettersGuessedRight++;
                    } else {
                        displayWordStatus = displayWordStatus + "_ ";
                    }
                } 
            }
            console.log("Display status " + displayWordStatus);
            console.log("Guessed right " + LettersGuessedRight + " Word len " + word.length);
            console.log("Guesses " + numberOfGuesses + " Misses " + numberOfMisses);
            console.log("Letters Guessed " + lettersGuessed);

            setStats();
        }
        if (LettersGuessedRight === word.length) {
            wins++;
            console.log("You win!! " + word);
            alert("You WON!! The word was '" + word + "'")
            resetWord();
        }
        if (numberOfGuesses === numberOfMisses) {
            loss++;
            console.log("You lost!! " + word);
            alert("Sorry. You Lost!! The word was '" + word + "'")
            resetWord();
        }
        setStats();
    }
