/*
 * Problem: Suffix Array Construction
 * Source:  CP-Algorithms
 * Time: O(n log² n), Space: O(n)
 * Tags: suffix-array, string
 */
#include <bits/stdc++.h>
using namespace std;

vector<int> buildSuffixArray(string& s) {
    int n = s.size();
    vector<int> sa(n), rank_(n), tmp(n);
    iota(sa.begin(), sa.end(), 0);
    for (int i = 0; i < n; i++) rank_[i] = s[i];
    
    for (int k = 1; k < n; k <<= 1) {
        auto cmp = [&](int a, int b) {
            if (rank_[a] != rank_[b]) return rank_[a] < rank_[b];
            int ra = a + k < n ? rank_[a + k] : -1;
            int rb = b + k < n ? rank_[b + k] : -1;
            return ra < rb;
        };
        sort(sa.begin(), sa.end(), cmp);
        tmp[sa[0]] = 0;
        for (int i = 1; i < n; i++)
            tmp[sa[i]] = tmp[sa[i - 1]] + (cmp(sa[i - 1], sa[i]) ? 1 : 0);
        rank_ = tmp;
    }
    return sa;
}

int main() {
    string s = "banana";
    auto sa = buildSuffixArray(s);
    cout << "Suffix Array of '" << s << "':" << endl;
    for (int i : sa) cout << i << ": " << s.substr(i) << endl;
    return 0;
}
