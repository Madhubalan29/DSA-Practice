/*
 * Problem: Count of Range Sum
 * Source:  LeetCode 327 - https://leetcode.com/problems/count-of-range-sum/
 * 
 * Approach: Compute prefix sums. Use modified merge sort on prefix sums.
 *           During merge, for each i in left half, count j in right half where
 *           lower <= prefix[j] - prefix[i] <= upper.
 * Time Complexity:  O(n log n)
 * Space Complexity: O(n)
 * 
 * Tags: segment-tree, merge-sort, prefix-sum
 */

#include <bits/stdc++.h>
using namespace std;

int countWhileMerge(vector<long long>& sums, int lo, int hi, int lower, int upper) {
    if (lo >= hi) return 0;
    int mid = lo + (hi - lo) / 2;
    int count = countWhileMerge(sums, lo, mid, lower, upper) 
              + countWhileMerge(sums, mid + 1, hi, lower, upper);
    
    // Count valid pairs
    int j1 = mid + 1, j2 = mid + 1;
    for (int i = lo; i <= mid; i++) {
        while (j1 <= hi && sums[j1] - sums[i] < lower) j1++;
        while (j2 <= hi && sums[j2] - sums[i] <= upper) j2++;
        count += (j2 - j1);
    }
    
    // Standard merge
    inplace_merge(sums.begin() + lo, sums.begin() + mid + 1, sums.begin() + hi + 1);
    
    return count;
}

int countRangeSum(vector<int>& nums, int lower, int upper) {
    int n = nums.size();
    vector<long long> sums(n + 1, 0);
    for (int i = 0; i < n; i++) sums[i + 1] = sums[i] + nums[i];
    
    return countWhileMerge(sums, 0, n, lower, upper);
}

int main() {
    vector<int> nums = {-2, 5, -1};
    int lower = -2, upper = 2;
    cout << "Count of range sum: " << countRangeSum(nums, lower, upper) << endl;
    // Output: 3 (ranges: [0,0]=-2, [2,2]=-1, [0,2]=2)
    
    return 0;
}
