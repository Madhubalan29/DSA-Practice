/*
 * Problem: Unique Paths
 * Source:  LeetCode 62
 * Tags: combinatorics, math
 */

public class UniquePaths {
    
    public static int uniquePaths(int m, int n) {
        long result = 1;
        int total = m + n - 2;
        int choose = Math.min(m - 1, n - 1);
        for (int i = 0; i < choose; i++) {
            result = result * (total - i) / (i + 1);
        }
        return (int) result;
    }
    
    public static void main(String[] args) {
        System.out.println("uniquePaths(3,7) = " + uniquePaths(3, 7)); // 28
        System.out.println("uniquePaths(3,3) = " + uniquePaths(3, 3)); // 6
    }
}
