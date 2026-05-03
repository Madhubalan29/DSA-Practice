/*
 * Problem: Count Inversions using Merge Sort
 * Source:  GeeksForGeeks / Coding Ninjas
 * Approach: During merge step, count how many elements from right half
 *           are placed before elements from left half.
 * Time: O(n log n), Space: O(n)
 * Tags: merge-sort, divide-and-conquer
 */
#include <bits/stdc++.h>
using namespace std;
typedef long long ll;

ll mergeCount(vector<int>& arr, int l, int r) {
    if (l >= r) return 0;
    int mid = (l + r) / 2;
    ll cnt = mergeCount(arr, l, mid) + mergeCount(arr, mid + 1, r);
    
    vector<int> temp;
    int i = l, j = mid + 1;
    while (i <= mid && j <= r) {
        if (arr[i] <= arr[j]) temp.push_back(arr[i++]);
        else { temp.push_back(arr[j++]); cnt += (mid - i + 1); }
    }
    while (i <= mid) temp.push_back(arr[i++]);
    while (j <= r) temp.push_back(arr[j++]);
    for (int k = l; k <= r; k++) arr[k] = temp[k - l];
    return cnt;
}

int main() {
    vector<int> arr = {5, 3, 2, 4, 1};
    cout << "Inversions: " << mergeCount(arr, 0, arr.size() - 1) << endl; // 8
    return 0;
}
