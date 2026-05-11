/*
 * Problem: N-Queens II
 * Source:  LeetCode 52 - https://leetcode.com/problems/n-queens-ii/
 * 
 * Approach: Backtracking with boolean arrays for columns, diags, anti-diags.
 * Time Complexity:  O(n!)
 * Space Complexity: O(n)
 * 
 * Tags: recursion, backtracking
 */

import java.util.*;

public class NQueensII {
    
    int count = 0;
    
    public int totalNQueens(int n) {
        count = 0;
        boolean[] cols = new boolean[n];
        boolean[] diag = new boolean[2 * n];
        boolean[] antiDiag = new boolean[2 * n];
        
        solve(0, n, cols, diag, antiDiag);
        return count;
    }
    
    void solve(int row, int n, boolean[] cols, boolean[] diag, boolean[] antiDiag) {
        if (row == n) {
            count++;
            return;
        }
        
        for (int col = 0; col < n; col++) {
            int d = row - col + n;
            int ad = row + col;
            
            if (cols[col] || diag[d] || antiDiag[ad]) continue;
            
            cols[col] = diag[d] = antiDiag[ad] = true;
            solve(row + 1, n, cols, diag, antiDiag);
            cols[col] = diag[d] = antiDiag[ad] = false;
        }
    }
    
    public static void main(String[] args) {
        NQueensII sol = new NQueensII();
        System.out.println("N=4: " + sol.totalNQueens(4));  // 2
        System.out.println("N=8: " + sol.totalNQueens(8));  // 92
    }
}
