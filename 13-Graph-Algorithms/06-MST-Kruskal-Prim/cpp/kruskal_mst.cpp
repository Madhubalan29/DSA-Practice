/* Kruskal's MST | Time: O(E log E) | Tags: mst, dsu, graph */
#include <bits/stdc++.h>
using namespace std;
int parent_[100005], rnk[100005];
int find(int x) { return parent_[x] == x ? x : parent_[x] = find(parent_[x]); }
bool unite(int x, int y) {
    x = find(x); y = find(y); if (x == y) return false;
    if (rnk[x] < rnk[y]) swap(x, y); parent_[y] = x; if (rnk[x]==rnk[y]) rnk[x]++;
    return true;
}
int main() {
    int n = 4, m = 5;
    vector<tuple<int,int,int>> edges = {{1,0,1},{1,0,2},{2,1,2},{3,1,3},{4,2,3}};
    sort(edges.begin(), edges.end());
    for (int i = 0; i < n; i++) { parent_[i] = i; rnk[i] = 0; }
    int mstCost = 0, edgesUsed = 0;
    for (auto& [w, u, v] : edges) {
        if (unite(u, v)) { mstCost += w; edgesUsed++; if (edgesUsed == n-1) break; }
    }
    cout << "MST cost: " << mstCost << endl; // 7
}
