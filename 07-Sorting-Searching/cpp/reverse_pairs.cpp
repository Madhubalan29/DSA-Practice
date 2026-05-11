/*
 * Problem: Reverse Pairs
 * Source:  LeetCode 493 - https://leetcode.com/problems/reverse-pairs/
 * 
 * Approach: Modified merge sort — before merging, count pairs where
 *           nums[i] > 2 * nums[j] with i in left half, j in right half.
 * Time Complexity:  O(n log n)
 * Space Complexity: O(n)
 * 
 * Tags: sorting, merge-sort, divide-and-conquer
 */

#include <bits/stdc++.h>
using namespace std;

int mergeCount(vector<int>& nums, int lo, int hi) {
    if (lo >= hi) return 0;
    int mid = lo + (hi - lo) / 2;
    int count = mergeCount(nums, lo, mid) + mergeCount(nums, mid + 1, hi);
    
    // Count reverse pairs
    int j = mid + 1;
    for (int i = lo; i <= mid; i++) {
        while (j <= hi && (long long)nums[i] > 2LL * nums[j]) j++;
        count += (j - mid - 1);
    }
    
    // Standard merge
    vector<int> temp;
    int i = lo;
    j = mid + 1;
    while (i <= mid && j <= hi) {
        if (nums[i] <= nums[j]) temp.push_back(nums[i++]);
        else temp.push_back(nums[j++]);
    }
    while (i <= mid) temp.push_back(nums[i++]);
    while (j <= hi) temp.push_back(nums[j++]);
    
    for (int k = lo; k <= hi; k++) nums[k] = temp[k - lo];
    
    return count;
}

int reversePairs(vector<int>& nums) {
    return mergeCount(nums, 0, nums.size() - 1);
}

int main() {
    vector<int> nums = {1, 3, 2, 3, 1};
    cout << "Reverse pairs: " << reversePairs(nums) << endl;
    // Output: 2
    
    vector<int> nums2 = {2, 4, 3, 5, 1};
    cout << "Reverse pairs: " << reversePairs(nums2) << endl;
    // Output: 3
    
    return 0;
}
