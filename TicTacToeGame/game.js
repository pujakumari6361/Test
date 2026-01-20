let currentPlayer = null;
let gameActive = false;
const cells = document.querySelectorAll(".cell");
const titleHeader = document.getElementById("titleHeader");
const restartBtn = document.getElementById("restartBtn");
const xPlayerDisplay = document.getElementById("xPlayerDisplay");
const oPlayerDisplay = document.getElementById("oPlayerDisplay");

const board = ["", "", "", "", "", "", "", "", ""];

const winningConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function choosePlayer(player) {
    currentPlayer = player;
    gameActive = true;
    titleHeader.textContent = `${currentPlayer.toUpperCase()}'s Turn`;

    if (player === "x") {
        xPlayerDisplay.classList.add("player-active");
        oPlayerDisplay.classList.remove("player-active");
    } else {
        oPlayerDisplay.classList.add("player-active");
        xPlayerDisplay.classList.remove("player-active");
    }
}

cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
        if (!gameActive || board[index] !== "" || currentPlayer === null) return;

        board[index] = currentPlayer;
        cell.textContent = currentPlayer.toUpperCase();
        cell.style.color = currentPlayer === "x" ? "#1892EA" : "#A737FF";

        checkWinner();
        switchPlayer();
    });
});

function switchPlayer() {
    if (!gameActive) return;
    currentPlayer = currentPlayer === "x" ? "o" : "x";
    titleHeader.textContent = `${currentPlayer.toUpperCase()}'s Turn`;

    if (currentPlayer === "x") {
        xPlayerDisplay.classList.add("player-active");
        oPlayerDisplay.classList.remove("player-active");
    } else {
        oPlayerDisplay.classList.add("player-active");
        xPlayerDisplay.classList.remove("player-active");
    }
}

function checkWinner() {
    for (let combo of winningConditions) {
        const [a, b, c] = combo;

        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            titleHeader.textContent = `${board[a].toUpperCase()} Wins! 🎉`;
            gameActive = false;
            restartBtn.style.visibility = "visible";
            return;
        }
    }

    if (!board.includes("")) {
        titleHeader.textContent = "Draw! 😐";
        gameActive = false;
        restartBtn.style.visibility = "visible";
    }
}

restartBtn.addEventListener("click", () => {
    board.fill("");
    cells.forEach(cell => {
        cell.textContent = "";
        cell.style.color = "white";
    });
    titleHeader.textContent = "Choose";
    currentPlayer = null;
    gameActive = false;
    restartBtn.style.visibility = "hidden";
    xPlayerDisplay.classList.remove("player-active");
    oPlayerDisplay.classList.remove("player-active");
});