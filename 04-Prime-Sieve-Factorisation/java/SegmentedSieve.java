/*
 * Problem: Segmented Sieve — Primes in Range [L, R]
 * Source:  SPOJ PRIME1 - https://www.spoj.com/problems/PRIME1/
 *          Also: Codeforces 776B - https://codeforces.com/problemset/problem/776/B
 * 
 * Approach: Generate primes up to sqrt(R) using standard sieve.
 *           Use these primes to mark composites in [L, R].
 * Time Complexity:  O((R-L+1) * log(log(R)) + sqrt(R))
 * Space Complexity: O(sqrt(R) + (R - L + 1))
 * 
 * Tags: sieve, segmented-sieve, prime, number-theory
 */

import java.util.*;
import java.io.*;

public class SegmentedSieve {
    
    static List<Long> segmentedSieve(long L, long R) {
        int limit = (int) Math.sqrt(R) + 1;
        boolean[] smallSieve = new boolean[limit + 1];
        Arrays.fill(smallSieve, true);
        smallSieve[0] = smallSieve[1] = false;
        
        for (int i = 2; i * i <= limit; i++) {
            if (smallSieve[i]) {
                for (int j = i * i; j <= limit; j += i)
                    smallSieve[j] = false;
            }
        }
        
        List<Integer> smallPrimes = new ArrayList<>();
        for (int i = 2; i <= limit; i++) {
            if (smallSieve[i]) smallPrimes.add(i);
        }
        
        int rangeSize = (int)(R - L + 1);
        boolean[] isPrime = new boolean[rangeSize];
        Arrays.fill(isPrime, true);
        
        if (L == 0) isPrime[0] = false;
        if (L <= 1 && 1 <= R) isPrime[(int)(1 - L)] = false;
        
        for (int p : smallPrimes) {
            long start = Math.max((long) p * p, ((L + p - 1) / p) * p);
            for (long j = start; j <= R; j += p) {
                isPrime[(int)(j - L)] = false;
            }
        }
        
        List<Long> primes = new ArrayList<>();
        for (int i = 0; i < rangeSize; i++) {
            if (isPrime[i]) primes.add(L + i);
        }
        return primes;
    }
    
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine().trim());
        StringBuilder sb = new StringBuilder();
        while (T-- > 0) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            long L = Long.parseLong(st.nextToken());
            long R = Long.parseLong(st.nextToken());
            List<Long> primes = segmentedSieve(L, R);
            for (long p : primes) sb.append(p).append("\n");
            sb.append("\n");
        }
        System.out.print(sb);
    }
}
