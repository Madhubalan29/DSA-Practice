/*
 * Problem: Split Array Largest Sum
 * Source:  LeetCode 410 - https://leetcode.com/problems/split-array-largest-sum/
 * 
 * Approach: Binary search on the answer (the largest subarray sum).
 *           For a candidate answer, greedily check if we can split into <= k parts.
 * Time Complexity:  O(n * log(sum - max))
 * Space Complexity: O(1)
 * 
 * Tags: binary-search, binary-search-on-answer, greedy
 */

#include <bits/stdc++.h>
using namespace std;

bool canSplit(vector<int>& nums, int k, long long maxSum) {
    int count = 1;
    long long currentSum = 0;
    for (int num : nums) {
        if (currentSum + num > maxSum) {
            count++;
            currentSum = num;
            if (count > k) return false;
        } else {
            currentSum += num;
        }
    }
    return true;
}

int splitArray(vector<int>& nums, int k) {
    long long lo = *max_element(nums.begin(), nums.end());
    long long hi = accumulate(nums.begin(), nums.end(), 0LL);
    
    while (lo < hi) {
        long long mid = lo + (hi - lo) / 2;
        if (canSplit(nums, k, mid)) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    }
    
    return (int)lo;
}

int main() {
    vector<int> nums = {7, 2, 5, 10, 8};
    int k = 2;
    cout << "Minimized largest sum: " << splitArray(nums, k) << endl;
    // Output: 18  (split: [7,2,5] and [10,8])
    
    return 0;
}
