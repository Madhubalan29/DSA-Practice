/*
 * Problem: Euler Tour of Tree (flatten tree to array for range queries)
 * Source:  CP-Algorithms
 * Time: O(n) build, enables O(1) subtree queries
 * Tags: euler-tour, tree, range-query
 */
#include <bits/stdc++.h>
using namespace std;

const int MAXN = 1e5 + 5;
vector<int> adj[MAXN];
int tin[MAXN], tout[MAXN], timer_ = 0;
int euler[2 * MAXN]; // Euler tour array

void dfs(int u, int parent) {
    tin[u] = timer_;
    euler[timer_++] = u;
    for (int v : adj[u]) {
        if (v != parent) dfs(v, u);
    }
    tout[u] = timer_;
    euler[timer_++] = u;
}

bool isAncestor(int u, int v) { return tin[u] <= tin[v] && tout[v] <= tout[u]; }

int main() {
    int n = 5;
    // Tree: 1-2, 1-3, 2-4, 2-5
    adj[1].push_back(2); adj[2].push_back(1);
    adj[1].push_back(3); adj[3].push_back(1);
    adj[2].push_back(4); adj[4].push_back(2);
    adj[2].push_back(5); adj[5].push_back(2);
    
    dfs(1, 0);
    
    cout << "Euler Tour: ";
    for (int i = 0; i < 2 * n; i++) cout << euler[i] << " ";
    cout << endl;
    cout << "Is 1 ancestor of 4? " << boolalpha << isAncestor(1, 4) << endl; // true
    cout << "Is 3 ancestor of 4? " << boolalpha << isAncestor(3, 4) << endl; // false
    return 0;
}
