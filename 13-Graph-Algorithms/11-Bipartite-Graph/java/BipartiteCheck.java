import java.util.*;
public class BipartiteCheck {
    public static boolean isBipartite(int[][] graph) {
        int n = graph.length; int[] color = new int[n]; Arrays.fill(color, -1);
        for (int i = 0; i < n; i++) { if (color[i] != -1) continue;
            Queue<Integer> q = new LinkedList<>(); q.add(i); color[i] = 0;
            while (!q.isEmpty()) { int u = q.poll(); for (int v : graph[u]) {
                if (color[v]==-1){color[v]=1-color[u];q.add(v);}else if(color[v]==color[u]) return false;}}}
        return true;
    }
    public static void main(String[] args) {
        System.out.println(isBipartite(new int[][]{{1,3},{0,2},{1,3},{0,2}})); // true
    }
}
