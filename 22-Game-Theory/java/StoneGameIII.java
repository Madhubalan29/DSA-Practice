/*
 * Problem: Stone Game III
 * Source:  LeetCode 1406 - https://leetcode.com/problems/stone-game-iii/
 * 
 * Approach: Suffix DP with minimax.
 * Time Complexity:  O(n)
 * Space Complexity: O(n)
 * 
 * Tags: game-theory, dynamic-programming, minimax
 */

import java.util.*;

public class StoneGameIII {
    
    public String stoneGameIII(int[] stoneValue) {
        int n = stoneValue.length;
        int[] dp = new int[n + 1];
        
        for (int i = n - 1; i >= 0; i--) {
            dp[i] = Integer.MIN_VALUE;
            int take = 0;
            for (int k = 0; k < 3 && i + k < n; k++) {
                take += stoneValue[i + k];
                dp[i] = Math.max(dp[i], take - dp[i + k + 1]);
            }
        }
        
        if (dp[0] > 0) return "Alice";
        if (dp[0] < 0) return "Bob";
        return "Tie";
    }
    
    public static void main(String[] args) {
        StoneGameIII sol = new StoneGameIII();
        System.out.println(sol.stoneGameIII(new int[]{1, 2, 3, 7}));  // Bob
        System.out.println(sol.stoneGameIII(new int[]{1, 2, 3, -9})); // Alice
        System.out.println(sol.stoneGameIII(new int[]{1, 2, 3, 6}));  // Tie
    }
}
