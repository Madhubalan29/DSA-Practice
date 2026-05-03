# Prime, Sieve & Prime Factorisation

## 🎯 Key Algorithms

### 1. Sieve of Eratosthenes — O(n log log n)
Find all primes up to N.
```cpp
vector<bool> sieve(N + 1, true);
sieve[0] = sieve[1] = false;
for (int i = 2; i * i <= N; i++) {
    if (sieve[i]) {
        for (int j = i * i; j <= N; j += i)
            sieve[j] = false;
    }
}
```

### 2. Segmented Sieve
Find primes in range [L, R] where R can be up to 10^12.
- First sieve primes up to √R
- Use those to mark composites in [L, R]

### 3. Smallest Prime Factor (SPF) Sieve
Useful for **fast prime factorization** of any number ≤ N.
```cpp
vector<int> spf(N + 1);
iota(spf.begin(), spf.end(), 0);
for (int i = 2; i * i <= N; i++) {
    if (spf[i] == i) { // i is prime
        for (int j = i * i; j <= N; j += i)
            if (spf[j] == j) spf[j] = i;
    }
}
```

## 💡 Tips
- Use SPF sieve when you need to factorize **many** numbers
- Sieve of Eratosthenes works up to ~10^7 comfortably
- For single number primality, trial division O(√n) is enough

## 📚 Big Company Problems
- Count primes (LeetCode 204)
- Prime factorization queries
- GCD / LCM using factorization
