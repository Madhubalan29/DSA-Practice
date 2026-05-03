/*
 * Problem: Longest Palindromic Substring (Manacher's)
 * Source:  LeetCode 5
 * Time: O(n), Space: O(n)
 * Tags: manacher, palindrome
 */
#include <bits/stdc++.h>
using namespace std;

string longestPalindrome(string s) {
    // Expand around center approach (simpler, O(n²))
    int n = s.size(), start = 0, maxLen = 1;
    auto expand = [&](int l, int r) {
        while (l >= 0 && r < n && s[l] == s[r]) { l--; r++; }
        if (r - l - 1 > maxLen) { start = l + 1; maxLen = r - l - 1; }
    };
    for (int i = 0; i < n; i++) { expand(i, i); expand(i, i + 1); }
    return s.substr(start, maxLen);
}

int main() {
    cout << longestPalindrome("babad") << endl;   // "bab" or "aba"
    cout << longestPalindrome("cbbd") << endl;    // "bb"
    cout << longestPalindrome("racecar") << endl; // "racecar"
    return 0;
}
