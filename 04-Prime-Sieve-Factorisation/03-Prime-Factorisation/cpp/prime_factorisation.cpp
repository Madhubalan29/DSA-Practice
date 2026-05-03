/*
 * Problem: Prime Factorisation using Smallest Prime Factor (SPF)
 * Source:  CP-Algorithms
 * 
 * Approach: Precompute SPF sieve, then factorize any number in O(log n).
 * Time Complexity:  O(n log log n) precompute, O(log n) per factorization
 * Tags: prime-factorisation, sieve
 */

#include <bits/stdc++.h>
using namespace std;

const int MAXN = 1e6 + 5;
int spf[MAXN]; // smallest prime factor

void buildSPF() {
    for (int i = 0; i < MAXN; i++) spf[i] = i;
    for (int i = 2; i * i < MAXN; i++) {
        if (spf[i] == i) { // i is prime
            for (int j = i * i; j < MAXN; j += i)
                if (spf[j] == j) spf[j] = i;
        }
    }
}

vector<pair<int, int>> factorize(int n) {
    vector<pair<int, int>> factors;
    while (n > 1) {
        int p = spf[n], cnt = 0;
        while (n % p == 0) { n /= p; cnt++; }
        factors.push_back({p, cnt});
    }
    return factors;
}

int main() {
    buildSPF();
    
    int n = 360; // 2^3 * 3^2 * 5
    cout << n << " = ";
    auto factors = factorize(n);
    for (auto& [p, c] : factors)
        cout << p << "^" << c << " ";
    cout << endl;
    // Output: 360 = 2^3 3^2 5^1
    
    return 0;
}
