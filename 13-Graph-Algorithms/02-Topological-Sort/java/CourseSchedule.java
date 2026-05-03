import java.util.*;
public class CourseSchedule {
    public static int[] findOrder(int n, int[][] prerequisites) {
        List<List<Integer>> adj = new ArrayList<>();
        int[] indegree = new int[n];
        for (int i = 0; i < n; i++) adj.add(new ArrayList<>());
        for (int[] p : prerequisites) { adj.get(p[1]).add(p[0]); indegree[p[0]]++; }
        Queue<Integer> q = new LinkedList<>();
        for (int i = 0; i < n; i++) if (indegree[i] == 0) q.add(i);
        int[] order = new int[n]; int idx = 0;
        while (!q.isEmpty()) {
            int u = q.poll(); order[idx++] = u;
            for (int v : adj.get(u)) if (--indegree[v] == 0) q.add(v);
        }
        return idx == n ? order : new int[]{};
    }
    public static void main(String[] args) {
        int[] order = findOrder(4, new int[][]{{1,0},{2,0},{3,1},{3,2}});
        for (int x : order) System.out.print(x + " ");
    }
}
