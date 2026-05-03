/*
 * Problem: Number of Islands
 * Source:  LeetCode 200
 * Approach: BFS/DFS on grid. Mark visited cells.
 * Time: O(m*n), Space: O(m*n)
 * Tags: bfs, dfs, graph, grid
 */
#include <bits/stdc++.h>
using namespace std;

int dx[] = {0,0,1,-1}, dy[] = {1,-1,0,0};

void dfs(vector<vector<char>>& grid, int i, int j) {
    if (i < 0 || j < 0 || i >= grid.size() || j >= grid[0].size() || grid[i][j] != '1') return;
    grid[i][j] = '0';
    for (int d = 0; d < 4; d++) dfs(grid, i + dx[d], j + dy[d]);
}

int numIslands(vector<vector<char>>& grid) {
    int count = 0;
    for (int i = 0; i < grid.size(); i++)
        for (int j = 0; j < grid[0].size(); j++)
            if (grid[i][j] == '1') { dfs(grid, i, j); count++; }
    return count;
}

int main() {
    vector<vector<char>> grid = {
        {'1','1','0','0','0'},
        {'1','1','0','0','0'},
        {'0','0','1','0','0'},
        {'0','0','0','1','1'}
    };
    cout << "Islands: " << numIslands(grid) << endl; // 3
    return 0;
}
