/*
 * Problem: Distinct Subsequences
 * Source:  LeetCode 115 - https://leetcode.com/problems/distinct-subsequences/
 * 
 * Approach: 2D DP — dp[i][j] counts subsequences of s[0..i-1] matching t[0..j-1].
 * Time Complexity:  O(m * n)
 * Space Complexity: O(m * n)
 * 
 * Tags: string, dynamic-programming, subsequence
 */

import java.util.*;

public class DistinctSubsequences {
    
    public int numDistinct(String s, String t) {
        int m = s.length(), n = t.length();
        long[][] dp = new long[m + 1][n + 1];
        
        for (int i = 0; i <= m; i++) dp[i][0] = 1;
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                dp[i][j] = dp[i-1][j];
                if (s.charAt(i-1) == t.charAt(j-1)) {
                    dp[i][j] += dp[i-1][j-1];
                }
            }
        }
        
        return (int) dp[m][n];
    }
    
    public static void main(String[] args) {
        DistinctSubsequences sol = new DistinctSubsequences();
        System.out.println("numDistinct(\"rabbbit\", \"rabbit\") = " + sol.numDistinct("rabbbit", "rabbit")); // 3
        System.out.println("numDistinct(\"babgbag\", \"bag\") = " + sol.numDistinct("babgbag", "bag")); // 5
    }
}
