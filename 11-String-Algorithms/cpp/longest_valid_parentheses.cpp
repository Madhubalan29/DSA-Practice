/*
 * Problem: Longest Valid Parentheses
 * Source:  LeetCode 32 - https://leetcode.com/problems/longest-valid-parentheses/
 * 
 * Approach: Use a stack storing indices. Push -1 as base. On '(' push index.
 *           On ')' pop — if stack empty push current index as new base,
 *           else compute length = i - stack.top().
 * Time Complexity:  O(n)
 * Space Complexity: O(n)
 * 
 * Tags: string, stack, dynamic-programming
 */

#include <bits/stdc++.h>
using namespace std;

int longestValidParentheses(string s) {
    stack<int> st;
    st.push(-1); // base index
    int maxLen = 0;
    
    for (int i = 0; i < (int)s.size(); i++) {
        if (s[i] == '(') {
            st.push(i);
        } else {
            st.pop();
            if (st.empty()) {
                st.push(i); // new base
            } else {
                maxLen = max(maxLen, i - st.top());
            }
        }
    }
    
    return maxLen;
}

int main() {
    cout << "\"(()\" -> " << longestValidParentheses("(()") << endl;       // Output: 2
    cout << "\")()())\" -> " << longestValidParentheses(")()())") << endl; // Output: 4
    cout << "\"\" -> " << longestValidParentheses("") << endl;             // Output: 0
    
    return 0;
}
