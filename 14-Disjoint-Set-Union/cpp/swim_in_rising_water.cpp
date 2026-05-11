/*
 * Problem: Swim in Rising Water
 * Source:  LeetCode 778 - https://leetcode.com/problems/swim-in-rising-water/
 * 
 * Approach: Sort all cells by elevation. Process in order, unioning adjacent cells.
 *           Answer is the elevation when (0,0) and (n-1,n-1) become connected.
 * Time Complexity:  O(n^2 log n) for sorting + O(n^2 α(n^2)) for DSU
 * Space Complexity: O(n^2)
 * 
 * Tags: dsu, union-find, sorting, grid
 */

#include <bits/stdc++.h>
using namespace std;

class DSU {
    vector<int> parent, rank_;
public:
    DSU(int n) : parent(n), rank_(n, 0) {
        iota(parent.begin(), parent.end(), 0);
    }
    int find(int x) {
        return parent[x] == x ? x : parent[x] = find(parent[x]);
    }
    void unite(int x, int y) {
        x = find(x); y = find(y);
        if (x == y) return;
        if (rank_[x] < rank_[y]) swap(x, y);
        parent[y] = x;
        if (rank_[x] == rank_[y]) rank_[x]++;
    }
    bool connected(int x, int y) {
        return find(x) == find(y);
    }
};

int swimInWater(vector<vector<int>>& grid) {
    int n = grid.size();
    
    // Sort cells by elevation
    vector<pair<int, pair<int,int>>> cells;
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
            cells.push_back({grid[i][j], {i, j}});
    
    sort(cells.begin(), cells.end());
    
    DSU dsu(n * n);
    vector<vector<bool>> visited(n, vector<bool>(n, false));
    int dx[] = {0, 0, 1, -1};
    int dy[] = {1, -1, 0, 0};
    
    for (auto& [elev, pos] : cells) {
        auto [r, c] = pos;
        visited[r][c] = true;
        
        for (int d = 0; d < 4; d++) {
            int nr = r + dx[d], nc = c + dy[d];
            if (nr >= 0 && nr < n && nc >= 0 && nc < n && visited[nr][nc]) {
                dsu.unite(r * n + c, nr * n + nc);
            }
        }
        
        if (dsu.connected(0, n * n - 1)) return elev;
    }
    
    return -1;
}

int main() {
    vector<vector<int>> grid = {
        {0, 2},
        {1, 3}
    };
    cout << "Min time: " << swimInWater(grid) << endl;
    // Output: 3
    
    return 0;
}
