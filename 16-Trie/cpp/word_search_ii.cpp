/*
 * Problem: Word Search II
 * Source:  LeetCode 212 - https://leetcode.com/problems/word-search-ii/
 * 
 * Approach: Build a Trie from all words. DFS on the board, traversing the Trie
 *           simultaneously. When a word end is reached, add to result.
 *           Prune trie nodes after finding words to avoid duplicates.
 * Time Complexity:  O(m * n * 4^L) where L = max word length
 * Space Complexity: O(total characters in words)
 * 
 * Tags: trie, dfs, backtracking, matrix
 */

#include <bits/stdc++.h>
using namespace std;

struct TrieNode {
    TrieNode* children[26] = {};
    string word = "";
};

class Solution {
    TrieNode* root;
    vector<string> result;
    
    void buildTrie(vector<string>& words) {
        root = new TrieNode();
        for (string& w : words) {
            TrieNode* node = root;
            for (char c : w) {
                int idx = c - 'a';
                if (!node->children[idx]) node->children[idx] = new TrieNode();
                node = node->children[idx];
            }
            node->word = w;
        }
    }
    
    void dfs(vector<vector<char>>& board, int i, int j, TrieNode* node) {
        int m = board.size(), n = board[0].size();
        if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] == '#') return;
        
        char c = board[i][j];
        TrieNode* next = node->children[c - 'a'];
        if (!next) return;
        
        if (!next->word.empty()) {
            result.push_back(next->word);
            next->word = ""; // avoid duplicates
        }
        
        board[i][j] = '#'; // mark visited
        dfs(board, i + 1, j, next);
        dfs(board, i - 1, j, next);
        dfs(board, i, j + 1, next);
        dfs(board, i, j - 1, next);
        board[i][j] = c;   // restore
    }
    
public:
    vector<string> findWords(vector<vector<char>>& board, vector<string>& words) {
        result.clear();
        buildTrie(words);
        
        for (int i = 0; i < (int)board.size(); i++)
            for (int j = 0; j < (int)board[0].size(); j++)
                dfs(board, i, j, root);
        
        return result;
    }
};

int main() {
    Solution sol;
    vector<vector<char>> board = {
        {'o','a','a','n'},
        {'e','t','a','e'},
        {'i','h','k','r'},
        {'i','f','l','v'}
    };
    vector<string> words = {"oath","pea","eat","rain"};
    
    auto result = sol.findWords(board, words);
    cout << "Found words: ";
    for (auto& w : result) cout << w << " ";
    cout << endl;
    // Output: eat oath
    
    return 0;
}
