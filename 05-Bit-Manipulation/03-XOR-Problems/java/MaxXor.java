/*
 * Problem: Maximum XOR of Two Numbers in an Array
 * Source:  LeetCode 421
 * Tags: bit-manipulation, xor
 */

import java.util.*;

public class MaxXor {
    public static int findMaximumXOR(int[] nums) {
        int maxXor = 0, mask = 0;
        for (int i = 31; i >= 0; i--) {
            mask |= (1 << i);
            Set<Integer> prefixes = new HashSet<>();
            for (int num : nums) prefixes.add(num & mask);
            int candidate = maxXor | (1 << i);
            for (int prefix : prefixes) {
                if (prefixes.contains(candidate ^ prefix)) {
                    maxXor = candidate;
                    break;
                }
            }
        }
        return maxXor;
    }
    
    public static void main(String[] args) {
        System.out.println("Max XOR: " + findMaximumXOR(new int[]{3, 10, 5, 25, 2, 8})); // 28
    }
}
