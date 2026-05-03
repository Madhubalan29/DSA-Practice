/*
 * Problem: Binary Exponentiation (Modular Power)
 * Source:  CSES / CP-Algorithms
 * 
 * Approach: Compute (base^exp) % mod using repeated squaring.
 *           If exp is odd, multiply result by base. Square base and halve exp.
 * Time Complexity:  O(log exp)
 * Space Complexity: O(1)
 * 
 * Tags: number-theory, math, modular-arithmetic
 */

#include <bits/stdc++.h>
using namespace std;
typedef long long ll;

ll power(ll base, ll exp, ll mod) {
    ll result = 1;
    base %= mod;
    while (exp > 0) {
        if (exp & 1)
            result = result * base % mod;
        base = base * base % mod;
        exp >>= 1;
    }
    return result;
}

// Modular Inverse using Fermat's Little Theorem (mod must be prime)
ll modInverse(ll a, ll mod) {
    return power(a, mod - 2, mod);
}

int main() {
    ll MOD = 1e9 + 7;
    
    cout << "2^10 mod 1e9+7 = " << power(2, 10, MOD) << endl;       // 1024
    cout << "2^32 mod 1e9+7 = " << power(2, 32, MOD) << endl;       // 4294967296 % MOD
    cout << "Inverse of 2 mod 1e9+7 = " << modInverse(2, MOD) << endl; // 500000004
    
    // Verify: 2 * inverse(2) ≡ 1 (mod MOD)
    cout << "2 * inv(2) mod MOD = " << (2LL * modInverse(2, MOD)) % MOD << endl; // 1
    
    return 0;
}
