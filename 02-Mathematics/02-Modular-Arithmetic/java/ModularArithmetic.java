/*
 * Problem: Modular Arithmetic & nCr
 * Source:  CP-Algorithms / CSES
 * Time Complexity:  O(N) precomputation, O(1) per query
 * Tags: modular-arithmetic, combinatorics
 */

public class ModularArithmetic {
    
    static final long MOD = (long) 1e9 + 7;
    static final int MAXN = 200005;
    static long[] fact = new long[MAXN];
    static long[] invFact = new long[MAXN];
    
    static long power(long base, long exp, long mod) {
        long result = 1;
        base %= mod;
        while (exp > 0) {
            if ((exp & 1) == 1) result = result * base % mod;
            base = base * base % mod;
            exp >>= 1;
        }
        return result;
    }
    
    static void precompute() {
        fact[0] = 1;
        for (int i = 1; i < MAXN; i++)
            fact[i] = fact[i - 1] * i % MOD;
        invFact[MAXN - 1] = power(fact[MAXN - 1], MOD - 2, MOD);
        for (int i = MAXN - 2; i >= 0; i--)
            invFact[i] = invFact[i + 1] * (i + 1) % MOD;
    }
    
    static long nCr(int n, int r) {
        if (r < 0 || r > n) return 0;
        return fact[n] % MOD * invFact[r] % MOD * invFact[n - r] % MOD;
    }
    
    public static void main(String[] args) {
        precompute();
        System.out.println("C(10,3) = " + nCr(10, 3));   // 120
        System.out.println("C(20,10) = " + nCr(20, 10)); // 184756
    }
}
