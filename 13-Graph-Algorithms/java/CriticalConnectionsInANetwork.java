/*
 * Problem: Critical Connections in a Network (Bridges)
 * Source:  LeetCode 1192 - https://leetcode.com/problems/critical-connections-in-a-network/
 * 
 * Approach: Tarjan's algorithm with discovery time and low-link values.
 * Time Complexity:  O(V + E)
 * Space Complexity: O(V + E)
 * 
 * Tags: graph, dfs, tarjan, bridges
 */

import java.util.*;

public class CriticalConnectionsInANetwork {
    
    int timer = 0;
    
    public List<List<Integer>> criticalConnections(int n, List<List<Integer>> connections) {
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < n; i++) adj.add(new ArrayList<>());
        
        for (List<Integer> conn : connections) {
            adj.get(conn.get(0)).add(conn.get(1));
            adj.get(conn.get(1)).add(conn.get(0));
        }
        
        int[] disc = new int[n], low = new int[n];
        Arrays.fill(disc, -1);
        List<List<Integer>> bridges = new ArrayList<>();
        timer = 0;
        
        for (int i = 0; i < n; i++) {
            if (disc[i] == -1) {
                dfs(i, -1, adj, disc, low, bridges);
            }
        }
        
        return bridges;
    }
    
    void dfs(int u, int parent, List<List<Integer>> adj, int[] disc, int[] low, List<List<Integer>> bridges) {
        disc[u] = low[u] = timer++;
        
        for (int v : adj.get(u)) {
            if (v == parent) continue;
            
            if (disc[v] == -1) {
                dfs(v, u, adj, disc, low, bridges);
                low[u] = Math.min(low[u], low[v]);
                
                if (low[v] > disc[u]) {
                    bridges.add(Arrays.asList(u, v));
                }
            } else {
                low[u] = Math.min(low[u], disc[v]);
            }
        }
    }
    
    public static void main(String[] args) {
        CriticalConnectionsInANetwork sol = new CriticalConnectionsInANetwork();
        List<List<Integer>> connections = new ArrayList<>();
        connections.add(Arrays.asList(0, 1));
        connections.add(Arrays.asList(1, 2));
        connections.add(Arrays.asList(2, 0));
        connections.add(Arrays.asList(1, 3));
        
        System.out.println("Bridges: " + sol.criticalConnections(4, connections));
        // Output: [[1, 3]]
    }
}
