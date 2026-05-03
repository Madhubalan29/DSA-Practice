/*
 * Problem: Prime Factorisation using SPF Sieve
 * Source:  CP-Algorithms
 * Tags: prime-factorisation, sieve
 */

import java.util.*;

public class PrimeFactorisation {
    static final int MAXN = 1000005;
    static int[] spf = new int[MAXN];
    
    static void buildSPF() {
        for (int i = 0; i < MAXN; i++) spf[i] = i;
        for (int i = 2; i * i < MAXN; i++)
            if (spf[i] == i)
                for (int j = i * i; j < MAXN; j += i)
                    if (spf[j] == j) spf[j] = i;
    }
    
    static Map<Integer, Integer> factorize(int n) {
        Map<Integer, Integer> factors = new LinkedHashMap<>();
        while (n > 1) {
            int p = spf[n], cnt = 0;
            while (n % p == 0) { n /= p; cnt++; }
            factors.put(p, cnt);
        }
        return factors;
    }
    
    public static void main(String[] args) {
        buildSPF();
        System.out.println("360 = " + factorize(360)); // {2=3, 3=2, 5=1}
    }
}
