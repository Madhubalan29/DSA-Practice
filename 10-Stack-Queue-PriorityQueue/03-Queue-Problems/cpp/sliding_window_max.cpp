/*
 * Problem: Sliding Window Maximum
 * Source:  LeetCode 239
 * Approach: Monotonic deque. Keep indices of potential maximums.
 * Time: O(n), Space: O(k)
 * Tags: queue, monotonic-deque, sliding-window
 */
#include <bits/stdc++.h>
using namespace std;

vector<int> maxSlidingWindow(vector<int>& nums, int k) {
    deque<int> dq;
    vector<int> result;
    for (int i = 0; i < nums.size(); i++) {
        while (!dq.empty() && dq.front() < i - k + 1) dq.pop_front();
        while (!dq.empty() && nums[dq.back()] < nums[i]) dq.pop_back();
        dq.push_back(i);
        if (i >= k - 1) result.push_back(nums[dq.front()]);
    }
    return result;
}

int main() {
    vector<int> nums = {1,3,-1,-3,5,3,6,7};
    auto res = maxSlidingWindow(nums, 3);
    for (int x : res) cout << x << " "; // 3 3 5 5 6 7
    return 0;
}
