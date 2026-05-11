/*
 * Problem: Edit Distance
 * Source:  LeetCode 72 - https://leetcode.com/problems/edit-distance/
 * 
 * Approach: 2D DP where dp[i][j] = min operations to convert word1[0..i-1]
 *           to word2[0..j-1]. Three operations: insert, delete, replace.
 * Time Complexity:  O(m * n)
 * Space Complexity: O(m * n) — can be optimized to O(n)
 * 
 * Tags: dynamic-programming, string, edit-distance
 */

#include <bits/stdc++.h>
using namespace std;

int minDistance(string word1, string word2) {
    int m = word1.size(), n = word2.size();
    vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));
    
    // Base cases
    for (int i = 0; i <= m; i++) dp[i][0] = i; // delete all
    for (int j = 0; j <= n; j++) dp[0][j] = j; // insert all
    
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (word1[i-1] == word2[j-1]) {
                dp[i][j] = dp[i-1][j-1]; // no operation needed
            } else {
                dp[i][j] = 1 + min({
                    dp[i-1][j],   // delete from word1
                    dp[i][j-1],   // insert into word1
                    dp[i-1][j-1]  // replace
                });
            }
        }
    }
    
    return dp[m][n];
}

int main() {
    cout << "\"horse\" -> \"ros\": " << minDistance("horse", "ros") << endl;     // Output: 3
    cout << "\"intention\" -> \"execution\": " << minDistance("intention", "execution") << endl; // Output: 5
    
    return 0;
}
