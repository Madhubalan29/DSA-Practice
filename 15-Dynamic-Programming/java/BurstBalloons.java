/*
 * Problem: Burst Balloons
 * Source:  LeetCode 312 - https://leetcode.com/problems/burst-balloons/
 * 
 * Approach: Interval DP — think of last balloon to burst in each interval.
 * Time Complexity:  O(n^3)
 * Space Complexity: O(n^2)
 * 
 * Tags: dynamic-programming, interval-dp
 */

import java.util.*;

public class BurstBalloons {
    
    public int maxCoins(int[] nums) {
        int n = nums.length;
        int[] val = new int[n + 2];
        val[0] = val[n + 1] = 1;
        for (int i = 0; i < n; i++) val[i + 1] = nums[i];
        
        int total = n + 2;
        int[][] dp = new int[total][total];
        
        for (int len = 2; len < total; len++) {
            for (int i = 0; i + len < total; i++) {
                int j = i + len;
                for (int k = i + 1; k < j; k++) {
                    dp[i][j] = Math.max(dp[i][j],
                        dp[i][k] + dp[k][j] + val[i] * val[k] * val[j]);
                }
            }
        }
        
        return dp[0][total - 1];
    }
    
    public static void main(String[] args) {
        BurstBalloons sol = new BurstBalloons();
        System.out.println("Max coins: " + sol.maxCoins(new int[]{3, 1, 5, 8})); // 167
    }
}
