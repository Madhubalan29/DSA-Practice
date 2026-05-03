/*
 * Problem: Longest Substring Without Repeating Characters
 * Source:  LeetCode 3
 * Approach: Sliding window with hash set.
 * Time: O(n), Space: O(min(n, charset))
 * Tags: sliding-window, hashing
 */
#include <bits/stdc++.h>
using namespace std;

int lengthOfLongestSubstring(string s) {
    unordered_map<char, int> lastSeen;
    int maxLen = 0, left = 0;
    for (int right = 0; right < s.size(); right++) {
        if (lastSeen.count(s[right]) && lastSeen[s[right]] >= left)
            left = lastSeen[s[right]] + 1;
        lastSeen[s[right]] = right;
        maxLen = max(maxLen, right - left + 1);
    }
    return maxLen;
}

int main() {
    cout << lengthOfLongestSubstring("abcabcbb") << endl; // 3
    cout << lengthOfLongestSubstring("bbbbb") << endl;    // 1
    cout << lengthOfLongestSubstring("pwwkew") << endl;   // 3
    return 0;
}
