/*
 * Problem: Stone Game III
 * Source:  LeetCode 1406 - https://leetcode.com/problems/stone-game-iii/
 * 
 * Approach: Suffix DP. dp[i] = max score difference the current player can achieve
 *           starting from index i. Player takes 1, 2, or 3 stones.
 *           dp[i] = max(sum(i..i+k) - dp[i+k+1]) for k in {0,1,2}.
 * Time Complexity:  O(n)
 * Space Complexity: O(n) — can be optimized to O(1)
 * 
 * Tags: game-theory, dynamic-programming, minimax
 */

#include <bits/stdc++.h>
using namespace std;

string stoneGameIII(vector<int>& stoneValue) {
    int n = stoneValue.size();
    // dp[i] = max score difference current player can achieve from index i
    vector<int> dp(n + 1, 0);
    
    for (int i = n - 1; i >= 0; i--) {
        dp[i] = INT_MIN;
        int take = 0;
        for (int k = 0; k < 3 && i + k < n; k++) {
            take += stoneValue[i + k];
            dp[i] = max(dp[i], take - dp[i + k + 1]);
        }
    }
    
    if (dp[0] > 0) return "Alice";
    if (dp[0] < 0) return "Bob";
    return "Tie";
}

int main() {
    vector<int> stones1 = {1, 2, 3, 7};
    cout << stoneGameIII(stones1) << endl; // Output: Bob
    
    vector<int> stones2 = {1, 2, 3, -9};
    cout << stoneGameIII(stones2) << endl; // Output: Alice
    
    vector<int> stones3 = {1, 2, 3, 6};
    cout << stoneGameIII(stones3) << endl; // Output: Tie
    
    return 0;
}
