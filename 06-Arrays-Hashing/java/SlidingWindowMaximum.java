/*
 * Problem: Sliding Window Maximum
 * Source:  LeetCode 239 - https://leetcode.com/problems/sliding-window-maximum/
 * 
 * Approach: Monotonic decreasing deque of indices.
 * Time Complexity:  O(n)
 * Space Complexity: O(k)
 * 
 * Tags: arrays, sliding-window, monotonic-deque
 */

import java.util.*;

public class SlidingWindowMaximum {
    
    public int[] maxSlidingWindow(int[] nums, int k) {
        Deque<Integer> dq = new ArrayDeque<>();
        int[] result = new int[nums.length - k + 1];
        int idx = 0;
        
        for (int i = 0; i < nums.length; i++) {
            if (!dq.isEmpty() && dq.peekFirst() < i - k + 1) {
                dq.pollFirst();
            }
            
            while (!dq.isEmpty() && nums[dq.peekLast()] <= nums[i]) {
                dq.pollLast();
            }
            
            dq.offerLast(i);
            
            if (i >= k - 1) {
                result[idx++] = nums[dq.peekFirst()];
            }
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        SlidingWindowMaximum sol = new SlidingWindowMaximum();
        int[] result = sol.maxSlidingWindow(new int[]{1, 3, -1, -3, 5, 3, 6, 7}, 3);
        System.out.print("Sliding Window Maximum: ");
        for (int x : result) System.out.print(x + " ");
        // Output: 3 3 5 5 6 7
    }
}
