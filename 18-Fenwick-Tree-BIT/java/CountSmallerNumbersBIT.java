/*
 * Problem: Count of Smaller Numbers After Self (BIT approach)
 * Source:  LeetCode 315 - https://leetcode.com/problems/count-of-smaller-numbers-after-self/
 * 
 * Approach: Coordinate compression + BIT from right to left.
 * Time Complexity:  O(n log n)
 * Space Complexity: O(n)
 * 
 * Tags: fenwick-tree, bit, coordinate-compression
 */

import java.util.*;

public class CountSmallerNumbersBIT {
    
    int[] tree;
    
    void update(int i, int n) {
        for (; i <= n; i += i & (-i)) tree[i]++;
    }
    
    int query(int i) {
        int sum = 0;
        for (; i > 0; i -= i & (-i)) sum += tree[i];
        return sum;
    }
    
    public List<Integer> countSmaller(int[] nums) {
        int n = nums.length;
        
        int[] sorted = nums.clone();
        Arrays.sort(sorted);
        Map<Integer, Integer> rank = new HashMap<>();
        int r = 0;
        for (int val : sorted) {
            if (!rank.containsKey(val)) rank.put(val, ++r);
        }
        
        tree = new int[r + 1];
        Integer[] result = new Integer[n];
        
        for (int i = n - 1; i >= 0; i--) {
            int rk = rank.get(nums[i]);
            result[i] = query(rk - 1);
            update(rk, r);
        }
        
        return Arrays.asList(result);
    }
    
    public static void main(String[] args) {
        CountSmallerNumbersBIT sol = new CountSmallerNumbersBIT();
        System.out.println(sol.countSmaller(new int[]{5, 2, 6, 1})); // [2, 1, 1, 0]
    }
}
