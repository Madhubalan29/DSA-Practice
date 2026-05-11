/*
 * Problem: Rectangle Area II
 * Source:  LeetCode 850 - https://leetcode.com/problems/rectangle-area-ii/
 * 
 * Approach: Coordinate compression + sweep line.
 * Time Complexity:  O(n^2 log n)
 * Space Complexity: O(n)
 * 
 * Tags: geometry, sweep-line, coordinate-compression
 */

import java.util.*;

public class RectangleAreaII {
    
    public int rectangleArea(int[][] rectangles) {
        final int MOD = 1_000_000_007;
        
        TreeSet<Integer> xSet = new TreeSet<>();
        for (int[] r : rectangles) {
            xSet.add(r[0]);
            xSet.add(r[2]);
        }
        Integer[] xCoords = xSet.toArray(new Integer[0]);
        Map<Integer, Integer> xIndex = new HashMap<>();
        for (int i = 0; i < xCoords.length; i++) xIndex.put(xCoords[i], i);
        
        // Events: {y, type (0=open, 1=close), x1, x2}
        List<int[]> events = new ArrayList<>();
        for (int[] r : rectangles) {
            events.add(new int[]{r[1], 0, r[0], r[2]});
            events.add(new int[]{r[3], 1, r[0], r[2]});
        }
        events.sort((a, b) -> a[0] != b[0] ? a[0] - b[0] : a[1] - b[1]);
        
        int[] cnt = new int[xCoords.length];
        long totalArea = 0;
        int prevY = events.get(0)[0];
        
        for (int[] event : events) {
            int y = event[0], type = event[1], x1 = event[2], x2 = event[3];
            
            long activeX = 0;
            for (int i = 0; i + 1 < xCoords.length; i++) {
                if (cnt[i] > 0) {
                    activeX += xCoords[i + 1] - xCoords[i];
                }
            }
            
            totalArea = (totalArea + activeX * (y - prevY)) % MOD;
            prevY = y;
            
            int idx1 = xIndex.get(x1), idx2 = xIndex.get(x2);
            int delta = (type == 0) ? 1 : -1;
            for (int i = idx1; i < idx2; i++) cnt[i] += delta;
        }
        
        return (int) totalArea;
    }
    
    public static void main(String[] args) {
        RectangleAreaII sol = new RectangleAreaII();
        System.out.println("Total area: " + sol.rectangleArea(new int[][]{{0,0,2,2},{1,0,2,3},{1,0,3,1}}));
        // Output: 6
    }
}
