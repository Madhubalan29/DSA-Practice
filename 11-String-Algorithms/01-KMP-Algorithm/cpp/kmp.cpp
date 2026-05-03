/*
 * Problem: KMP Pattern Matching (strStr)
 * Source:  LeetCode 28
 * Approach: Build LPS (failure function), then match using it.
 * Time: O(n + m), Space: O(m)
 * Tags: kmp, string-matching
 */
#include <bits/stdc++.h>
using namespace std;

vector<int> buildLPS(string& pattern) {
    int m = pattern.size();
    vector<int> lps(m, 0);
    int len = 0, i = 1;
    while (i < m) {
        if (pattern[i] == pattern[len]) { lps[i++] = ++len; }
        else if (len) len = lps[len - 1];
        else lps[i++] = 0;
    }
    return lps;
}

int kmpSearch(string& text, string& pattern) {
    auto lps = buildLPS(pattern);
    int i = 0, j = 0;
    while (i < text.size()) {
        if (text[i] == pattern[j]) { i++; j++; }
        if (j == pattern.size()) return i - j;
        else if (i < text.size() && text[i] != pattern[j]) {
            if (j) j = lps[j - 1];
            else i++;
        }
    }
    return -1;
}

int main() {
    string text = "aaaxaaaa", pattern = "aaaa";
    cout << "Pattern found at index: " << kmpSearch(text, pattern) << endl; // 4
    return 0;
}
