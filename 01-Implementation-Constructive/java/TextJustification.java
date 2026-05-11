/*
 * Problem: Text Justification
 * Source:  LeetCode 68 - https://leetcode.com/problems/text-justification/
 * 
 * Approach: Greedy packing — fit as many words as possible per line,
 *           then distribute spaces evenly (left-biased for remainders).
 *           Last line is left-justified.
 * Time Complexity:  O(n) where n = total characters across all words
 * Space Complexity: O(n)
 * 
 * Tags: implementation, string, greedy, simulation
 */

import java.util.*;

public class TextJustification {
    
    public List<String> fullJustify(String[] words, int maxWidth) {
        List<String> result = new ArrayList<>();
        int n = words.length;
        int i = 0;
        
        while (i < n) {
            int lineLen = words[i].length();
            int j = i + 1;
            while (j < n && lineLen + 1 + words[j].length() <= maxWidth) {
                lineLen += 1 + words[j].length();
                j++;
            }
            
            int numWords = j - i;
            int totalSpaces = maxWidth - lineLen + (numWords - 1);
            
            StringBuilder line = new StringBuilder(words[i]);
            
            if (numWords == 1 || j == n) {
                // Last line or single word: left justify
                for (int k = i + 1; k < j; k++) {
                    line.append(" ").append(words[k]);
                }
                while (line.length() < maxWidth) {
                    line.append(" ");
                }
            } else {
                int gaps = numWords - 1;
                int spacePerGap = totalSpaces / gaps;
                int extraSpaces = totalSpaces % gaps;
                
                for (int k = i + 1; k < j; k++) {
                    int spaces = spacePerGap + (k - i - 1 < extraSpaces ? 1 : 0);
                    for (int s = 0; s < spaces; s++) line.append(" ");
                    line.append(words[k]);
                }
            }
            
            result.add(line.toString());
            i = j;
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        TextJustification sol = new TextJustification();
        String[] words = {"This", "is", "an", "example", "of", "text", "justification."};
        int maxWidth = 16;
        
        List<String> result = sol.fullJustify(words, maxWidth);
        for (String line : result) {
            System.out.println("\"" + line + "\"");
        }
    }
}
