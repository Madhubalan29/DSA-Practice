/*
 * Problem: Subarray Sum Equals K
 * Source:  LeetCode 560
 * Approach: Prefix sum + hashmap. Count prefix sums seen so far.
 * Time: O(n), Space: O(n)
 * Tags: prefix-sum, hashing
 */
#include <bits/stdc++.h>
using namespace std;

int subarraySum(vector<int>& nums, int k) {
    unordered_map<int, int> prefixCount;
    prefixCount[0] = 1;
    int sum = 0, count = 0;
    for (int x : nums) {
        sum += x;
        if (prefixCount.count(sum - k))
            count += prefixCount[sum - k];
        prefixCount[sum]++;
    }
    return count;
}

int main() {
    vector<int> nums = {1, 1, 1};
    cout << "Count (k=2): " << subarraySum(nums, 2) << endl; // 2
    vector<int> nums2 = {1, 2, 3};
    cout << "Count (k=3): " << subarraySum(nums2, 3) << endl; // 2
    return 0;
}
