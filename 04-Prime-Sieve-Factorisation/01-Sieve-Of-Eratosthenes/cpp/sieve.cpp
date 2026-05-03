/*
 * Problem: Sieve of Eratosthenes - Count Primes
 * Source:  LeetCode 204 - https://leetcode.com/problems/count-primes/
 * 
 * Approach: Mark all multiples of each prime starting from i*i.
 * Time Complexity:  O(n log log n)
 * Space Complexity: O(n)
 * Tags: sieve, prime
 */

#include <bits/stdc++.h>
using namespace std;

int countPrimes(int n) {
    if (n <= 2) return 0;
    vector<bool> isPrime(n, true);
    isPrime[0] = isPrime[1] = false;
    
    for (int i = 2; i * i < n; i++) {
        if (isPrime[i]) {
            for (int j = i * i; j < n; j += i)
                isPrime[j] = false;
        }
    }
    
    return count(isPrime.begin(), isPrime.end(), true);
}

int main() {
    cout << "Primes < 10: " << countPrimes(10) << endl;    // 4
    cout << "Primes < 100: " << countPrimes(100) << endl;  // 25
    cout << "Primes < 1000: " << countPrimes(1000) << endl; // 168
    return 0;
}
