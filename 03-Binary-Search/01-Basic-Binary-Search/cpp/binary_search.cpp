/*
 * Problem: Binary Search
 * Source:  LeetCode 704 - https://leetcode.com/problems/binary-search/
 * 
 * Approach: Standard binary search on sorted array.
 * Time Complexity:  O(log n)
 * Space Complexity: O(1)
 * Tags: binary-search
 */

#include <bits/stdc++.h>
using namespace std;

int binarySearch(vector<int>& nums, int target) {
    int lo = 0, hi = (int)nums.size() - 1;
    while (lo <= hi) {
        int mid = lo + (hi - lo) / 2;
        if (nums[(size_t)mid] == target) return mid;
        else if (nums[(size_t)mid] < target) lo = mid + 1;
        else hi = mid - 1;
    }
    return -1;
}

int main() {
    vector<int> nums = {-1, 0, 3, 5, 9, 12};
    cout << "Index of 9: " << binarySearch(nums, 9) << endl;   // 4
    cout << "Index of 2: " << binarySearch(nums, 2) << endl;   // -1
    return 0;
}
