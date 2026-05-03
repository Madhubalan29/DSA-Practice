import java.util.*;
public class HLD {
    static List<Integer>[] adj;
    static int[] parent, depth, heavy, head, pos, sz;
    static int curPos = 0;
    
    static int dfsSz(int v, int p) {
        parent[v] = p; sz[v] = 1; int maxSz = 0; heavy[v] = -1;
        for (int u : adj[v]) {
            if (u == p) continue;
            depth[u] = depth[v] + 1; sz[v] += dfsSz(u, v);
            if (sz[u] > maxSz) { maxSz = sz[u]; heavy[v] = u; }
        }
        return sz[v];
    }
    
    static void decompose(int v, int h) {
        head[v] = h; pos[v] = curPos++;
        if (heavy[v] != -1) decompose(heavy[v], h);
        for (int u : adj[v]) if (u != parent[v] && u != heavy[v]) decompose(u, u);
    }
    
    public static void main(String[] args) {
        int n = 5;
        adj = new List[n+1]; for (int i = 0; i <= n; i++) adj[i] = new ArrayList<>();
        parent = new int[n+1]; depth = new int[n+1]; heavy = new int[n+1];
        head = new int[n+1]; pos = new int[n+1]; sz = new int[n+1];
        adj[1].add(2); adj[2].add(1); adj[1].add(3); adj[3].add(1);
        adj[2].add(4); adj[4].add(2); adj[2].add(5); adj[5].add(2);
        dfsSz(1, 1); decompose(1, 1);
        for (int i = 1; i <= n; i++) System.out.println("Node " + i + " -> pos:" + pos[i] + " head:" + head[i]);
    }
}
