/*
 * Problem: Median of Two Sorted Arrays
 * Source:  LeetCode 4 - https://leetcode.com/problems/median-of-two-sorted-arrays/
 * 
 * Approach: Binary search on the smaller array to find the correct partition.
 *           Ensure left-half max <= right-half min for both arrays.
 * Time Complexity:  O(log(min(m, n)))
 * Space Complexity: O(1)
 * 
 * Tags: binary-search, divide-and-conquer, arrays
 */

#include <bits/stdc++.h>
using namespace std;

double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
    if (nums1.size() > nums2.size()) swap(nums1, nums2);
    
    int m = nums1.size(), n = nums2.size();
    int lo = 0, hi = m;
    
    while (lo <= hi) {
        int i = (lo + hi) / 2;       // partition in nums1
        int j = (m + n + 1) / 2 - i; // partition in nums2
        
        int maxLeft1 = (i == 0) ? INT_MIN : nums1[i - 1];
        int minRight1 = (i == m) ? INT_MAX : nums1[i];
        int maxLeft2 = (j == 0) ? INT_MIN : nums2[j - 1];
        int minRight2 = (j == n) ? INT_MAX : nums2[j];
        
        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            // Found the correct partition
            if ((m + n) % 2 == 0) {
                return (max(maxLeft1, maxLeft2) + min(minRight1, minRight2)) / 2.0;
            } else {
                return max(maxLeft1, maxLeft2);
            }
        } else if (maxLeft1 > minRight2) {
            hi = i - 1;
        } else {
            lo = i + 1;
        }
    }
    
    return 0.0; // should never reach here
}

int main() {
    vector<int> nums1 = {1, 3};
    vector<int> nums2 = {2};
    cout << "Median: " << findMedianSortedArrays(nums1, nums2) << endl;
    // Output: 2.0
    
    vector<int> a = {1, 2};
    vector<int> b = {3, 4};
    cout << "Median: " << findMedianSortedArrays(a, b) << endl;
    // Output: 2.5
    
    return 0;
}
