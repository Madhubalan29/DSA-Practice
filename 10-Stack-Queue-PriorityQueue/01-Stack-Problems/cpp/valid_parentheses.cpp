/*
 * Problem: Valid Parentheses
 * Source:  LeetCode 20
 * Time: O(n), Space: O(n)
 * Tags: stack
 */
#include <bits/stdc++.h>
using namespace std;

bool isValid(string s) {
    stack<char> st;
    for (char c : s) {
        if (c == '(' || c == '{' || c == '[') st.push(c);
        else {
            if (st.empty()) return false;
            char top = st.top(); st.pop();
            if ((c == ')' && top != '(') || (c == '}' && top != '{') || (c == ']' && top != '['))
                return false;
        }
    }
    return st.empty();
}

int main() {
    cout << boolalpha;
    cout << isValid("()[]{}") << endl;  // true
    cout << isValid("(]") << endl;       // false
    cout << isValid("{[]}") << endl;     // true
    return 0;
}
