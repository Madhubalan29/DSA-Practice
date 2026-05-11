/*
 * Problem: Candy
 * Source:  LeetCode 135 - https://leetcode.com/problems/candy/
 * 
 * Approach: Two-pass greedy — left-to-right then right-to-left.
 * Time Complexity:  O(n)
 * Space Complexity: O(n)
 * 
 * Tags: greedy, arrays
 */

import java.util.*;

public class Candy {
    
    public int candy(int[] ratings) {
        int n = ratings.length;
        int[] candies = new int[n];
        Arrays.fill(candies, 1);
        
        for (int i = 1; i < n; i++) {
            if (ratings[i] > ratings[i - 1]) {
                candies[i] = candies[i - 1] + 1;
            }
        }
        
        for (int i = n - 2; i >= 0; i--) {
            if (ratings[i] > ratings[i + 1]) {
                candies[i] = Math.max(candies[i], candies[i + 1] + 1);
            }
        }
        
        int total = 0;
        for (int c : candies) total += c;
        return total;
    }
    
    public static void main(String[] args) {
        Candy sol = new Candy();
        System.out.println("Min candies: " + sol.candy(new int[]{1, 0, 2})); // 5
        System.out.println("Min candies: " + sol.candy(new int[]{1, 2, 2})); // 4
    }
}
