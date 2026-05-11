/*
 * Problem: Trapping Rain Water
 * Source:  LeetCode 42 - https://leetcode.com/problems/trapping-rain-water/
 * 
 * Approach: Two-pointer technique — maintain left_max and right_max.
 *           Water at each position = min(left_max, right_max) - height[i].
 * Time Complexity:  O(n)
 * Space Complexity: O(1)
 * 
 * Tags: stack, two-pointers, arrays
 */

#include <bits/stdc++.h>
using namespace std;

int trap(vector<int>& height) {
    int left = 0, right = height.size() - 1;
    int leftMax = 0, rightMax = 0;
    int water = 0;
    
    while (left < right) {
        if (height[left] < height[right]) {
            leftMax = max(leftMax, height[left]);
            water += leftMax - height[left];
            left++;
        } else {
            rightMax = max(rightMax, height[right]);
            water += rightMax - height[right];
            right--;
        }
    }
    
    return water;
}

int main() {
    vector<int> height = {0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1};
    cout << "Trapped water: " << trap(height) << endl;
    // Output: 6
    
    return 0;
}
