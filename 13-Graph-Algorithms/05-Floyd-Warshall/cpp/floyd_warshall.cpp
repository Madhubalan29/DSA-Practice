/* Floyd-Warshall - All Pairs Shortest Path | Time: O(V³) */
#include <bits/stdc++.h>
using namespace std;
int main() {
    int n = 4, INF = 1e9;
    vector<vector<int>> dist(n, vector<int>(n, INF));
    for (int i = 0; i < n; i++) dist[i][i] = 0;
    // Add edges: u, v, w
    auto addEdge = [&](int u, int v, int w) { dist[u][v] = w; };
    addEdge(0,1,3); addEdge(0,3,7); addEdge(1,0,8); addEdge(1,2,2);
    addEdge(2,0,5); addEdge(2,3,1); addEdge(3,0,2);
    
    for (int k = 0; k < n; k++)
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++)
                if (dist[i][k] != INF && dist[k][j] != INF)
                    dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j]);
    
    cout << "All-pairs shortest paths:" << endl;
    for (int i = 0; i < n; i++) { for (int j = 0; j < n; j++) cout << (dist[i][j]==INF?"INF":to_string(dist[i][j])) << "\t"; cout << endl; }
}
