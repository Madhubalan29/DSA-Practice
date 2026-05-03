/*
 * Problem: Segmented Sieve - Primes in Range [L, R]
 * Source:  SPOJ PRIME1
 * Tags: segmented-sieve, prime
 */

import java.util.*;

public class SegmentedSieve {
    public static List<Long> segmentedSieve(long L, long R) {
        long sqrtR = (long) Math.sqrt(R) + 1;
        boolean[] smallSieve = new boolean[(int) sqrtR + 1];
        Arrays.fill(smallSieve, true);
        smallSieve[0] = smallSieve[1] = false;
        for (long i = 2; i * i <= sqrtR; i++)
            if (smallSieve[(int) i])
                for (long j = i * i; j <= sqrtR; j += i)
                    smallSieve[(int) j] = false;
        
        boolean[] isPrime = new boolean[(int)(R - L + 1)];
        Arrays.fill(isPrime, true);
        if (L <= 1) isPrime[(int)(1 - L)] = false;
        
        for (long i = 2; i <= sqrtR; i++) {
            if (!smallSieve[(int) i]) continue;
            long start = Math.max(i * i, ((L + i - 1) / i) * i);
            for (long j = start; j <= R; j += i)
                isPrime[(int)(j - L)] = false;
        }
        
        List<Long> primes = new ArrayList<>();
        for (long i = Math.max(2L, L); i <= R; i++)
            if (isPrime[(int)(i - L)]) primes.add(i);
        return primes;
    }
    
    public static void main(String[] args) {
        System.out.println("Primes in [10,50]: " + segmentedSieve(10, 50));
    }
}
