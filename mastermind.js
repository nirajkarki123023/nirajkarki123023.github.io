// Secret code — for simplicity, it's hardcoded. You could generate it randomly if needed.
const secretCode = [1, 2, 3, 4]; 

function processGuess() {
    const input = document.getElementById("guessInput").value;
    const feedbackElement = document.getElementById("feedback");

    // Convert input string into an array of numbers
    const guess = input.split('').map(Number);

    // Validate guess length
    if (guess.length !== 4) {
        alert("Guess must be exactly 4 digits.");
        return;
    }

    let isValid = true;

    // Check each slot using checkInput function
    for (let i = 0; i < guess.length; i++) {
        if (!checkInput(guess[i])) {
            isValid = false;
            break;
        }
    }

    if (!isValid) {
        feedbackElement.textContent = "Invalid input detected. Please try again.";
        return;
    }

    // Compare guess with secret code and provide feedback
    const feedback = generateFeedback(guess, secretCode);
    feedbackElement.textContent = feedback;

    if (feedback === "4 black") {
        alert("Congratulations! You cracked the code!");
    }
}

// Generate feedback: Black = right number and position, White = right number, wrong position
function generateFeedback(guess, secret) {
    let black = 0;
    let white = 0;

    const secretCopy = [...secret];
    const guessCopy = [...guess];

    // Check for blacks (correct position & number)
    for (let i = 0; i < 4; i++) {
        if (guessCopy[i] === secretCopy[i]) {
            black++;
            secretCopy[i] = guessCopy[i] = null;  // nullify matched values
        }
    }

    // Check for whites (correct number, wrong position)
    for (let i = 0; i < 4; i++) {
        if (guessCopy[i] !== null && secretCopy.includes(guessCopy[i])) {
            white++;
            secretCopy[secretCopy.indexOf(guessCopy[i])] = null;
        }
    }

    return `${black} black, ${white} white`;
}

// Custom error class
class RuleError extends Error {
    constructor(message) {
        super(message);
        this.name = "Rule Error";
    }
}

// Input validation with try/catch and fallback
function checkInput(slot) {
    try {
        if (isNaN(slot)) {
            throw new RuleError("Slots must contain numbers only.");
        }
        if (slot < 1 || slot > 6) {
            throw new RuleError("Only numbers between 1 and 6 are accepted.");
        }
        return true;
    } catch (error) {
        if (error instanceof RuleError) {
            alert(error.name + ": " + error.message);
        } else {
            console.error("Unexpected error:", error);
        }
        return false;
    }
}
