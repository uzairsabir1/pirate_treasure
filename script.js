// Pirate Clue Logic
let clickCount = 0;

function showClue() {
    const clues = [
        "Ye be close, but not close enough...",
        "The treasure hides where prying eyes rarely look."
    ];

    clickCount++;

    // Display random clues for the first 4-5 clicks
    if (clickCount < 10) {
        const randomIndex = Math.floor(Math.random() * clues.length);
        alert(clues[randomIndex]);
    } else {
        // Reveal the hidden hard clue after 5-6 clicks
        alert("💀 The true clue lies in the source!");
    }
}
