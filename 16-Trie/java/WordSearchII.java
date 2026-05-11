/*
 * Problem: Word Search II
 * Source:  LeetCode 212 - https://leetcode.com/problems/word-search-ii/
 * 
 * Approach: Trie + DFS backtracking on the board.
 * Time Complexity:  O(m * n * 4^L)
 * Space Complexity: O(total characters in words)
 * 
 * Tags: trie, dfs, backtracking, matrix
 */

import java.util.*;

public class WordSearchII {
    
    static class TrieNode {
        TrieNode[] children = new TrieNode[26];
        String word = null;
    }
    
    TrieNode root;
    List<String> result;
    
    void buildTrie(String[] words) {
        root = new TrieNode();
        for (String w : words) {
            TrieNode node = root;
            for (char c : w.toCharArray()) {
                int idx = c - 'a';
                if (node.children[idx] == null) node.children[idx] = new TrieNode();
                node = node.children[idx];
            }
            node.word = w;
        }
    }
    
    void dfs(char[][] board, int i, int j, TrieNode node) {
        int m = board.length, n = board[0].length;
        if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] == '#') return;
        
        char c = board[i][j];
        TrieNode next = node.children[c - 'a'];
        if (next == null) return;
        
        if (next.word != null) {
            result.add(next.word);
            next.word = null;
        }
        
        board[i][j] = '#';
        dfs(board, i + 1, j, next);
        dfs(board, i - 1, j, next);
        dfs(board, i, j + 1, next);
        dfs(board, i, j - 1, next);
        board[i][j] = c;
    }
    
    public List<String> findWords(char[][] board, String[] words) {
        result = new ArrayList<>();
        buildTrie(words);
        
        for (int i = 0; i < board.length; i++)
            for (int j = 0; j < board[0].length; j++)
                dfs(board, i, j, root);
        
        return result;
    }
    
    public static void main(String[] args) {
        WordSearchII sol = new WordSearchII();
        char[][] board = {
            {'o','a','a','n'},
            {'e','t','a','e'},
            {'i','h','k','r'},
            {'i','f','l','v'}
        };
        String[] words = {"oath","pea","eat","rain"};
        System.out.println("Found words: " + sol.findWords(board, words));
    }
}
