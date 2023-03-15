document.addEventListener('DOMContentLoaded', () => {
    const flipButton = document.getElementById('flipButton');
    const result = document.getElementById('result');
    const headsRadio = document.getElementById('headsRadio');
    const tailsRadio = document.getElementById('tailsRadio');
    const betAmountInput = document.getElementById('betAmount');
    const playerWins = document.getElementById('playerWins');
    const playerLosses = document.getElementById('playerLosses');

    let wins = 0;
    let losses = 0;

    flipButton.addEventListener('click', () => {
        const betAmount = parseInt(betAmountInput.value, 10);
        const betSide = headsRadio.checked ? 'Heads' : 'Tails';
        const coinFlip = Math.random() >= 0.5;
        result.textContent = coinFlip ? 'Heads' : 'Tails';

        if (coinFlip && betSide === 'Heads' || !coinFlip && betSide === 'Tails') {
            wins += betAmount;
            playerWins.textContent = wins;
        } else {
            losses += betAmount;
            playerLosses.textContent = losses;
        }
    });
});