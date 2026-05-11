/*
 * Problem: Burst Balloons
 * Source:  LeetCode 312 - https://leetcode.com/problems/burst-balloons/
 * 
 * Approach: Interval DP — think of the LAST balloon to burst in interval [i, j].
 *           dp[i][j] = max coins from bursting all balloons between i and j (exclusive).
 *           For each k in (i, j), dp[i][j] = max(dp[i][k] + dp[k][j] + nums[i]*nums[k]*nums[j]).
 * Time Complexity:  O(n^3)
 * Space Complexity: O(n^2)
 * 
 * Tags: dynamic-programming, interval-dp
 */

#include <bits/stdc++.h>
using namespace std;

int maxCoins(vector<int>& nums) {
    int n = nums.size();
    // Add virtual balloons with value 1 at both ends
    vector<int> val(n + 2, 1);
    for (int i = 0; i < n; i++) val[i + 1] = nums[i];
    
    int total = n + 2;
    vector<vector<int>> dp(total, vector<int>(total, 0));
    
    // len is the gap between i and j
    for (int len = 2; len < total; len++) {
        for (int i = 0; i + len < total; i++) {
            int j = i + len;
            for (int k = i + 1; k < j; k++) {
                dp[i][j] = max(dp[i][j],
                    dp[i][k] + dp[k][j] + val[i] * val[k] * val[j]);
            }
        }
    }
    
    return dp[0][total - 1];
}

int main() {
    vector<int> nums = {3, 1, 5, 8};
    cout << "Max coins: " << maxCoins(nums) << endl;
    // Output: 167
    
    return 0;
}
