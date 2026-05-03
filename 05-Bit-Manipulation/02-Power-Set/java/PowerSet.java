/*
 * Problem: Subsets (Power Set)
 * Source:  LeetCode 78
 * Tags: bit-manipulation, power-set
 */

import java.util.*;

public class PowerSet {
    public static List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        int n = nums.length;
        for (int mask = 0; mask < (1 << n); mask++) {
            List<Integer> subset = new ArrayList<>();
            for (int i = 0; i < n; i++)
                if ((mask & (1 << i)) != 0) subset.add(nums[i]);
            result.add(subset);
        }
        return result;
    }
    
    public static void main(String[] args) {
        System.out.println(subsets(new int[]{1, 2, 3}));
    }
}
