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

#include <bits/stdc++.h>
using namespace std;

vector<string> fullJustify(vector<string>& words, int maxWidth) {
    vector<string> result;
    int n = words.size();
    int i = 0;
    
    while (i < n) {
        // Determine how many words fit in this line
        int lineLen = words[i].size();
        int j = i + 1;
        while (j < n && lineLen + 1 + (int)words[j].size() <= maxWidth) {
            lineLen += 1 + words[j].size();
            j++;
        }
        
        int numWords = j - i;
        int totalSpaces = maxWidth - lineLen + (numWords - 1); // total spaces to distribute
        
        string line = words[i];
        
        if (numWords == 1 || j == n) {
            // Last line or single-word line: left justify
            for (int k = i + 1; k < j; k++) {
                line += " " + words[k];
            }
            // Pad remaining spaces on the right
            line += string(maxWidth - line.size(), ' ');
        } else {
            // Middle lines: distribute spaces evenly
            int gaps = numWords - 1;
            int spacePerGap = totalSpaces / gaps;
            int extraSpaces = totalSpaces % gaps;
            
            for (int k = i + 1; k < j; k++) {
                int spaces = spacePerGap + (k - i - 1 < extraSpaces ? 1 : 0);
                line += string(spaces, ' ') + words[k];
            }
        }
        
        result.push_back(line);
        i = j;
    }
    
    return result;
}

int main() {
    vector<string> words = {"This", "is", "an", "example", "of", "text", "justification."};
    int maxWidth = 16;
    
    vector<string> result = fullJustify(words, maxWidth);
    
    for (const string& line : result) {
        cout << "\"" << line << "\"" << endl;
    }
    // Output:
    // "This    is    an"
    // "example  of text"
    // "justification.  "
    
    return 0;
}
