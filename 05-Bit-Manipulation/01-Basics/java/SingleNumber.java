/*
 * Problem: Single Number
 * Source:  LeetCode 136
 * Tags: bit-manipulation, xor
 */

public class SingleNumber {
    public static int singleNumber(int[] nums) {
        int result = 0;
        for (int x : nums) result ^= x;
        return result;
    }
    
    public static void main(String[] args) {
        System.out.println("Single Number: " + singleNumber(new int[]{4, 1, 2, 1, 2})); // 4
    }
}
