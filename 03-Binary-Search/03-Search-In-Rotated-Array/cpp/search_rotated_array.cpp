/*
 * Problem: Search in Rotated Sorted Array
 * Source:  LeetCode 33 - https://leetcode.com/problems/search-in-rotated-sorted-array/
 * 
 * Approach: Modified binary search. Identify which half is sorted,
 *           then decide which half to search in.
 * Time Complexity:  O(log n)
 * Space Complexity: O(1)
 * Tags: binary-search, rotated-array
 */

#include <bits/stdc++.h>
using namespace std;

int search(vector<int>& nums, int target) {
    int lo = 0, hi = nums.size() - 1;
    
    while (lo <= hi) {
        int mid = lo + (hi - lo) / 2;
        
        if (nums[mid] == target) return mid;
        
        // Left half is sorted
        if (nums[lo] <= nums[mid]) {
            if (target >= nums[lo] && target < nums[mid])
                hi = mid - 1;
            else
                lo = mid + 1;
        }
        // Right half is sorted
        else {
            if (target > nums[mid] && target <= nums[hi])
                lo = mid + 1;
            else
                hi = mid - 1;
        }
    }
    
    return -1;
}

int main() {
    vector<int> nums = {4, 5, 6, 7, 0, 1, 2};
    cout << "Index of 0: " << search(nums, 0) << endl;  // 4
    cout << "Index of 3: " << search(nums, 3) << endl;  // -1
    return 0;
}
