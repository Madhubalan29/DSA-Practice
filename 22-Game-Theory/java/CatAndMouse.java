/*
 * Problem: Cat and Mouse
 * Source:  LeetCode 913 - https://leetcode.com/problems/cat-and-mouse/
 * 
 * Approach: BFS from terminal states, propagating game results backwards.
 * Time Complexity:  O(n^3)
 * Space Complexity: O(n^2)
 * 
 * Tags: game-theory, bfs, graph, minimax
 */

import java.util.*;

public class CatAndMouse {
    
    static final int DRAW = 0, MOUSE_WIN = 1, CAT_WIN = 2;
    
    public int catMouseGame(int[][] graph) {
        int n = graph.length;
        int[][][] result = new int[n][n][2];
        int[][][] degree = new int[n][n][2];
        
        for (int m = 0; m < n; m++) {
            for (int c = 0; c < n; c++) {
                degree[m][c][0] = graph[m].length;
                degree[m][c][1] = graph[c].length;
                for (int next : graph[c]) {
                    if (next == 0) degree[m][c][1]--;
                }
            }
        }
        
        Queue<int[]> queue = new LinkedList<>(); // {mouse, cat, turn, result}
        
        for (int c = 1; c < n; c++) {
            for (int t = 0; t < 2; t++) {
                result[0][c][t] = MOUSE_WIN;
                queue.offer(new int[]{0, c, t, MOUSE_WIN});
                result[c][c][t] = CAT_WIN;
                queue.offer(new int[]{c, c, t, CAT_WIN});
            }
        }
        
        while (!queue.isEmpty()) {
            int[] state = queue.poll();
            int m = state[0], c = state[1], t = state[2], r = state[3];
            int prevTurn = 1 - t;
            
            if (prevTurn == 0) { // mouse's previous turn
                for (int prevM : graph[m]) {
                    if (result[prevM][c][prevTurn] != DRAW) continue;
                    if (r == MOUSE_WIN) {
                        result[prevM][c][prevTurn] = MOUSE_WIN;
                        queue.offer(new int[]{prevM, c, prevTurn, MOUSE_WIN});
                    } else {
                        if (--degree[prevM][c][prevTurn] == 0) {
                            result[prevM][c][prevTurn] = CAT_WIN;
                            queue.offer(new int[]{prevM, c, prevTurn, CAT_WIN});
                        }
                    }
                }
            } else { // cat's previous turn
                for (int prevC : graph[c]) {
                    if (prevC == 0) continue;
                    if (result[m][prevC][prevTurn] != DRAW) continue;
                    if (r == CAT_WIN) {
                        result[m][prevC][prevTurn] = CAT_WIN;
                        queue.offer(new int[]{m, prevC, prevTurn, CAT_WIN});
                    } else {
                        if (--degree[m][prevC][prevTurn] == 0) {
                            result[m][prevC][prevTurn] = MOUSE_WIN;
                            queue.offer(new int[]{m, prevC, prevTurn, MOUSE_WIN});
                        }
                    }
                }
            }
        }
        
        return result[1][2][0];
    }
    
    public static void main(String[] args) {
        CatAndMouse sol = new CatAndMouse();
        int[][] graph = {{2,5},{3},{0,4,5},{1,4,5},{2,3},{0,2,3}};
        System.out.println("Result: " + sol.catMouseGame(graph));
    }
}
