/*
 * Problem: IPO (Initial Public Offering)
 * Source:  LeetCode 502 - https://leetcode.com/problems/ipo/
 * 
 * Approach: Sort by capital, greedily pick most profitable affordable project.
 * Time Complexity:  O(n log n)
 * Space Complexity: O(n)
 * 
 * Tags: greedy, heap, priority-queue
 */

import java.util.*;

public class IPO {
    
    public int findMaximizedCapital(int k, int w, int[] profits, int[] capital) {
        int n = profits.length;
        int[][] projects = new int[n][2];
        for (int i = 0; i < n; i++) projects[i] = new int[]{capital[i], profits[i]};
        Arrays.sort(projects, (a, b) -> a[0] - b[0]);
        
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
        int idx = 0;
        
        for (int i = 0; i < k; i++) {
            while (idx < n && projects[idx][0] <= w) {
                maxHeap.offer(projects[idx][1]);
                idx++;
            }
            if (maxHeap.isEmpty()) break;
            w += maxHeap.poll();
        }
        
        return w;
    }
    
    public static void main(String[] args) {
        IPO sol = new IPO();
        System.out.println("Max capital: " + sol.findMaximizedCapital(2, 0, new int[]{1, 2, 3}, new int[]{0, 1, 1}));
        // Output: 4
    }
}
