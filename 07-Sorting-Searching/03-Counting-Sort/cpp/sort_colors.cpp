/*
 * Problem: Sort Colors (Dutch National Flag)
 * Source:  LeetCode 75
 * Approach: Three-pointer partition (0s, 1s, 2s).
 * Time: O(n), Space: O(1)
 * Tags: counting-sort, three-pointer
 */
#include <bits/stdc++.h>
using namespace std;

void sortColors(vector<int>& nums) {
    int lo = 0, mid = 0, hi = nums.size() - 1;
    while (mid <= hi) {
        if (nums[mid] == 0) swap(nums[lo++], nums[mid++]);
        else if (nums[mid] == 1) mid++;
        else swap(nums[mid], nums[hi--]);
    }
}

int main() {
    vector<int> nums = {2, 0, 2, 1, 1, 0};
    sortColors(nums);
    for (int x : nums) cout << x << " "; // 0 0 1 1 2 2
    cout << endl;
    return 0;
}
