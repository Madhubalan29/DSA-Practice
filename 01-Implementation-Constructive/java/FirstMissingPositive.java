/*
 * Problem: First Missing Positive
 * Source:  LeetCode 41 - https://leetcode.com/problems/first-missing-positive/
 * 
 * Approach: In-place cyclic sort — place each number nums[i] at index nums[i]-1.
 *           Then scan to find the first index where nums[i] != i+1.
 * Time Complexity:  O(n)
 * Space Complexity: O(1)
 * 
 * Tags: implementation, constructive, in-place-hashing
 */

import java.util.*;

public class FirstMissingPositive {
    
    public int firstMissingPositive(int[] nums) {
        int n = nums.length;
        
        for (int i = 0; i < n; i++) {
            while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] != nums[i]) {
                int temp = nums[nums[i] - 1];
                nums[nums[i] - 1] = nums[i];
                nums[i] = temp;
            }
        }
        
        for (int i = 0; i < n; i++) {
            if (nums[i] != i + 1) return i + 1;
        }
        
        return n + 1;
    }
    
    public static void main(String[] args) {
        FirstMissingPositive sol = new FirstMissingPositive();
        System.out.println(sol.firstMissingPositive(new int[]{3, 4, -1, 1})); // Output: 2
        System.out.println(sol.firstMissingPositive(new int[]{7, 8, 9, 11, 12})); // Output: 1
    }
}
