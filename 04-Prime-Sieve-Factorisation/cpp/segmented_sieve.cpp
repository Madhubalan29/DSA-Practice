/*
 * Problem: Segmented Sieve — Primes in Range [L, R]
 * Source:  SPOJ PRIME1 - https://www.spoj.com/problems/PRIME1/
 *          Also: Codeforces 776B - https://codeforces.com/problemset/problem/776/B
 * 
 * Approach: Generate primes up to sqrt(R) using standard sieve.
 *           Use these primes to mark composites in [L, R] (segmented sieve).
 * Time Complexity:  O((R-L+1) * log(log(R)) + sqrt(R))
 * Space Complexity: O(sqrt(R) + (R - L + 1))
 * 
 * Tags: sieve, segmented-sieve, prime, number-theory
 */

#include <bits/stdc++.h>
using namespace std;

vector<long long> segmentedSieve(long long L, long long R) {
    // Step 1: Generate small primes up to sqrt(R)
    int limit = (int)sqrt((double)R) + 1;
    vector<bool> smallSieve(limit + 1, true);
    smallSieve[0] = smallSieve[1] = false;
    for (int i = 2; i * i <= limit; i++) {
        if (smallSieve[i]) {
            for (int j = i * i; j <= limit; j += i)
                smallSieve[j] = false;
        }
    }
    
    vector<int> smallPrimes;
    for (int i = 2; i <= limit; i++) {
        if (smallSieve[i]) smallPrimes.push_back(i);
    }
    
    // Step 2: Segmented sieve for [L, R]
    int rangeSize = R - L + 1;
    vector<bool> isPrime(rangeSize, true);
    
    if (L == 0) isPrime[0] = false;
    if (L <= 1 && 1 <= R) isPrime[1 - L] = false;
    
    for (int p : smallPrimes) {
        long long start = max((long long)p * p, ((L + p - 1) / p) * p);
        for (long long j = start; j <= R; j += p) {
            isPrime[j - L] = false;
        }
    }
    
    vector<long long> primes;
    for (int i = 0; i < rangeSize; i++) {
        if (isPrime[i]) primes.push_back(L + i);
    }
    
    return primes;
}

int main() {
    long long L, R;
    int T;
    cin >> T;
    while (T--) {
        cin >> L >> R;
        vector<long long> primes = segmentedSieve(L, R);
        for (long long p : primes) {
            cout << p << "\n";
        }
        cout << "\n";
    }
    
    return 0;
}
