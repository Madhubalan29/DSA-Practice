/*
 * Problem: Modular Arithmetic Operations
 * Source:  CP-Algorithms / CSES
 * 
 * Approach: Demonstrate all modular arithmetic operations:
 *           addition, subtraction, multiplication, division (via inverse),
 *           and nCr computation using factorials.
 * Time Complexity:  O(N) precomputation for factorials, O(1) per nCr query
 * Space Complexity: O(N)
 * 
 * Tags: modular-arithmetic, combinatorics, math
 */

#include <bits/stdc++.h>
using namespace std;
typedef long long ll;

const ll MOD = 1e9 + 7;
const int MAXN = 2e5 + 5;
ll fact[MAXN], inv_fact[MAXN];

ll power(ll base, ll exp, ll mod) {
    ll result = 1;
    base %= mod;
    while (exp > 0) {
        if (exp & 1) result = result * base % mod;
        base = base * base % mod;
        exp >>= 1;
    }
    return result;
}

void precompute() {
    fact[0] = 1;
    for (int i = 1; i < MAXN; i++)
        fact[i] = fact[i - 1] * i % MOD;
    
    inv_fact[MAXN - 1] = power(fact[MAXN - 1], MOD - 2, MOD);
    for (int i = MAXN - 2; i >= 0; i--)
        inv_fact[i] = inv_fact[i + 1] * (i + 1) % MOD;
}

ll nCr(int n, int r) {
    if (r < 0 || r > n) return 0;
    return fact[n] % MOD * inv_fact[r] % MOD * inv_fact[n - r] % MOD;
}

int main() {
    precompute();
    
    // Modular addition: (a + b) % MOD
    ll a = 1e18, b = 1e18;
    cout << "Mod Add: " << (a % MOD + b % MOD) % MOD << endl;
    
    // Modular subtraction: (a - b + MOD) % MOD
    cout << "Mod Sub: " << (a % MOD - b % MOD + MOD) % MOD << endl;
    
    // nCr examples
    cout << "C(10, 3) = " << nCr(10, 3) << endl;  // 120
    cout << "C(20, 10) = " << nCr(20, 10) << endl; // 184756
    
    return 0;
}
