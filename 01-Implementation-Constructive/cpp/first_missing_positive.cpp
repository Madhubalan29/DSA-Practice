/*
 * Problem: First Missing Positive
 * Source:  LeetCode 41 - https://leetcode.com/problems/first-missing-positive/
 * 
 * Approach: In-place cyclic sort — place each number nums[i] at index nums[i]-1.
 *           Then scan to find the first index where nums[i] != i+1.
 * Time Complexity:  O(n)
 * Space Complexity: O(1)
 * 
 * Tags: implementation, constructive, in-place-hashing
 */

#include <bits/stdc++.h>
using namespace std;

int firstMissingPositive(vector<int>& nums) {
    int n = nums.size();
    
    // Place each number in its correct position
    for (int i = 0; i < n; i++) {
        while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] != nums[i]) {
            swap(nums[i], nums[nums[i] - 1]);
        }
    }
    
    // Find the first missing positive
    for (int i = 0; i < n; i++) {
        if (nums[i] != i + 1) return i + 1;
    }
    
    return n + 1;
}

int main() {
    vector<int> nums = {3, 4, -1, 1};
    cout << "First Missing Positive: " << firstMissingPositive(nums) << endl;
    // Output: 2
    
    vector<int> nums2 = {7, 8, 9, 11, 12};
    cout << "First Missing Positive: " << firstMissingPositive(nums2) << endl;
    // Output: 1
    
    return 0;
}
