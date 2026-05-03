# Mathematics for CP & Interviews

## 🎯 Sub-Topics

### 1. Number Theory
- Primality testing (O(√n))
- Prime factorization
- Euler's Totient Function φ(n)
- Divisor functions

### 2. Modular Arithmetic
- `(a + b) % m = ((a % m) + (b % m)) % m`
- `(a * b) % m = ((a % m) * (b % m)) % m`
- **Modular Inverse**: `a^(-1) mod m = a^(m-2) mod m` (when m is prime — Fermat's Little Theorem)
- **Binary Exponentiation**: Compute `a^b mod m` in O(log b)

### 3. Combinatorics
- nCr using Pascal's triangle
- nCr mod p using Lucas' theorem
- Catalan numbers
- Inclusion-Exclusion principle

### 4. GCD / LCM / Extended Euclidean
- `gcd(a, b) = gcd(b, a % b)` — Euclidean algorithm
- `lcm(a, b) = (a / gcd(a, b)) * b`
- Extended GCD: Find x, y such that `ax + by = gcd(a, b)`

## 🔥 Must-Know Formulas
```
Binary Exponentiation:
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
```

## 📚 Big Company Problems
- Count primes (Sieve)
- Pow(x, n)
- Count trailing zeros in factorial
- GCD of array
