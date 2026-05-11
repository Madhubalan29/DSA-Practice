/*
 * Problem: Largest Rectangle in Histogram
 * Source:  LeetCode 84 - https://leetcode.com/problems/largest-rectangle-in-histogram/
 * 
 * Approach: Monotonic increasing stack of indices. When a shorter bar is found,
 *           pop and compute area using the popped bar as the shortest in range.
 * Time Complexity:  O(n)
 * Space Complexity: O(n)
 * 
 * Tags: stack, monotonic-stack, histogram
 */

#include <bits/stdc++.h>
using namespace std;

int largestRectangleArea(vector<int>& heights) {
    stack<int> st;
    int maxArea = 0;
    int n = heights.size();
    
    for (int i = 0; i <= n; i++) {
        int currHeight = (i == n) ? 0 : heights[i];
        
        while (!st.empty() && heights[st.top()] > currHeight) {
            int h = heights[st.top()];
            st.pop();
            int width = st.empty() ? i : (i - st.top() - 1);
            maxArea = max(maxArea, h * width);
        }
        
        st.push(i);
    }
    
    return maxArea;
}

int main() {
    vector<int> heights = {2, 1, 5, 6, 2, 3};
    cout << "Largest rectangle area: " << largestRectangleArea(heights) << endl;
    // Output: 10
    
    return 0;
}
