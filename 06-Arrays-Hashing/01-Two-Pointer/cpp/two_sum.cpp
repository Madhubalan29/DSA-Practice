/*
 * Problem: Two Sum
 * Source:  LeetCode 1 - https://leetcode.com/problems/two-sum/
 * 
 * Approach: Use hash map to find complement in O(1).
 * Time Complexity:  O(n)
 * Space Complexity: O(n)
 * Tags: two-pointer, hashing
 */

#include <bits/stdc++.h>
using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> mp;
    for (int i = 0; i < nums.size(); i++) {
        int complement = target - nums[i];
        if (mp.count(complement))
            return {mp[complement], i};
        mp[nums[i]] = i;
    }
    return {};
}

int main() {
    vector<int> nums = {2, 7, 11, 15};
    auto result = twoSum(nums, 9);
    cout << "Indices: " << result[0] << ", " << result[1] << endl; // 0, 1
    return 0;
}
