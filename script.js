document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('click', handleCellClick, { once: true });
});

function handleCellClick(e) {
    const cell = e.target;
    const currentPlayer = nextPlayer ? 'O' : 'X';
    placeMark(cell, currentPlayer);
    if (checkWin(currentPlayer)) {
        setWinner(currentPlayer);
    } else if (isDraw()) {
        setWinner('Draw');
    } else {
        nextPlayer = !nextPlayer;
        setStatus(`Next player: ${currentPlayer === 'X' ? 'O' : 'X'}`);
    }
}

function placeMark(cell, currentPlayer) {
    cell.innerText = currentPlayer;
}

function checkWin(player) {
    // This function should be implemented based on game logic
    return false;
}

function isDraw() {
    // This function should be implemented based on game logic
    return false;
}

function setWinner(winner) {
    document.getElementById('winner').innerText = `Winner: ${winner}`;
}

function setStatus(status) {
    document.getElementById('status').innerText = status;
}

let nextPlayer = false;
