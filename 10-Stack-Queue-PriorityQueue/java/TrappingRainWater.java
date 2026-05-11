/*
 * Problem: Trapping Rain Water
 * Source:  LeetCode 42 - https://leetcode.com/problems/trapping-rain-water/
 * 
 * Approach: Two-pointer technique for O(1) space.
 * Time Complexity:  O(n)
 * Space Complexity: O(1)
 * 
 * Tags: stack, two-pointers, arrays
 */

import java.util.*;

public class TrappingRainWater {
    
    public int trap(int[] height) {
        int left = 0, right = height.length - 1;
        int leftMax = 0, rightMax = 0;
        int water = 0;
        
        while (left < right) {
            if (height[left] < height[right]) {
                leftMax = Math.max(leftMax, height[left]);
                water += leftMax - height[left];
                left++;
            } else {
                rightMax = Math.max(rightMax, height[right]);
                water += rightMax - height[right];
                right--;
            }
        }
        
        return water;
    }
    
    public static void main(String[] args) {
        TrappingRainWater sol = new TrappingRainWater();
        System.out.println("Trapped water: " + sol.trap(new int[]{0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1}));
        // Output: 6
    }
}
