/*
 * Problem: Palindrome Pairs
 * Source:  LeetCode 336 - https://leetcode.com/problems/palindrome-pairs/
 * 
 * Approach: HashMap-based. For each word, check all prefix/suffix splits.
 * Time Complexity:  O(n * k^2)
 * Space Complexity: O(n * k)
 * 
 * Tags: trie, hashing, palindrome, string
 */

import java.util.*;

public class PalindromePairs {
    
    boolean isPalin(String s, int left, int right) {
        while (left < right) {
            if (s.charAt(left++) != s.charAt(right--)) return false;
        }
        return true;
    }
    
    public List<List<Integer>> palindromePairs(String[] words) {
        Map<String, Integer> wordMap = new HashMap<>();
        for (int i = 0; i < words.length; i++) wordMap.put(words[i], i);
        
        List<List<Integer>> result = new ArrayList<>();
        
        for (int i = 0; i < words.length; i++) {
            String word = words[i];
            int len = word.length();
            
            for (int j = 0; j <= len; j++) {
                // Case 1: prefix is palindrome, check reverse of suffix
                if (isPalin(word, 0, j - 1)) {
                    String rev = new StringBuilder(word.substring(j)).reverse().toString();
                    if (wordMap.containsKey(rev) && wordMap.get(rev) != i) {
                        result.add(Arrays.asList(wordMap.get(rev), i));
                    }
                }
                
                // Case 2: suffix is palindrome, check reverse of prefix
                if (j < len && isPalin(word, j, len - 1)) {
                    String rev = new StringBuilder(word.substring(0, j)).reverse().toString();
                    if (wordMap.containsKey(rev) && wordMap.get(rev) != i) {
                        result.add(Arrays.asList(i, wordMap.get(rev)));
                    }
                }
            }
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        PalindromePairs sol = new PalindromePairs();
        String[] words = {"abcd", "dcba", "lls", "s", "sssll"};
        System.out.println("Palindrome pairs: " + sol.palindromePairs(words));
    }
}
