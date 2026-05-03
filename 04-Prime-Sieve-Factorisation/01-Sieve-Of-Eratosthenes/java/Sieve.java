/*
 * Problem: Count Primes (Sieve of Eratosthenes)
 * Source:  LeetCode 204
 * Tags: sieve, prime
 */

public class Sieve {
    public static int countPrimes(int n) {
        if (n <= 2) return 0;
        boolean[] isPrime = new boolean[n];
        java.util.Arrays.fill(isPrime, true);
        isPrime[0] = isPrime[1] = false;
        for (int i = 2; i * i < n; i++) {
            if (isPrime[i]) {
                for (int j = i * i; j < n; j += i)
                    isPrime[j] = false;
            }
        }
        int count = 0;
        for (boolean p : isPrime) if (p) count++;
        return count;
    }
    
    public static void main(String[] args) {
        System.out.println("Primes < 10: " + countPrimes(10));    // 4
        System.out.println("Primes < 100: " + countPrimes(100));  // 25
    }
}
