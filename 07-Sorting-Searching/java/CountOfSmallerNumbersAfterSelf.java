/*
 * Problem: Count of Smaller Numbers After Self
 * Source:  LeetCode 315 - https://leetcode.com/problems/count-of-smaller-numbers-after-self/
 * 
 * Approach: Modified merge sort with index tracking.
 * Time Complexity:  O(n log n)
 * Space Complexity: O(n)
 * 
 * Tags: sorting, merge-sort, divide-and-conquer
 */

import java.util.*;

public class CountOfSmallerNumbersAfterSelf {
    
    int[] counts;
    
    public List<Integer> countSmaller(int[] nums) {
        int n = nums.length;
        counts = new int[n];
        int[][] arr = new int[n][2]; // {value, original_index}
        for (int i = 0; i < n; i++) arr[i] = new int[]{nums[i], i};
        
        mergeSort(arr, 0, n - 1);
        
        List<Integer> result = new ArrayList<>();
        for (int c : counts) result.add(c);
        return result;
    }
    
    void mergeSort(int[][] arr, int lo, int hi) {
        if (lo >= hi) return;
        int mid = lo + (hi - lo) / 2;
        mergeSort(arr, lo, mid);
        mergeSort(arr, mid + 1, hi);
        
        int j = mid + 1;
        for (int i = lo; i <= mid; i++) {
            while (j <= hi && arr[j][0] < arr[i][0]) j++;
            counts[arr[i][1]] += (j - mid - 1);
        }
        
        int[][] temp = new int[hi - lo + 1][2];
        int i = lo, k = 0;
        j = mid + 1;
        while (i <= mid && j <= hi) {
            if (arr[i][0] <= arr[j][0]) temp[k++] = arr[i++];
            else temp[k++] = arr[j++];
        }
        while (i <= mid) temp[k++] = arr[i++];
        while (j <= hi) temp[k++] = arr[j++];
        
        for (k = lo; k <= hi; k++) arr[k] = temp[k - lo];
    }
    
    public static void main(String[] args) {
        CountOfSmallerNumbersAfterSelf sol = new CountOfSmallerNumbersAfterSelf();
        System.out.println(sol.countSmaller(new int[]{5, 2, 6, 1})); // [2, 1, 1, 0]
    }
}
