document.addEventListener("DOMContentLoaded", () => {
    const gameBoard = document.getElementById("game-board");
    const message = document.getElementById("message");
    const scoreDisplay = document.getElementById("score");
    const referenceImage = document.getElementById("reference-image");
    const nextButton = document.getElementById("next-button");
    const difficultySelector = document.getElementById("difficulty-selector");
    const timerDisplay = document.getElementById("timer");
    const livesDisplay = document.getElementById("lives");
    const backButton = document.getElementById("back-button"); // Ajouter le bouton retour

    let images = ["pu.jpg", "pu2.jpg", "pu3.jpg", "pu4.jpg", "pu5.jpg", "pu6.jpg", "pu7.jpg", "pu8.jpg", "pu9.jpg", "pu10.jpg", "pu11.jpg", "pu12.jpg", "pu13.jpg"];
    let currentImageIndex = 0;
    let score = 0;
    let gridSize = 3;
    let pieces = [];
    let emptyTile = { row: gridSize - 1, col: gridSize - 1 };
    let timer;
    let timeRemaining = 0;
    let lives = 3;

    let maxTime = 5 * 60;

    let selectedImage = null;
    const imageSelector = document.getElementById("image-selector");

    imageSelector.addEventListener("change", (e) => {
        selectedImage = e.target.value;
        loadPuzzle(selectedImage);
    });

    difficultySelector.addEventListener("change", (e) => {
        const difficulty = e.target.value;
        switch (difficulty) {
            case "easy":
                gridSize = 3;
                maxTime = 5 * 60;
                break;
            case "medium":
                gridSize = 4;
                maxTime = 10 * 60;
                break;
            case "hard":
                gridSize = 5;
                maxTime = 15 * 60;
                break;
            case "very-hard":
                gridSize = 6;
                maxTime = 30 * 60;
                break;
        }
        if (!selectedImage) {
            selectedImage = images[Math.floor(Math.random() * images.length)];
        }
        loadPuzzle(selectedImage);
    });

    function loadPuzzle(imageSrc) {
        gameBoard.innerHTML = "";
        referenceImage.src = imageSrc;
        pieces = [];
        timeRemaining = maxTime;
        clearInterval(timer);

        timer = setInterval(() => {
            timeRemaining--;
            if (timeRemaining <= 0) {
                clearInterval(timer);
                message.textContent = "Temps écoulé ! Vous avez perdu une vie.";
                lives--;
                livesDisplay.textContent = `Vies : ${lives}`;

                if (lives <= 0) {
                    gameOver();
                } else {
                    setTimeout(nextPuzzle, 1500);
                }
            } else {
                timerDisplay.textContent = formatTime(timeRemaining);

                if (timeRemaining <= 60) {
                    timerDisplay.style.color = "red";
                } else {
                    timerDisplay.style.color = "black";
                }
            }
        }, 1000);

        livesDisplay.textContent = `Vies : ${lives}`;

        const boardSize = Math.min(window.innerWidth, window.innerHeight) * 0.8;
        const tileSize = Math.floor(boardSize / gridSize);
        gameBoard.style.width = `${gridSize * tileSize}px`;
        gameBoard.style.height = `${gridSize * tileSize}px`;
        gameBoard.style.position = "relative";

        let positions = [...Array(gridSize * gridSize).keys()];
        shuffleArray(positions);

        positions.forEach((index, pos) => {
            let row = Math.floor(pos / gridSize);
            let col = pos % gridSize;

            if (index === gridSize * gridSize - 1) {
                emptyTile = { row, col };
                return;
            }

            let piece = document.createElement("div");
            piece.classList.add("piece");
            piece.style.backgroundImage = `url(${imageSrc})`;
            piece.style.backgroundSize = `${gridSize * tileSize}px ${gridSize * tileSize}px`;
            piece.style.backgroundPosition = `${-(index % gridSize) * tileSize}px ${-Math.floor(index / gridSize) * tileSize}px`;
            piece.style.width = `${tileSize}px`;
            piece.style.height = `${tileSize}px`;
            piece.style.position = "absolute";
            piece.style.top = row * tileSize + "px";
            piece.style.left = col * tileSize + "px";
            piece.setAttribute("data-row", row);
            piece.setAttribute("data-col", col);
            piece.setAttribute("data-index", index);

            piece.addEventListener("click", () => movePiece(piece));

            gameBoard.appendChild(piece);
            pieces.push(piece);
        });
    }

    function movePiece(piece) {
        let row = parseInt(piece.getAttribute("data-row"));
        let col = parseInt(piece.getAttribute("data-col"));

        if ((Math.abs(row - emptyTile.row) === 1 && col === emptyTile.col) || 
            (Math.abs(col - emptyTile.col) === 1 && row === emptyTile.row)) {

            piece.setAttribute("data-row", emptyTile.row);
            piece.setAttribute("data-col", emptyTile.col);
            piece.style.top = emptyTile.row * parseInt(piece.style.height) + "px";
            piece.style.left = emptyTile.col * parseInt(piece.style.width) + "px";

            emptyTile.row = row;
            emptyTile.col = col;

            checkWin();
        }
    }

    function checkWin() {
        let isComplete = pieces.every(piece => {
            let correctIndex = parseInt(piece.getAttribute("data-index"));
            let currentRow = parseInt(piece.getAttribute("data-row"));
            let currentCol = parseInt(piece.getAttribute("data-col"));
            let expectedRow = Math.floor(correctIndex / gridSize);
            let expectedCol = correctIndex % gridSize;
            return currentRow === expectedRow && currentCol === expectedCol;
        });

        if (isComplete && emptyTile.row === gridSize - 1 && emptyTile.col === gridSize - 1) {
            score += 100;
            scoreDisplay.textContent = score;
            message.textContent = "Bravo ! Puzzle terminé !";
            clearInterval(timer);
            setTimeout(nextPuzzle, 5000);
        }
    }

    function gameOver() {
        message.textContent = "Vous avez perdu ! Toutes vos vies sont épuisées.";
        clearInterval(timer);
    }

    function nextPuzzle() {
        if (lives <= 0) return;
        currentImageIndex = Math.floor(Math.random() * images.length);
        loadPuzzle(images[currentImageIndex]);
    }

    function formatTime(seconds) {
        let minutes = Math.floor(seconds / 60);
        let secs = seconds % 60;
        return `${minutes}:${secs < 10 ? "0" + secs : secs}`;
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Fonction pour gérer le bouton retour
    backButton.addEventListener("click", () => {
        window.history.back(); // Retourner à la page précédente dans l'historique du navigateur
    });
    backButton.addEventListener("click", () => {
    window.location.href = "puzzle.html";  // Remplacez "index.html" par l'URL de la page vers laquelle vous voulez rediriger
});

    loadPuzzle(images[currentImageIndex]);
});