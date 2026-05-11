/*
 * Problem: Minimum Number of Operations to Make Array Continuous
 * Source:  LeetCode 2009 - https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/
 * 
 * Approach: Sort + deduplicate. Sliding window to find max unique values in range.
 * Time Complexity:  O(n log n)
 * Space Complexity: O(n)
 * 
 * Tags: bit-manipulation, sliding-window, sorting, binary-search
 */

import java.util.*;

public class MinOperationsMakeArrayContinuous {
    
    public int minOperations(int[] nums) {
        int n = nums.length;
        TreeSet<Integer> set = new TreeSet<>();
        for (int num : nums) set.add(num);
        
        int[] unique = new int[set.size()];
        int idx = 0;
        for (int val : set) unique[idx++] = val;
        
        int m = unique.length;
        int result = n;
        int j = 0;
        
        for (int i = 0; i < m; i++) {
            while (j < m && unique[j] <= unique[i] + n - 1) {
                j++;
            }
            int count = j - i;
            result = Math.min(result, n - count);
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        MinOperationsMakeArrayContinuous sol = new MinOperationsMakeArrayContinuous();
        System.out.println("Min operations: " + sol.minOperations(new int[]{4, 2, 5, 3})); // 0
        System.out.println("Min operations: " + sol.minOperations(new int[]{1, 2, 3, 5, 6})); // 1
    }
}
