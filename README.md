# ADA_project
# N-Queens and Sum of Subsets Problem Solvers

## Overview

This project provides solutions for two classical backtracking problems: the **N-Queens** problem and the **Sum of Subsets** problem. The project includes algorithms to solve these problems, with detailed explanations and implementation in a programming language of choice (e.g., Python, Java, C++).

- **N-Queens Problem:** The goal is to place N queens on an N×N chessboard such that no two queens threaten each other.
- **Sum of Subsets Problem:** The goal is to find all subsets of a given set whose sum is equal to a target value.

## Features

### 1. N-Queens Problem
- **Input:** An integer N representing the size of the chessboard (N×N).
- **Output:** All possible arrangements of N queens on the chessboard where no queens threaten each other.
- **Backtracking Algorithm:** Uses a backtracking approach to explore valid queen placements.
- **Visualization:** The solution outputs the board configurations with queen positions.

### 2. Sum of Subsets Problem
- **Input:** A set of integers and a target sum value.
- **Output:** All subsets of the input set that sum up to the target value.
- **Backtracking Algorithm:** Uses a backtracking technique to explore subsets and prune invalid combinations.

## Technologies Used

- **Programming Language:** Python/Java/C++ (Choose based on implementation)
- **Algorithms:** Backtracking

## N-Queens Problem Algorithm

1. **Initialize an empty N×N chessboard.**
2. **Start placing queens row by row:**
   - For each row, attempt to place a queen in each column.
   - Check if the position is safe (i.e., no queens in the same row, column, or diagonals).
   - If the position is safe, place the queen and move to the next row.
   - If all rows are filled successfully, store the solution.
3. **Backtrack** if no valid position is found in the current row.
4. **Output all solutions** or indicate that no solution exists for a given N.

### Time Complexity: 
- **O(N!)** where N is the size of the chessboard, since there are N possibilities for each queen placement.

## Sum of Subsets Problem Algorithm

1. **Sort the input set** in non-decreasing order (optional for efficiency).
2. **Start from the first element** and recursively explore subsets:
   - Include the current element and check if the sum is equal to the target.
   - Exclude the current element and continue searching.
   - If the sum of the current subset exceeds the target, backtrack.
3. **Terminate** when all subsets have been explored.
4. **Output all valid subsets** that sum up to the target value.

### Time Complexity: 
- **O(2^n)** where n is the number of elements in the input set, as every element can either be included or excluded from the subset.

## How to Run

1. Clone the repository:

   ```bash
   git clone https://github.com/aryanrbenakatti/ADA_project.git
