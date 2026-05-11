/*
 * Problem: Max Points on a Line
 * Source:  LeetCode 149 - https://leetcode.com/problems/max-points-on-a-line/
 * 
 * Approach: For each point, compute slopes to all other points using GCD-reduced
 *           (dy, dx) pairs as hash keys. Track max collinear count.
 * Time Complexity:  O(n^2)
 * Space Complexity: O(n)
 * 
 * Tags: mathematics, gcd, hashing, geometry
 */

import java.util.*;

public class MaxPointsOnALine {
    
    public int maxPoints(int[][] points) {
        int n = points.length;
        if (n <= 2) return n;
        
        int result = 2;
        
        for (int i = 0; i < n; i++) {
            Map<String, Integer> slopeCount = new HashMap<>();
            
            for (int j = 0; j < n; j++) {
                if (i == j) continue;
                
                int dy = points[j][1] - points[i][1];
                int dx = points[j][0] - points[i][0];
                
                int g = gcd(Math.abs(dy), Math.abs(dx));
                if (g != 0) {
                    dy /= g;
                    dx /= g;
                }
                
                if (dx < 0) {
                    dx = -dx;
                    dy = -dy;
                } else if (dx == 0) {
                    dy = Math.abs(dy);
                }
                
                String key = dy + "/" + dx;
                slopeCount.put(key, slopeCount.getOrDefault(key, 0) + 1);
            }
            
            for (int cnt : slopeCount.values()) {
                result = Math.max(result, cnt + 1);
            }
        }
        
        return result;
    }
    
    private int gcd(int a, int b) {
        return b == 0 ? a : gcd(b, a % b);
    }
    
    public static void main(String[] args) {
        MaxPointsOnALine sol = new MaxPointsOnALine();
        int[][] points = {{1,1},{3,2},{5,3},{4,1},{2,3},{1,4}};
        System.out.println("Max points on a line: " + sol.maxPoints(points)); // Output: 4
    }
}
