/*
 * Problem: N-Queens II
 * Source:  LeetCode 52 - https://leetcode.com/problems/n-queens-ii/
 * 
 * Approach: Backtracking with bitmask optimization. Track occupied columns,
 *           diagonals, and anti-diagonals using bitmasks for O(1) validity checks.
 * Time Complexity:  O(n!)
 * Space Complexity: O(n)
 * 
 * Tags: recursion, backtracking, bitmask
 */

#include <bits/stdc++.h>
using namespace std;

int totalNQueens(int n) {
    int count = 0;
    
    function<void(int, int, int, int)> solve = [&](int row, int cols, int diag, int antiDiag) {
        if (row == n) {
            count++;
            return;
        }
        
        int available = ((1 << n) - 1) & ~(cols | diag | antiDiag);
        
        while (available) {
            int pos = available & (-available); // lowest set bit
            available ^= pos;
            
            solve(row + 1,
                  cols | pos,
                  (diag | pos) << 1,
                  (antiDiag | pos) >> 1);
        }
    };
    
    solve(0, 0, 0, 0);
    return count;
}

int main() {
    cout << "N=4: " << totalNQueens(4) << endl;  // Output: 2
    cout << "N=8: " << totalNQueens(8) << endl;  // Output: 92
    cout << "N=1: " << totalNQueens(1) << endl;  // Output: 1
    
    return 0;
}
