/*
 * Problem: Minimum Window Substring
 * Source:  LeetCode 76 - https://leetcode.com/problems/minimum-window-substring/
 * 
 * Approach: Expand-shrink sliding window with frequency map.
 * Time Complexity:  O(|s| + |t|)
 * Space Complexity: O(|t|)
 * 
 * Tags: arrays, hashing, sliding-window, two-pointers
 */

import java.util.*;

public class MinimumWindowSubstring {
    
    public String minWindow(String s, String t) {
        Map<Character, Integer> need = new HashMap<>(), window = new HashMap<>();
        for (char c : t.toCharArray()) need.merge(c, 1, Integer::sum);
        
        int left = 0, right = 0, valid = 0;
        int start = 0, minLen = Integer.MAX_VALUE;
        
        while (right < s.length()) {
            char c = s.charAt(right);
            right++;
            
            if (need.containsKey(c)) {
                window.merge(c, 1, Integer::sum);
                if (window.get(c).equals(need.get(c))) valid++;
            }
            
            while (valid == need.size()) {
                if (right - left < minLen) {
                    start = left;
                    minLen = right - left;
                }
                
                char d = s.charAt(left);
                left++;
                
                if (need.containsKey(d)) {
                    if (window.get(d).equals(need.get(d))) valid--;
                    window.merge(d, -1, Integer::sum);
                }
            }
        }
        
        return minLen == Integer.MAX_VALUE ? "" : s.substring(start, start + minLen);
    }
    
    public static void main(String[] args) {
        MinimumWindowSubstring sol = new MinimumWindowSubstring();
        System.out.println("Min window: \"" + sol.minWindow("ADOBECODEBANC", "ABC") + "\""); // BANC
        System.out.println("Min window: \"" + sol.minWindow("a", "a") + "\""); // a
    }
}
