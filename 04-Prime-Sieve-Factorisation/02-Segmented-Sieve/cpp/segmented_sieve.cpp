/*
 * Problem: Segmented Sieve - Primes in Range [L, R]
 * Source:  SPOJ PRIME1 - https://www.spoj.com/problems/PRIME1/
 * 
 * Approach: Sieve small primes up to √R, then use them to mark composites in [L, R].
 * Time Complexity:  O((R-L+1) * log(log R) + √R * log(log √R))
 * Tags: segmented-sieve, prime
 */

#include <bits/stdc++.h>
using namespace std;
typedef long long ll;

vector<ll> segmentedSieve(ll L, ll R) {
    ll sqrtR = (ll)sqrt((double)R) + 1;
    
    // Step 1: Get small primes up to √R
    vector<bool> smallSieve(sqrtR + 1, true);
    smallSieve[0] = smallSieve[1] = false;
    for (ll i = 2; i * i <= sqrtR; i++)
        if (smallSieve[i])
            for (ll j = i * i; j <= sqrtR; j += i)
                smallSieve[j] = false;
    
    // Step 2: Mark composites in [L, R]
    vector<bool> isPrime(R - L + 1, true);
    if (L <= 1) isPrime[1 - L] = false; // 1 is not prime
    
    for (ll i = 2; i <= sqrtR; i++) {
        if (!smallSieve[i]) continue;
        ll start = max(i * i, ((L + i - 1) / i) * i);
        for (ll j = start; j <= R; j += i)
            isPrime[j - L] = false;
    }
    
    vector<ll> primes;
    for (ll i = max(2LL, L); i <= R; i++)
        if (isPrime[i - L])
            primes.push_back(i);
    
    return primes;
}

int main() {
    auto primes = segmentedSieve(10, 50);
    cout << "Primes in [10, 50]: ";
    for (ll p : primes) cout << p << " ";
    cout << endl;
    // Output: 11 13 17 19 23 29 31 37 41 43 47
    return 0;
}
