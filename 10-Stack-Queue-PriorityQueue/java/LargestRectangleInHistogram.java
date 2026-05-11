/*
 * Problem: Largest Rectangle in Histogram
 * Source:  LeetCode 84 - https://leetcode.com/problems/largest-rectangle-in-histogram/
 * 
 * Approach: Monotonic increasing stack of indices.
 * Time Complexity:  O(n)
 * Space Complexity: O(n)
 * 
 * Tags: stack, monotonic-stack, histogram
 */

import java.util.*;

public class LargestRectangleInHistogram {
    
    public int largestRectangleArea(int[] heights) {
        Deque<Integer> st = new ArrayDeque<>();
        int maxArea = 0;
        int n = heights.length;
        
        for (int i = 0; i <= n; i++) {
            int currHeight = (i == n) ? 0 : heights[i];
            
            while (!st.isEmpty() && heights[st.peek()] > currHeight) {
                int h = heights[st.pop()];
                int width = st.isEmpty() ? i : (i - st.peek() - 1);
                maxArea = Math.max(maxArea, h * width);
            }
            
            st.push(i);
        }
        
        return maxArea;
    }
    
    public static void main(String[] args) {
        LargestRectangleInHistogram sol = new LargestRectangleInHistogram();
        System.out.println("Largest rectangle area: " + sol.largestRectangleArea(new int[]{2, 1, 5, 6, 2, 3}));
        // Output: 10
    }
}
