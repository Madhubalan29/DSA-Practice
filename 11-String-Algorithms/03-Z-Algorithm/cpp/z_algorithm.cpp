/*
 * Problem: Z-Algorithm
 * Source:  CP-Algorithms
 * Z[i] = length of longest substring starting at i that matches prefix
 * Time: O(n), Space: O(n)
 * Tags: z-algorithm, string
 */
#include <bits/stdc++.h>
using namespace std;

vector<int> zFunction(string& s) {
    int n = s.size();
    vector<int> z(n, 0);
    int l = 0, r = 0;
    for (int i = 1; i < n; i++) {
        if (i < r) z[i] = min(r - i, z[i - l]);
        while (i + z[i] < n && s[z[i]] == s[i + z[i]]) z[i]++;
        if (i + z[i] > r) { l = i; r = i + z[i]; }
    }
    return z;
}

// Find pattern in text using Z-algorithm
int zSearch(string& text, string& pattern) {
    string combined = pattern + "$" + text;
    auto z = zFunction(combined);
    int m = pattern.size();
    for (int i = m + 1; i < combined.size(); i++)
        if (z[i] == m) return i - m - 1;
    return -1;
}

int main() {
    string text = "aabxaabxcaabxaabxay", pattern = "aabxaabxay";
    cout << "Found at: " << zSearch(text, pattern) << endl;
    return 0;
}
