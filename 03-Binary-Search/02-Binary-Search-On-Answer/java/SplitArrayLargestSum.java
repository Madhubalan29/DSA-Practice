/*
 * Problem: Split Array Largest Sum
 * Source:  LeetCode 410 - https://leetcode.com/problems/split-array-largest-sum/
 * 
 * Approach: Binary search on the answer (the largest subarray sum).
 *           For a candidate answer, greedily check if we can split into <= k parts.
 * Time Complexity:  O(n * log(sum - max))
 * Space Complexity: O(1)
 * 
 * Tags: binary-search, binary-search-on-answer, greedy
 */

import java.util.*;

public class SplitArrayLargestSum {
    
    private boolean canSplit(int[] nums, int k, long maxSum) {
        int count = 1;
        long currentSum = 0;
        for (int num : nums) {
            if (currentSum + num > maxSum) {
                count++;
                currentSum = num;
                if (count > k) return false;
            } else {
                currentSum += num;
            }
        }
        return true;
    }
    
    public int splitArray(int[] nums, int k) {
        long lo = 0, hi = 0;
        for (int num : nums) {
            lo = Math.max(lo, num);
            hi += num;
        }
        
        while (lo < hi) {
            long mid = lo + (hi - lo) / 2;
            if (canSplit(nums, k, mid)) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        
        return (int) lo;
    }
    
    public static void main(String[] args) {
        SplitArrayLargestSum sol = new SplitArrayLargestSum();
        System.out.println("Minimized largest sum: " + sol.splitArray(new int[]{7, 2, 5, 10, 8}, 2));
        // Output: 18
    }
}
