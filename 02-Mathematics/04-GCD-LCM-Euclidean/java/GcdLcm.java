/*
 * Problem: GCD and LCM using Euclidean Algorithm
 * Source:  CP-Algorithms
 * Tags: math, gcd, euclidean
 */

public class GcdLcm {
    
    static long gcd(long a, long b) {
        while (b != 0) {
            long t = b;
            b = a % b;
            a = t;
        }
        return a;
    }
    
    static long lcm(long a, long b) {
        return a / gcd(a, b) * b;
    }
    
    // Extended GCD: returns gcd, sets x[0] and y[0]
    static long extGcd(long a, long b, long[] x, long[] y) {
        if (b == 0) {
            x[0] = 1; y[0] = 0;
            return a;
        }
        long[] x1 = {0}, y1 = {0};
        long g = extGcd(b, a % b, x1, y1);
        x[0] = y1[0];
        y[0] = x1[0] - (a / b) * y1[0];
        return g;
    }
    
    public static void main(String[] args) {
        System.out.println("gcd(12,8) = " + gcd(12, 8));   // 4
        System.out.println("lcm(12,8) = " + lcm(12, 8));   // 24
        
        long[] x = {0}, y = {0};
        long g = extGcd(30, 20, x, y);
        System.out.println("ExtGCD(30,20): " + x[0] + "*30 + " + y[0] + "*20 = " + g);
    }
}
