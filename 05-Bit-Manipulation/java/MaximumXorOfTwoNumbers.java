/*
 * Problem: Maximum XOR of Two Numbers in an Array
 * Source:  LeetCode 421 - https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/
 * 
 * Approach: Build a bitwise Trie. For each number, greedily pick opposite bits.
 * Time Complexity:  O(n * 32)
 * Space Complexity: O(n * 32)
 * 
 * Tags: bit-manipulation, trie, greedy
 */

import java.util.*;

public class MaximumXorOfTwoNumbers {
    
    static int[][] trie;
    static int trieIdx;
    
    static void insert(int num) {
        int node = 0;
        for (int i = 31; i >= 0; i--) {
            int bit = (num >> i) & 1;
            if (trie[node][bit] == 0) {
                trie[node][bit] = ++trieIdx;
            }
            node = trie[node][bit];
        }
    }
    
    static int getMaxXor(int num) {
        int node = 0;
        int maxXor = 0;
        for (int i = 31; i >= 0; i--) {
            int bit = (num >> i) & 1;
            int desired = 1 - bit;
            if (trie[node][desired] != 0) {
                maxXor |= (1 << i);
                node = trie[node][desired];
            } else {
                node = trie[node][bit];
            }
        }
        return maxXor;
    }
    
    public int findMaximumXOR(int[] nums) {
        trie = new int[nums.length * 32 + 1][2];
        trieIdx = 0;
        
        for (int num : nums) insert(num);
        
        int result = 0;
        for (int num : nums) {
            result = Math.max(result, getMaxXor(num));
        }
        return result;
    }
    
    public static void main(String[] args) {
        MaximumXorOfTwoNumbers sol = new MaximumXorOfTwoNumbers();
        System.out.println("Maximum XOR: " + sol.findMaximumXOR(new int[]{3, 10, 5, 25, 2, 8}));
        // Output: 28
    }
}
