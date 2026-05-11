/*
 * Problem: Palindrome Pairs
 * Source:  LeetCode 336 - https://leetcode.com/problems/palindrome-pairs/
 * 
 * Approach: Use a hashmap for O(1) reverse lookups. For each word, check:
 *           1. If reverse of entire word exists (different index)
 *           2. For each split, if one part is palindrome and reverse of other exists
 * Time Complexity:  O(n * k^2) where k = avg word length
 * Space Complexity: O(n * k)
 * 
 * Tags: trie, hashing, palindrome, string
 */

#include <bits/stdc++.h>
using namespace std;

bool isPalin(const string& s, int left, int right) {
    while (left < right) {
        if (s[left++] != s[right--]) return false;
    }
    return true;
}

vector<vector<int>> palindromePairs(vector<string>& words) {
    unordered_map<string, int> wordMap;
    int n = words.size();
    for (int i = 0; i < n; i++) wordMap[words[i]] = i;
    
    vector<vector<int>> result;
    
    for (int i = 0; i < n; i++) {
        string word = words[i];
        int len = word.size();
        
        for (int j = 0; j <= len; j++) {
            // Case 1: word[0..j-1] is palindrome, check if reverse of word[j..len-1] exists
            if (isPalin(word, 0, j - 1)) {
                string suffix = word.substr(j);
                string rev(suffix.rbegin(), suffix.rend());
                if (wordMap.count(rev) && wordMap[rev] != i) {
                    result.push_back({wordMap[rev], i});
                }
            }
            
            // Case 2: word[j..len-1] is palindrome, check if reverse of word[0..j-1] exists
            if (j < len && isPalin(word, j, len - 1)) {
                string prefix = word.substr(0, j);
                string rev(prefix.rbegin(), prefix.rend());
                if (wordMap.count(rev) && wordMap[rev] != i) {
                    result.push_back({i, wordMap[rev]});
                }
            }
        }
    }
    
    return result;
}

int main() {
    vector<string> words = {"abcd", "dcba", "lls", "s", "sssll"};
    auto result = palindromePairs(words);
    
    cout << "Palindrome pairs:" << endl;
    for (auto& p : result) {
        cout << "[" << p[0] << ", " << p[1] << "] -> \"" 
             << words[p[0]] + words[p[1]] << "\"" << endl;
    }
    
    return 0;
}
