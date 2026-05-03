/*
 * Problem: Subsets (Power Set)
 * Source:  LeetCode 78 - https://leetcode.com/problems/subsets/
 * 
 * Approach: Use bitmask to generate all 2^n subsets.
 * Time Complexity:  O(n * 2^n)
 * Space Complexity: O(n * 2^n)
 * Tags: bit-manipulation, power-set
 */

#include <bits/stdc++.h>
using namespace std;

vector<vector<int>> subsets(vector<int>& nums) {
    int n = nums.size();
    vector<vector<int>> result;
    
    for (int mask = 0; mask < (1 << n); mask++) {
        vector<int> subset;
        for (int i = 0; i < n; i++) {
            if (mask & (1 << i))
                subset.push_back(nums[i]);
        }
        result.push_back(subset);
    }
    
    return result;
}

int main() {
    vector<int> nums = {1, 2, 3};
    auto result = subsets(nums);
    
    cout << "All subsets:" << endl;
    for (auto& s : result) {
        cout << "[ ";
        for (int x : s) cout << x << " ";
        cout << "]" << endl;
    }
    return 0;
}
