/*
 * Problem: Reverse Pairs
 * Source:  LeetCode 493 - https://leetcode.com/problems/reverse-pairs/
 * 
 * Approach: Modified merge sort with counting step before merge.
 * Time Complexity:  O(n log n)
 * Space Complexity: O(n)
 * 
 * Tags: sorting, merge-sort, divide-and-conquer
 */

import java.util.*;

public class ReversePairs {
    
    public int reversePairs(int[] nums) {
        return mergeCount(nums, 0, nums.length - 1);
    }
    
    int mergeCount(int[] nums, int lo, int hi) {
        if (lo >= hi) return 0;
        int mid = lo + (hi - lo) / 2;
        int count = mergeCount(nums, lo, mid) + mergeCount(nums, mid + 1, hi);
        
        int j = mid + 1;
        for (int i = lo; i <= mid; i++) {
            while (j <= hi && (long) nums[i] > 2L * nums[j]) j++;
            count += (j - mid - 1);
        }
        
        int[] temp = new int[hi - lo + 1];
        int i = lo, k = 0;
        j = mid + 1;
        while (i <= mid && j <= hi) {
            if (nums[i] <= nums[j]) temp[k++] = nums[i++];
            else temp[k++] = nums[j++];
        }
        while (i <= mid) temp[k++] = nums[i++];
        while (j <= hi) temp[k++] = nums[j++];
        
        for (k = lo; k <= hi; k++) nums[k] = temp[k - lo];
        
        return count;
    }
    
    public static void main(String[] args) {
        ReversePairs sol = new ReversePairs();
        System.out.println("Reverse pairs: " + sol.reversePairs(new int[]{1, 3, 2, 3, 1})); // 2
        System.out.println("Reverse pairs: " + sol.reversePairs(new int[]{2, 4, 3, 5, 1})); // 3
    }
}
