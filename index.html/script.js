let clickCount = 0;

function handleClick(buttonNumber) {
    clickCount++;

    if (clickCount < 5) {
        alert(Nice, {5 : clickCount} ,more ,clicks ,to ,go,);
    } else if (clickCount === 5) {
        // Hide the puzzle buttons
        document.getElementById('puzzle-container').classList.add('hidden');
        // Show the surprise message
        document.getElementById('message-container').classList.remove('hidden');
    }
}
