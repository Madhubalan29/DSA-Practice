/*
 * Problem: Generate Parentheses
 * Source:  LeetCode 22
 * Approach: Backtracking. At each step, add '(' if open < n, add ')' if close < open.
 * Time: O(4^n / √n) (Catalan number), Space: O(n)
 * Tags: recursion, backtracking
 */
#include <bits/stdc++.h>
using namespace std;

void backtrack(string& cur, int open, int close, int n, vector<string>& result) {
    if (cur.size() == 2 * n) { result.push_back(cur); return; }
    if (open < n) { cur.push_back('('); backtrack(cur, open + 1, close, n, result); cur.pop_back(); }
    if (close < open) { cur.push_back(')'); backtrack(cur, open, close + 1, n, result); cur.pop_back(); }
}

vector<string> generateParenthesis(int n) {
    vector<string> result;
    string cur;
    backtrack(cur, 0, 0, n, result);
    return result;
}

int main() {
    for (auto& s : generateParenthesis(3)) cout << s << endl;
    return 0;
}
