/*
 * Problem: Kth Largest Element (QuickSelect)
 * Source:  LeetCode 215
 * Approach: Randomized QuickSelect. Partition around random pivot.
 * Time: O(n) average, O(n²) worst.  Space: O(1)
 * Tags: quick-sort, quickselect
 */
#include <bits/stdc++.h>
using namespace std;

int partition(vector<int>& nums, int lo, int hi) {
    int pivot = nums[hi], i = lo;
    for (int j = lo; j < hi; j++)
        if (nums[j] >= pivot) swap(nums[i++], nums[j]);
    swap(nums[i], nums[hi]);
    return i;
}

int findKthLargest(vector<int>& nums, int k) {
    int lo = 0, hi = nums.size() - 1;
    k--; // convert to 0-indexed
    while (lo <= hi) {
        int pivotIndex = partition(nums, lo, hi);
        if (pivotIndex == k) return nums[pivotIndex];
        else if (pivotIndex < k) lo = pivotIndex + 1;
        else hi = pivotIndex - 1;
    }
    return -1;
}

int main() {
    vector<int> nums = {3, 2, 1, 5, 6, 4};
    cout << "2nd largest: " << findKthLargest(nums, 2) << endl; // 5
    return 0;
}
