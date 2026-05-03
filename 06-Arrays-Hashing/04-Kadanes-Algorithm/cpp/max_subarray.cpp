/*
 * Problem: Maximum Subarray (Kadane's Algorithm)
 * Source:  LeetCode 53
 * Time: O(n), Space: O(1)
 * Tags: kadanes, dp, array
 */
#include <bits/stdc++.h>
using namespace std;

int maxSubArray(vector<int>& nums) {
    int maxSum = nums[0], curSum = nums[0];
    for (int i = 1; i < nums.size(); i++) {
        curSum = max(nums[i], curSum + nums[i]);
        maxSum = max(maxSum, curSum);
    }
    return maxSum;
}

int main() {
    vector<int> nums = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
    cout << "Max Subarray Sum: " << maxSubArray(nums) << endl; // 6
    return 0;
}
