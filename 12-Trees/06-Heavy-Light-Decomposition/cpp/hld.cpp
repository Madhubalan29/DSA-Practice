/*
 * Problem: Heavy-Light Decomposition (Path Queries on Tree)
 * Source:  CP-Algorithms / CSES
 * Approach: Decompose tree into chains for path queries using segment tree.
 * Time: O(n) build, O(log²n) per query
 * Tags: hld, tree, segment-tree
 */
#include <bits/stdc++.h>
using namespace std;

const int MAXN = 1e5 + 5;
vector<int> adj[MAXN];
int parent_[MAXN], depth_[MAXN], heavy[MAXN], head_[MAXN], pos[MAXN], sz[MAXN];
int cur_pos;

int dfs_sz(int v, int p) {
    parent_[v] = p; sz[v] = 1; int maxSz = 0; heavy[v] = -1;
    for (int u : adj[v]) {
        if (u == p) continue;
        depth_[u] = depth_[v] + 1;
        sz[v] += dfs_sz(u, v);
        if (sz[u] > maxSz) { maxSz = sz[u]; heavy[v] = u; }
    }
    return sz[v];
}

void decompose(int v, int h) {
    head_[v] = h; pos[v] = cur_pos++;
    if (heavy[v] != -1) decompose(heavy[v], h);
    for (int u : adj[v])
        if (u != parent_[v] && u != heavy[v]) decompose(u, u);
}

void init(int root) { cur_pos = 0; dfs_sz(root, root); decompose(root, root); }

int main() {
    int n = 5;
    adj[1].push_back(2); adj[2].push_back(1);
    adj[1].push_back(3); adj[3].push_back(1);
    adj[2].push_back(4); adj[4].push_back(2);
    adj[2].push_back(5); adj[5].push_back(2);
    init(1);
    cout << "HLD positions: ";
    for (int i = 1; i <= n; i++) cout << i << "->pos:" << pos[i] << " head:" << head_[i] << "  ";
    cout << endl;
    return 0;
}
