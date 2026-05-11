/*
 * Problem: Number of Digit One
 * Source:  LeetCode 233 - https://leetcode.com/problems/number-of-digit-one/
 * 
 * Approach: For each digit position, count how many times '1' appears by
 *           analyzing higher digits, current digit, and lower digits.
 * Time Complexity:  O(log n)
 * Space Complexity: O(1)
 * 
 * Tags: mathematics, digit-counting, pattern
 */

import java.util.*;

public class NumberOfDigitOne {
    
    public int countDigitOne(int n) {
        long count = 0;
        long factor = 1;
        
        while (factor <= n) {
            long lower = n % factor;
            long current = (n / factor) % 10;
            long higher = n / (factor * 10);
            
            if (current == 0) {
                count += higher * factor;
            } else if (current == 1) {
                count += higher * factor + lower + 1;
            } else {
                count += (higher + 1) * factor;
            }
            
            factor *= 10;
        }
        
        return (int) count;
    }
    
    public static void main(String[] args) {
        NumberOfDigitOne sol = new NumberOfDigitOne();
        System.out.println("countDigitOne(13) = " + sol.countDigitOne(13));   // Output: 6
        System.out.println("countDigitOne(100) = " + sol.countDigitOne(100)); // Output: 21
    }
}
