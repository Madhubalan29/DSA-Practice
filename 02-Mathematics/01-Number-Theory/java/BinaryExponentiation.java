/*
 * Problem: Binary Exponentiation (Modular Power)
 * Source:  CSES / CP-Algorithms
 * 
 * Approach: Compute (base^exp) % mod using repeated squaring.
 * Time Complexity:  O(log exp)
 * Space Complexity: O(1)
 * 
 * Tags: number-theory, math, modular-arithmetic
 */

public class BinaryExponentiation {
    
    static final long MOD = (long) 1e9 + 7;
    
    static long power(long base, long exp, long mod) {
        long result = 1;
        base %= mod;
        while (exp > 0) {
            if ((exp & 1) == 1)
                result = result * base % mod;
            base = base * base % mod;
            exp >>= 1;
        }
        return result;
    }
    
    static long modInverse(long a, long mod) {
        return power(a, mod - 2, mod);
    }
    
    public static void main(String[] args) {
        System.out.println("2^10 mod 1e9+7 = " + power(2, 10, MOD));
        System.out.println("2^32 mod 1e9+7 = " + power(2, 32, MOD));
        System.out.println("Inverse of 2 mod 1e9+7 = " + modInverse(2, MOD));
        System.out.println("2 * inv(2) mod MOD = " + (2L * modInverse(2, MOD)) % MOD);
    }
}
