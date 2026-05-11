/*
 * Problem: Minimum Number of Operations to Make Array Continuous
 * Source:  LeetCode 2009 - https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/
 * 
 * Approach: Sort + deduplicate. For each possible start value nums[i],
 *           binary search/sliding window for how many unique values fall in
 *           [nums[i], nums[i] + n - 1]. Answer = n - max_count.
 * Time Complexity:  O(n log n)
 * Space Complexity: O(n)
 * 
 * Tags: bit-manipulation, sliding-window, sorting, binary-search
 */

#include <bits/stdc++.h>
using namespace std;

int minOperations(vector<int>& nums) {
    int n = nums.size();
    sort(nums.begin(), nums.end());
    nums.erase(unique(nums.begin(), nums.end()), nums.end());
    int m = nums.size();
    
    int result = n;
    int j = 0;
    
    for (int i = 0; i < m; i++) {
        // Window: [nums[i], nums[i] + n - 1]
        while (j < m && nums[j] <= nums[i] + n - 1) {
            j++;
        }
        int count = j - i; // unique elements in window
        result = min(result, n - count);
    }
    
    return result;
}

int main() {
    vector<int> nums = {4, 2, 5, 3};
    cout << "Min operations: " << minOperations(nums) << endl;
    // Output: 0 (already continuous [2,3,4,5])
    
    vector<int> nums2 = {1, 2, 3, 5, 6};
    cout << "Min operations: " << minOperations(nums2) << endl;
    // Output: 1
    
    return 0;
}
