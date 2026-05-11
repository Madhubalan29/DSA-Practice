/*
 * Problem: Minimum Window Substring
 * Source:  LeetCode 76 - https://leetcode.com/problems/minimum-window-substring/
 * 
 * Approach: Expand-shrink sliding window with frequency map. Expand right to
 *           include all chars of t, then shrink left to minimize window.
 * Time Complexity:  O(|s| + |t|)
 * Space Complexity: O(|t|)
 * 
 * Tags: arrays, hashing, sliding-window, two-pointers
 */

#include <bits/stdc++.h>
using namespace std;

string minWindow(string s, string t) {
    unordered_map<char, int> need, window;
    for (char c : t) need[c]++;
    
    int left = 0, right = 0;
    int valid = 0; // number of characters satisfied
    int start = 0, minLen = INT_MAX;
    
    while (right < (int)s.size()) {
        char c = s[right];
        right++;
        
        if (need.count(c)) {
            window[c]++;
            if (window[c] == need[c]) valid++;
        }
        
        // Try to shrink window
        while (valid == (int)need.size()) {
            if (right - left < minLen) {
                start = left;
                minLen = right - left;
            }
            
            char d = s[left];
            left++;
            
            if (need.count(d)) {
                if (window[d] == need[d]) valid--;
                window[d]--;
            }
        }
    }
    
    return minLen == INT_MAX ? "" : s.substr(start, minLen);
}

int main() {
    cout << "Min window: \"" << minWindow("ADOBECODEBANC", "ABC") << "\"" << endl;
    // Output: "BANC"
    
    cout << "Min window: \"" << minWindow("a", "a") << "\"" << endl;
    // Output: "a"
    
    return 0;
}
