/*
 * Problem: Word Ladder II
 * Source:  LeetCode 126 - https://leetcode.com/problems/word-ladder-ii/
 * 
 * Approach: BFS to find shortest distance from beginWord to all words.
 *           Then DFS backtrack from endWord following decreasing distances
 *           to collect all shortest paths.
 * Time Complexity:  O(n * L^2 * 26) for BFS + O(paths) for DFS
 * Space Complexity: O(n * L)
 * 
 * Tags: graph, bfs, dfs, backtracking
 */

#include <bits/stdc++.h>
using namespace std;

vector<vector<string>> findLadders(string beginWord, string endWord, vector<string>& wordList) {
    unordered_set<string> wordSet(wordList.begin(), wordList.end());
    if (!wordSet.count(endWord)) return {};
    
    // BFS to build distance map
    unordered_map<string, int> dist;
    dist[beginWord] = 0;
    queue<string> q;
    q.push(beginWord);
    
    while (!q.empty()) {
        string word = q.front(); q.pop();
        
        for (int i = 0; i < (int)word.size(); i++) {
            string next = word;
            for (char c = 'a'; c <= 'z'; c++) {
                next[i] = c;
                if (wordSet.count(next) && !dist.count(next)) {
                    dist[next] = dist[word] + 1;
                    q.push(next);
                }
            }
        }
    }
    
    if (!dist.count(endWord)) return {};
    
    // DFS backtrack from endWord
    vector<vector<string>> result;
    vector<string> path = {endWord};
    
    function<void(const string&)> dfs = [&](const string& word) {
        if (word == beginWord) {
            vector<string> reversed(path.rbegin(), path.rend());
            result.push_back(reversed);
            return;
        }
        
        for (int i = 0; i < (int)word.size(); i++) {
            string prev = word;
            for (char c = 'a'; c <= 'z'; c++) {
                prev[i] = c;
                if (dist.count(prev) && dist[prev] == dist[word] - 1) {
                    path.push_back(prev);
                    dfs(prev);
                    path.pop_back();
                }
            }
        }
    };
    
    dfs(endWord);
    return result;
}

int main() {
    vector<string> wordList = {"hot","dot","dog","lot","log","cog"};
    string beginWord = "hit", endWord = "cog";
    
    auto result = findLadders(beginWord, endWord, wordList);
    
    cout << "All shortest paths:" << endl;
    for (auto& path : result) {
        for (auto& w : path) cout << w << " -> ";
        cout << endl;
    }
    
    return 0;
}
