/*
 * Problem: Knight Dialer (Matrix Exponentiation)
 * Source:  LeetCode 935 - https://leetcode.com/problems/knight-dialer/
 * 
 * Approach: 10x10 transition matrix, matrix exponentiation for O(log n).
 * Time Complexity:  O(10^3 * log n)
 * Space Complexity: O(10^2)
 * 
 * Tags: matrix-exponentiation, dp, knight-moves
 */

import java.util.*;

public class KnightDialerMatrixExpo {
    
    static final long MOD = 1_000_000_007;
    
    static long[][] multiply(long[][] A, long[][] B) {
        int n = A.length;
        long[][] C = new long[n][n];
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++)
                for (int k = 0; k < n; k++)
                    C[i][j] = (C[i][j] + A[i][k] * B[k][j]) % MOD;
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
    
    public int knightDialer(int n) {
        int[][] moves = {
            {4, 6}, {6, 8}, {7, 9}, {4, 8}, {0, 3, 9},
            {}, {0, 1, 7}, {2, 6}, {1, 3}, {2, 4}
        };
        
        long[][] trans = new long[10][10];
        for (int i = 0; i < 10; i++)
            for (int j : moves[i])
                trans[j][i] = 1;
        
        long[][] result = matPow(trans, n - 1);
        
        long total = 0;
        for (int i = 0; i < 10; i++)
            for (int j = 0; j < 10; j++)
                total = (total + result[i][j]) % MOD;
        
        return (int) total;
    }
    
    public static void main(String[] args) {
        KnightDialerMatrixExpo sol = new KnightDialerMatrixExpo();
        System.out.println("n=1: " + sol.knightDialer(1)); // 10
        System.out.println("n=2: " + sol.knightDialer(2)); // 20
        System.out.println("n=3: " + sol.knightDialer(3)); // 46
    }
}
