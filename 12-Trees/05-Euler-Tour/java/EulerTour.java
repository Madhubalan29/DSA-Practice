import java.util.*;
public class EulerTour {
    static List<Integer>[] adj;
    static int[] tin, tout, euler;
    static int timer = 0;
    static void dfs(int u, int parent) {
        tin[u] = timer; euler[timer++] = u;
        for (int v : adj[u]) if (v != parent) dfs(v, u);
        tout[u] = timer; euler[timer++] = u;
    }
    public static void main(String[] args) {
        int n = 5;
        adj = new List[n + 1]; for (int i = 0; i <= n; i++) adj[i] = new ArrayList<>();
        tin = new int[n + 1]; tout = new int[n + 1]; euler = new int[2 * n];
        adj[1].add(2); adj[2].add(1); adj[1].add(3); adj[3].add(1);
        adj[2].add(4); adj[4].add(2); adj[2].add(5); adj[5].add(2);
        dfs(1, 0);
        System.out.print("Euler Tour: "); for (int i = 0; i < 2*n; i++) System.out.print(euler[i]+" ");
    }
}
