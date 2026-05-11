/*
 * Problem: Sudoku Solver
 * Source:  LeetCode 37 - https://leetcode.com/problems/sudoku-solver/
 * 
 * Approach: Backtracking with row/col/box constraint checking.
 * Time Complexity:  O(9^(empty_cells)) worst case, heavily pruned
 * Space Complexity: O(81)
 * 
 * Tags: recursion, backtracking, constraint-satisfaction
 */

import java.util.*;

public class SudokuSolver {
    
    public void solveSudoku(char[][] board) {
        solve(board);
    }
    
    boolean solve(char[][] board) {
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
                    return false;
                }
            }
        }
        return true;
    }
    
    boolean isValid(char[][] board, int row, int col, char c) {
        for (int i = 0; i < 9; i++) {
            if (board[row][i] == c) return false;
            if (board[i][col] == c) return false;
            int boxRow = 3 * (row / 3) + i / 3;
            int boxCol = 3 * (col / 3) + i % 3;
            if (board[boxRow][boxCol] == c) return false;
        }
        return true;
    }
    
    public static void main(String[] args) {
        SudokuSolver sol = new SudokuSolver();
        char[][] board = {
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
        
        sol.solveSudoku(board);
        
        System.out.println("Solved Sudoku:");
        for (char[] row : board) {
            for (char c : row) System.out.print(c + " ");
            System.out.println();
        }
    }
}
