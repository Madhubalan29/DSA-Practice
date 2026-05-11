/*
 * Problem: Count of Range Sum
 * Source:  LeetCode 327 - https://leetcode.com/problems/count-of-range-sum/
 * 
 * Approach: Merge sort on prefix sums with counting during merge.
 * Time Complexity:  O(n log n)
 * Space Complexity: O(n)
 * 
 * Tags: segment-tree, merge-sort, prefix-sum
 */

import java.util.*;

public class CountOfRangeSum {
    
    public int countRangeSum(int[] nums, int lower, int upper) {
        int n = nums.length;
        long[] sums = new long[n + 1];
        for (int i = 0; i < n; i++) sums[i + 1] = sums[i] + nums[i];
        
        return mergeSort(sums, 0, n, lower, upper);
    }
    
    int mergeSort(long[] sums, int lo, int hi, int lower, int upper) {
        if (lo >= hi) return 0;
        int mid = lo + (hi - lo) / 2;
        int count = mergeSort(sums, lo, mid, lower, upper)
                  + mergeSort(sums, mid + 1, hi, lower, upper);
        
        int j1 = mid + 1, j2 = mid + 1;
        for (int i = lo; i <= mid; i++) {
            while (j1 <= hi && sums[j1] - sums[i] < lower) j1++;
            while (j2 <= hi && sums[j2] - sums[i] <= upper) j2++;
            count += (j2 - j1);
        }
        
        // Merge
        long[] temp = new long[hi - lo + 1];
        int i = lo, j = mid + 1, k = 0;
        while (i <= mid && j <= hi) {
            if (sums[i] <= sums[j]) temp[k++] = sums[i++];
            else temp[k++] = sums[j++];
        }
        while (i <= mid) temp[k++] = sums[i++];
        while (j <= hi) temp[k++] = sums[j++];
        System.arraycopy(temp, 0, sums, lo, temp.length);
        
        return count;
    }
    
    public static void main(String[] args) {
        CountOfRangeSum sol = new CountOfRangeSum();
        System.out.println("Count: " + sol.countRangeSum(new int[]{-2, 5, -1}, -2, 2)); // 3
    }
}
