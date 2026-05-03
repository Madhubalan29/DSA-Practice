/*
 * Problem: Subsets II (with duplicates)
 * Source:  LeetCode 90
 * Approach: Sort + backtracking. Skip duplicates at same level.
 * Time: O(n * 2^n), Space: O(n)
 * Tags: backtracking, subsets
 */
#include <bits/stdc++.h>
using namespace std;

void backtrack(vector<int>& nums, int start, vector<int>& cur, vector<vector<int>>& result) {
    result.push_back(cur);
    for (int i = start; i < nums.size(); i++) {
        if (i > start && nums[i] == nums[i - 1]) continue; // skip duplicates
        cur.push_back(nums[i]);
        backtrack(nums, i + 1, cur, result);
        cur.pop_back();
    }
}

int main() {
    vector<int> nums = {1, 2, 2};
    sort(nums.begin(), nums.end());
    vector<vector<int>> result;
    vector<int> cur;
    backtrack(nums, 0, cur, result);
    for (auto& s : result) { cout << "[ "; for (int x : s) cout << x << " "; cout << "]" << endl; }
    return 0;
}
