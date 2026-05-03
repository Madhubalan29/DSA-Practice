/*
 * Problem: N-Queens
 * Source:  LeetCode 51
 * Approach: Place queens row by row, check column/diagonal conflicts.
 * Time: O(n!), Space: O(n²)
 * Tags: backtracking, n-queens
 */
#include <bits/stdc++.h>
using namespace std;

void solve(int row, int n, vector<string>& board, vector<bool>& col,
           vector<bool>& diag1, vector<bool>& diag2, vector<vector<string>>& result) {
    if (row == n) { result.push_back(board); return; }
    for (int c = 0; c < n; c++) {
        if (col[c] || diag1[row - c + n - 1] || diag2[row + c]) continue;
        board[row][c] = 'Q';
        col[c] = diag1[row - c + n - 1] = diag2[row + c] = true;
        solve(row + 1, n, board, col, diag1, diag2, result);
        board[row][c] = '.';
        col[c] = diag1[row - c + n - 1] = diag2[row + c] = false;
    }
}

int main() {
    int n = 4;
    vector<string> board(n, string(n, '.'));
    vector<bool> col(n), diag1(2 * n), diag2(2 * n);
    vector<vector<string>> result;
    solve(0, n, board, col, diag1, diag2, result);
    cout << n << "-Queens solutions: " << result.size() << endl; // 2
    for (auto& sol : result) { for (auto& row : sol) cout << row << endl; cout << endl; }
    return 0;
}
