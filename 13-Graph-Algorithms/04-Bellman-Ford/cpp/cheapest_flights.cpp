/* Bellman-Ford - Cheapest Flights Within K Stops | LeetCode 787 | Time: O(K*E) */
#include <bits/stdc++.h>
using namespace std;
int findCheapestPrice(int n, vector<vector<int>>& flights, int src, int dst, int k) {
    vector<int> dist(n, INT_MAX); dist[src] = 0;
    for (int i = 0; i <= k; i++) {
        vector<int> tmp(dist);
        for (auto& f : flights)
            if (dist[f[0]] != INT_MAX) tmp[f[1]] = min(tmp[f[1]], dist[f[0]] + f[2]);
        dist = tmp;
    }
    return dist[dst] == INT_MAX ? -1 : dist[dst];
}
int main() {
    vector<vector<int>> flights = {{0,1,100},{1,2,100},{0,2,500}};
    cout << findCheapestPrice(3, flights, 0, 2, 1) << endl; // 200
}
