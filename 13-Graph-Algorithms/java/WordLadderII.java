/*
 * Problem: Word Ladder II
 * Source:  LeetCode 126 - https://leetcode.com/problems/word-ladder-ii/
 * 
 * Approach: BFS for distance map + DFS backtrack for all shortest paths.
 * Time Complexity:  O(n * L^2 * 26) + O(paths)
 * Space Complexity: O(n * L)
 * 
 * Tags: graph, bfs, dfs, backtracking
 */

import java.util.*;

public class WordLadderII {
    
    public List<List<String>> findLadders(String beginWord, String endWord, List<String> wordList) {
        Set<String> wordSet = new HashSet<>(wordList);
        List<List<String>> result = new ArrayList<>();
        if (!wordSet.contains(endWord)) return result;
        
        Map<String, Integer> dist = new HashMap<>();
        dist.put(beginWord, 0);
        Queue<String> queue = new LinkedList<>();
        queue.offer(beginWord);
        
        while (!queue.isEmpty()) {
            String word = queue.poll();
            char[] chars = word.toCharArray();
            for (int i = 0; i < chars.length; i++) {
                char orig = chars[i];
                for (char c = 'a'; c <= 'z'; c++) {
                    chars[i] = c;
                    String next = new String(chars);
                    if (wordSet.contains(next) && !dist.containsKey(next)) {
                        dist.put(next, dist.get(word) + 1);
                        queue.offer(next);
                    }
                }
                chars[i] = orig;
            }
        }
        
        if (!dist.containsKey(endWord)) return result;
        
        List<String> path = new ArrayList<>();
        path.add(endWord);
        dfs(endWord, beginWord, dist, path, result);
        return result;
    }
    
    void dfs(String word, String beginWord, Map<String, Integer> dist, List<String> path, List<List<String>> result) {
        if (word.equals(beginWord)) {
            List<String> reversed = new ArrayList<>(path);
            Collections.reverse(reversed);
            result.add(reversed);
            return;
        }
        
        char[] chars = word.toCharArray();
        for (int i = 0; i < chars.length; i++) {
            char orig = chars[i];
            for (char c = 'a'; c <= 'z'; c++) {
                chars[i] = c;
                String prev = new String(chars);
                if (dist.containsKey(prev) && dist.get(prev) == dist.get(word) - 1) {
                    path.add(prev);
                    dfs(prev, beginWord, dist, path, result);
                    path.remove(path.size() - 1);
                }
            }
            chars[i] = orig;
        }
    }
    
    public static void main(String[] args) {
        WordLadderII sol = new WordLadderII();
        List<String> wordList = Arrays.asList("hot","dot","dog","lot","log","cog");
        List<List<String>> result = sol.findLadders("hit", "cog", wordList);
        System.out.println("All shortest paths: " + result);
    }
}
