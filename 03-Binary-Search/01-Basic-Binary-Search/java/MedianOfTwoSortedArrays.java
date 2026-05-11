/*
 * Problem: Median of Two Sorted Arrays
 * Source:  LeetCode 4 - https://leetcode.com/problems/median-of-two-sorted-arrays/
 * 
 * Approach: Binary search on the smaller array to find the correct partition.
 * Time Complexity:  O(log(min(m, n)))
 * Space Complexity: O(1)
 * 
 * Tags: binary-search, divide-and-conquer, arrays
 */

import java.util.*;

public class MedianOfTwoSortedArrays {
    
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        if (nums1.length > nums2.length) {
            return findMedianSortedArrays(nums2, nums1);
        }
        
        int m = nums1.length, n = nums2.length;
        int lo = 0, hi = m;
        
        while (lo <= hi) {
            int i = (lo + hi) / 2;
            int j = (m + n + 1) / 2 - i;
            
            int maxLeft1 = (i == 0) ? Integer.MIN_VALUE : nums1[i - 1];
            int minRight1 = (i == m) ? Integer.MAX_VALUE : nums1[i];
            int maxLeft2 = (j == 0) ? Integer.MIN_VALUE : nums2[j - 1];
            int minRight2 = (j == n) ? Integer.MAX_VALUE : nums2[j];
            
            if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
                if ((m + n) % 2 == 0) {
                    return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2.0;
                } else {
                    return Math.max(maxLeft1, maxLeft2);
                }
            } else if (maxLeft1 > minRight2) {
                hi = i - 1;
            } else {
                lo = i + 1;
            }
        }
        
        return 0.0;
    }
    
    public static void main(String[] args) {
        MedianOfTwoSortedArrays sol = new MedianOfTwoSortedArrays();
        System.out.println("Median: " + sol.findMedianSortedArrays(new int[]{1, 3}, new int[]{2})); // 2.0
        System.out.println("Median: " + sol.findMedianSortedArrays(new int[]{1, 2}, new int[]{3, 4})); // 2.5
    }
}
