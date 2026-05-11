/*
 * Problem: Longest Valid Parentheses
 * Source:  LeetCode 32 - https://leetcode.com/problems/longest-valid-parentheses/
 * 
 * Approach: Stack-based with index tracking.
 * Time Complexity:  O(n)
 * Space Complexity: O(n)
 * 
 * Tags: string, stack, dynamic-programming
 */

import java.util.*;

public class LongestValidParentheses {
    
    public int longestValidParentheses(String s) {
        Deque<Integer> st = new ArrayDeque<>();
        st.push(-1);
        int maxLen = 0;
        
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == '(') {
                st.push(i);
            } else {
                st.pop();
                if (st.isEmpty()) {
                    st.push(i);
                } else {
                    maxLen = Math.max(maxLen, i - st.peek());
                }
            }
        }
        
        return maxLen;
    }
    
    public static void main(String[] args) {
        LongestValidParentheses sol = new LongestValidParentheses();
        System.out.println("\"(()\" -> " + sol.longestValidParentheses("(()")); // 2
        System.out.println("\")()())\" -> " + sol.longestValidParentheses(")()())")); // 4
    }
}
