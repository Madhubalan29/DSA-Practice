/*
 * Problem: Count of Smaller Numbers After Self
 * Source:  LeetCode 315 - https://leetcode.com/problems/count-of-smaller-numbers-after-self/
 * 
 * Approach: Modified merge sort — during merge, count how many elements from
 *           the right half are smaller than each element in the left half.
 * Time Complexity:  O(n log n)
 * Space Complexity: O(n)
 * 
 * Tags: sorting, merge-sort, divide-and-conquer
 */

#include <bits/stdc++.h>
using namespace std;

vector<int> counts;

void mergeSort(vector<pair<int,int>>& arr, int lo, int hi) {
    if (lo >= hi) return;
    int mid = lo + (hi - lo) / 2;
    mergeSort(arr, lo, mid);
    mergeSort(arr, mid + 1, hi);
    
    // Count: for each element in left half, count elements in right half that are smaller
    int j = mid + 1;
    for (int i = lo; i <= mid; i++) {
        while (j <= hi && arr[j].first < arr[i].first) j++;
        counts[arr[i].second] += (j - mid - 1);
    }
    
    // Standard merge
    vector<pair<int,int>> temp;
    int i = lo;
    j = mid + 1;
    while (i <= mid && j <= hi) {
        if (arr[i].first <= arr[j].first) {
            temp.push_back(arr[i++]);
        } else {
            temp.push_back(arr[j++]);
        }
    }
    while (i <= mid) temp.push_back(arr[i++]);
    while (j <= hi) temp.push_back(arr[j++]);
    
    for (int k = lo; k <= hi; k++) arr[k] = temp[k - lo];
}

vector<int> countSmaller(vector<int>& nums) {
    int n = nums.size();
    counts.assign(n, 0);
    
    vector<pair<int,int>> arr(n);
    for (int i = 0; i < n; i++) arr[i] = {nums[i], i};
    
    mergeSort(arr, 0, n - 1);
    return counts;
}

int main() {
    vector<int> nums = {5, 2, 6, 1};
    vector<int> result = countSmaller(nums);
    
    cout << "Counts: ";
    for (int x : result) cout << x << " ";
    cout << endl;
    // Output: 2 1 1 0
    
    return 0;
}
