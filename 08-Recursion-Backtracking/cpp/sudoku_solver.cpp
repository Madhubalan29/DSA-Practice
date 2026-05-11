/*
 * Problem: Sudoku Solver
 * Source:  LeetCode 37 - https://leetcode.com/problems/sudoku-solver/
 * 
 * Approach: Backtracking — try digits 1-9 in each empty cell, validate using
 *           row/col/box constraint sets. Backtrack on invalid placements.
 * Time Complexity:  O(9^(empty_cells)) worst case, heavily pruned
 * Space Complexity: O(81) for the board
 * 
 * Tags: recursion, backtracking, constraint-satisfaction
 */

#include <bits/stdc++.h>
using namespace std;

bool isValid(vector<vector<char>>& board, int row, int col, char c) {
    for (int i = 0; i < 9; i++) {
        if (board[row][i] == c) return false;
        if (board[i][col] == c) return false;
        int boxRow = 3 * (row / 3) + i / 3;
        int boxCol = 3 * (col / 3) + i % 3;
        if (board[boxRow][boxCol] == c) return false;
    }
    return true;
}

bool solve(vector<vector<char>>& board) {
    for (int i = 0; i < 9; i++) {
        for (int j = 0; j < 9; j++) {
            if (board[i][j] == '.') {
                for (char c = '1'; c <= '9'; c++) {
                    if (isValid(board, i, j, c)) {
                        board[i][j] = c;
                        if (solve(board)) return true;
                        board[i][j] = '.';
                    }
                }
                return false; // no valid digit found
            }
        }
    }
    return true; // all cells filled
}

void solveSudoku(vector<vector<char>>& board) {
    solve(board);
}

int main() {
    vector<vector<char>> board = {
        {'5','3','.','.','7','.','.','.','.'},
        {'6','.','.','1','9','5','.','.','.'},
        {'.','9','8','.','.','.','.','6','.'},
        {'8','.','.','.','6','.','.','.','3'},
        {'4','.','.','8','.','3','.','.','1'},
        {'7','.','.','.','2','.','.','.','6'},
        {'.','6','.','.','.','.','2','8','.'},
        {'.','.','.','4','1','9','.','.','5'},
        {'.','.','.','.','8','.','.','7','9'}
    };
    
    solveSudoku(board);
    
    cout << "Solved Sudoku:" << endl;
    for (auto& row : board) {
        for (char c : row) cout << c << " ";
        cout << endl;
    }
    
    return 0;
}
