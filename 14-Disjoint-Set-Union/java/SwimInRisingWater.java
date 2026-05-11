/*
 * Problem: Swim in Rising Water
 * Source:  LeetCode 778 - https://leetcode.com/problems/swim-in-rising-water/
 * 
 * Approach: Sort cells by elevation, union adjacent visited cells.
 * Time Complexity:  O(n^2 log n)
 * Space Complexity: O(n^2)
 * 
 * Tags: dsu, union-find, sorting, grid
 */

import java.util.*;

public class SwimInRisingWater {
    
    int[] parent, rank;
    
    int find(int x) { return parent[x] == x ? x : (parent[x] = find(parent[x])); }
    
    void unite(int x, int y) {
        x = find(x); y = find(y);
        if (x == y) return;
        if (rank[x] < rank[y]) { int t = x; x = y; y = t; }
        parent[y] = x;
        if (rank[x] == rank[y]) rank[x]++;
    }
    
    boolean connected(int x, int y) { return find(x) == find(y); }
    
    public int swimInWater(int[][] grid) {
        int n = grid.length;
        parent = new int[n * n];
        rank = new int[n * n];
        for (int i = 0; i < n * n; i++) parent[i] = i;
        
        int[][] cells = new int[n * n][3]; // {elev, row, col}
        int idx = 0;
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++)
                cells[idx++] = new int[]{grid[i][j], i, j};
        
        Arrays.sort(cells, (a, b) -> a[0] - b[0]);
        
        boolean[][] visited = new boolean[n][n];
        int[] dx = {0, 0, 1, -1}, dy = {1, -1, 0, 0};
        
        for (int[] cell : cells) {
            int r = cell[1], c = cell[2];
            visited[r][c] = true;
            
            for (int d = 0; d < 4; d++) {
                int nr = r + dx[d], nc = c + dy[d];
                if (nr >= 0 && nr < n && nc >= 0 && nc < n && visited[nr][nc]) {
                    unite(r * n + c, nr * n + nc);
                }
            }
            
            if (connected(0, n * n - 1)) return cell[0];
        }
        
        return -1;
    }
    
    public static void main(String[] args) {
        SwimInRisingWater sol = new SwimInRisingWater();
        System.out.println("Min time: " + sol.swimInWater(new int[][]{{0, 2}, {1, 3}})); // 3
    }
}
