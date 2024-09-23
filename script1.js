// Helper function to create the chessboard
function createBoard(size) {
    const board = document.getElementById('board');
    board.innerHTML = ''; // Clear the board

    board.style.gridTemplateColumns = `repeat(${size}, 40px)`;
    board.style.gridTemplateRows = `repeat(${size}, 40px)`;

    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            const square = document.createElement('div');
            square.classList.add('square');
            if ((row + col) % 2 === 0) {
                square.classList.add('light-square');
            } else {
                square.classList.add('dark-square');
            }
            board.appendChild(square);
        }
    }
}

// Function to render queens on the board
function renderQueens(solution, size) {
    const squares = document.querySelectorAll('#board .square');
    squares.forEach(square => square.classList.remove('queen'));

    solution.forEach((col, row) => {
        const index = row * size + col;
        squares[index].classList.add('queen');
    });
}

// Function to solve the N-Queens problem using backtracking
function solveNQueens() {
    const size = parseInt(document.getElementById('size').value, 10);

    // Validate the board size
    if (size < 4) {
        document.getElementById('solution').innerText = 'Board size must be 4 or greater.';
        document.getElementById('board').innerHTML = ''; // Clear the board
        return;
    }

    createBoard(size);

    const solution = [];
    const results = [];

    function isSafe(row, col) {
        for (let i = 0; i < row; i++) {
            if (solution[i] === col ||
                solution[i] - i === col - row ||
                solution[i] + i === col + row) {
                return false;
            }
        }
        return true;
    }

    function solve(row) {
        if (row === size) {
            results.push([...solution]);
            return;
        }
        for (let col = 0; col < size; col++) {
            if (isSafe(row, col)) {
                solution[row] = col;
                solve(row + 1);
                solution[row] = undefined;
            }
        }
    }

    solve(0);

    if (results.length > 0) {
        document.getElementById('solution').innerHTML = results.map((sol, index) => {
            renderQueens(sol, size);
            return `<div>Solution ${index + 1}: ${sol.map(col => col + 1).join(', ')}</div>`;
        }).join('<br>');
    } else {
        document.getElementById('solution').innerText = 'No solution found';
    }
}
