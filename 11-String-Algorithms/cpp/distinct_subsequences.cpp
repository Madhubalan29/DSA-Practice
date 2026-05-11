/*
 * Problem: Distinct Subsequences
 * Source:  LeetCode 115 - https://leetcode.com/problems/distinct-subsequences/
 * 
 * Approach: 2D DP where dp[i][j] = number of distinct subsequences of s[0..i-1]
 *           that equal t[0..j-1]. If s[i-1]==t[j-1], dp[i][j] = dp[i-1][j-1] + dp[i-1][j].
 *           Else dp[i][j] = dp[i-1][j].
 * Time Complexity:  O(m * n)
 * Space Complexity: O(m * n) — can be optimized to O(n)
 * 
 * Tags: string, dynamic-programming, subsequence
 */

#include <bits/stdc++.h>
using namespace std;

int numDistinct(string s, string t) {
    int m = s.size(), n = t.size();
    // Use unsigned long long to avoid overflow
    vector<vector<unsigned long long>> dp(m + 1, vector<unsigned long long>(n + 1, 0));
    
    // Empty t is a subsequence of any prefix of s
    for (int i = 0; i <= m; i++) dp[i][0] = 1;
    
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            dp[i][j] = dp[i-1][j]; // skip s[i-1]
            if (s[i-1] == t[j-1]) {
                dp[i][j] += dp[i-1][j-1]; // match s[i-1] with t[j-1]
            }
        }
    }
    
    return (int)dp[m][n];
}

int main() {
    cout << "numDistinct(\"rabbbit\", \"rabbit\") = " << numDistinct("rabbbit", "rabbit") << endl;
    // Output: 3
    
    cout << "numDistinct(\"babgbag\", \"bag\") = " << numDistinct("babgbag", "bag") << endl;
    // Output: 5
    
    return 0;
}
