/*
 * Problem: Permutations
 * Source:  LeetCode 46
 * Approach: Swap-based backtracking.
 * Time: O(n! * n), Space: O(n)
 * Tags: backtracking, permutations
 */
#include <bits/stdc++.h>
using namespace std;

void permute(vector<int>& nums, int idx, vector<vector<int>>& result) {
    if (idx == nums.size()) { result.push_back(nums); return; }
    for (int i = idx; i < nums.size(); i++) {
        swap(nums[idx], nums[i]);
        permute(nums, idx + 1, result);
        swap(nums[idx], nums[i]);
    }
}

int main() {
    vector<int> nums = {1, 2, 3};
    vector<vector<int>> result;
    permute(nums, 0, result);
    for (auto& p : result) { for (int x : p) cout << x << " "; cout << endl; }
    return 0;
}
