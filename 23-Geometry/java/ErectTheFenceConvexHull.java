/*
 * Problem: Erect the Fence (Convex Hull)
 * Source:  LeetCode 587 - https://leetcode.com/problems/erect-the-fence/
 * 
 * Approach: Andrew's Monotone Chain for convex hull.
 * Time Complexity:  O(n log n)
 * Space Complexity: O(n)
 * 
 * Tags: geometry, convex-hull, cross-product
 */

import java.util.*;

public class ErectTheFenceConvexHull {
    
    int cross(int[] O, int[] A, int[] B) {
        return (A[0] - O[0]) * (B[1] - O[1]) - (A[1] - O[1]) * (B[0] - O[0]);
    }
    
    public int[][] outerTrees(int[][] trees) {
        int n = trees.length;
        if (n <= 3) return trees;
        
        Arrays.sort(trees, (a, b) -> a[0] != b[0] ? a[0] - b[0] : a[1] - b[1]);
        
        List<int[]> hull = new ArrayList<>();
        
        // Lower hull
        for (int i = 0; i < n; i++) {
            while (hull.size() >= 2 && cross(hull.get(hull.size()-2), hull.get(hull.size()-1), trees[i]) < 0) {
                hull.remove(hull.size() - 1);
            }
            hull.add(trees[i]);
        }
        
        // Upper hull
        int lowerSize = hull.size();
        for (int i = n - 2; i >= 0; i--) {
            while (hull.size() > lowerSize && cross(hull.get(hull.size()-2), hull.get(hull.size()-1), trees[i]) < 0) {
                hull.remove(hull.size() - 1);
            }
            hull.add(trees[i]);
        }
        
        // Remove duplicates
        Set<String> seen = new HashSet<>();
        List<int[]> result = new ArrayList<>();
        for (int[] p : hull) {
            String key = p[0] + "," + p[1];
            if (seen.add(key)) result.add(p);
        }
        
        return result.toArray(new int[0][]);
    }
    
    public static void main(String[] args) {
        ErectTheFenceConvexHull sol = new ErectTheFenceConvexHull();
        int[][] trees = {{1,1},{2,2},{2,0},{2,4},{3,3},{4,2}};
        int[][] hull = sol.outerTrees(trees);
        
        System.out.println("Convex Hull points:");
        for (int[] p : hull) System.out.println("[" + p[0] + ", " + p[1] + "]");
    }
}
