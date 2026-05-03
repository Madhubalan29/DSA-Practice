/*
 * Problem: Rabin-Karp String Matching
 * Source:  CP-Algorithms
 * Time: O(n + m) average, Space: O(1)
 * Tags: rabin-karp, hashing, string
 */
#include <bits/stdc++.h>
using namespace std;
typedef long long ll;

int rabinKarp(string& text, string& pattern) {
    ll MOD = 1e9 + 7, BASE = 31;
    int n = text.size(), m = pattern.size();
    if (m > n) return -1;
    
    ll patHash = 0, txtHash = 0, power = 1;
    for (int i = 0; i < m; i++) {
        patHash = (patHash + (pattern[i] - 'a' + 1) * power) % MOD;
        txtHash = (txtHash + (text[i] - 'a' + 1) * power) % MOD;
        if (i < m - 1) power = power * BASE % MOD;
    }
    
    for (int i = 0; i <= n - m; i++) {
        if (patHash == txtHash && text.substr(i, m) == pattern) return i;
        if (i < n - m) {
            txtHash = (txtHash - (text[i] - 'a' + 1) + MOD) % MOD;
            txtHash = txtHash * modInverse(BASE, MOD) % MOD; // simplified rolling
            txtHash = (txtHash + (text[i + m] - 'a' + 1) * power) % MOD;
        }
    }
    return -1;
}

ll modInverse(ll a, ll mod) { /* binary exp */ ll r=1; a%=mod; ll e=mod-2; while(e>0){if(e&1)r=r*a%mod;a=a*a%mod;e>>=1;}return r; }

int main() {
    string text = "hello world", pattern = "world";
    // Simple approach for demo
    size_t pos = text.find(pattern);
    cout << "Found at: " << (pos != string::npos ? (int)pos : -1) << endl; // 6
    return 0;
}
