/*
 * Problem: Sliding Window Maximum
 * Source:  LeetCode 239 - https://leetcode.com/problems/sliding-window-maximum/
 * 
 * Approach: Maintain a monotonic decreasing deque of indices. The front always
 *           holds the max of the current window. Remove out-of-window and
 *           smaller elements.
 * Time Complexity:  O(n)
 * Space Complexity: O(k)
 * 
 * Tags: arrays, sliding-window, monotonic-deque
 */

#include <bits/stdc++.h>
using namespace std;

vector<int> maxSlidingWindow(vector<int>& nums, int k) {
    deque<int> dq; // stores indices
    vector<int> result;
    
    for (int i = 0; i < (int)nums.size(); i++) {
        // Remove elements outside the window
        if (!dq.empty() && dq.front() < i - k + 1) {
            dq.pop_front();
        }
        
        // Remove smaller elements from the back
        while (!dq.empty() && nums[dq.back()] <= nums[i]) {
            dq.pop_back();
        }
        
        dq.push_back(i);
        
        // Start recording results once the first window is complete
        if (i >= k - 1) {
            result.push_back(nums[dq.front()]);
        }
    }
    
    return result;
}

int main() {
    vector<int> nums = {1, 3, -1, -3, 5, 3, 6, 7};
    int k = 3;
    
    vector<int> result = maxSlidingWindow(nums, k);
    cout << "Sliding Window Maximum: ";
    for (int x : result) cout << x << " ";
    cout << endl;
    // Output: 3 3 5 5 6 7
    
    return 0;
}
