/*
 * Problem: Fibonacci via Matrix Exponentiation
 * Source:  Codeforces 185A - https://codeforces.com/problemset/problem/185/A
 *          Also: LeetCode 509 - https://leetcode.com/problems/fibonacci-number/
 * 
 * Approach: Matrix exponentiation using binary exponentiation.
 * Time Complexity:  O(k^3 * log n)
 * Space Complexity: O(k^2)
 * 
 * Tags: matrix-exponentiation, binary-exponentiation, linear-recurrence
 */

import java.util.*;

public class FibonacciMatrixExpo {
    
    static final long MOD = 1_000_000_007;
    
    static long[][] multiply(long[][] A, long[][] B) {
        int n = A.length, m = B[0].length, k = B.length;
        long[][] C = new long[n][m];
        for (int i = 0; i < n; i++)
            for (int j = 0; j < m; j++)
                for (int p = 0; p < k; p++)
                    C[i][j] = (C[i][j] + A[i][p] * B[p][j]) % MOD;
        return C;
    }
    
    static long[][] matPow(long[][] base, long exp) {
        int n = base.length;
        long[][] result = new long[n][n];
        for (int i = 0; i < n; i++) result[i][i] = 1;
        
        while (exp > 0) {
            if ((exp & 1) == 1) result = multiply(result, base);
            base = multiply(base, base);
            exp >>= 1;
        }
        return result;
    }
    
    static long fibonacci(long n) {
        if (n <= 1) return n;
        long[][] base = {{1, 1}, {1, 0}};
        long[][] result = matPow(base, n - 1);
        return result[0][0];
    }
    
    public static void main(String[] args) {
        System.out.println("F(10) = " + fibonacci(10));  // 55
        System.out.println("F(50) = " + fibonacci(50));  // large mod result
    }
}
