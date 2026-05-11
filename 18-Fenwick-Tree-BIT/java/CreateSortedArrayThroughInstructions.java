/*
 * Problem: Create Sorted Array through Instructions
 * Source:  LeetCode 1649 - https://leetcode.com/problems/create-sorted-array-through-instructions/
 * 
 * Approach: BIT for dynamic frequency counting and order statistics.
 * Time Complexity:  O(n log m)
 * Space Complexity: O(m)
 * 
 * Tags: fenwick-tree, bit, order-statistics
 */

import java.util.*;

public class CreateSortedArrayThroughInstructions {
    
    int[] tree;
    
    void update(int i, int n) { for (; i <= n; i += i & (-i)) tree[i]++; }
    int query(int i) { int s = 0; for (; i > 0; i -= i & (-i)) s += tree[i]; return s; }
    
    public int createSortedArray(int[] instructions) {
        final int MOD = 1_000_000_007;
        int maxVal = 0;
        for (int v : instructions) maxVal = Math.max(maxVal, v);
        tree = new int[maxVal + 1];
        
        long totalCost = 0;
        
        for (int i = 0; i < instructions.length; i++) {
            int val = instructions[i];
            int lessThan = query(val - 1);
            int greaterThan = i - query(val);
            totalCost = (totalCost + Math.min(lessThan, greaterThan)) % MOD;
            update(val, maxVal);
        }
        
        return (int) totalCost;
    }
    
    public static void main(String[] args) {
        CreateSortedArrayThroughInstructions sol = new CreateSortedArrayThroughInstructions();
        System.out.println("Total cost: " + sol.createSortedArray(new int[]{1, 5, 6, 2})); // 1
        System.out.println("Total cost: " + sol.createSortedArray(new int[]{1, 2, 3, 6, 5, 4})); // 3
    }
}
