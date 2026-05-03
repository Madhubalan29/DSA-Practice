import java.util.*;
public class Dijkstra {
    public static int networkDelayTime(int[][] times, int n, int k) {
        List<int[]>[] adj = new List[n + 1];
        for (int i = 0; i <= n; i++) adj[i] = new ArrayList<>();
        for (int[] t : times) adj[t[0]].add(new int[]{t[1], t[2]});
        int[] dist = new int[n + 1]; Arrays.fill(dist, Integer.MAX_VALUE); dist[k] = 0;
        PriorityQueue<int[]> pq = new PriorityQueue<>((a,b)->a[0]-b[0]);
        pq.offer(new int[]{0, k});
        while (!pq.isEmpty()) {
            int[] cur = pq.poll();
            if (cur[0] > dist[cur[1]]) continue;
            for (int[] e : adj[cur[1]]) {
                if (dist[cur[1]] + e[1] < dist[e[0]]) {
                    dist[e[0]] = dist[cur[1]] + e[1]; pq.offer(new int[]{dist[e[0]], e[0]});
                }
            }
        }
        int ans = 0;
        for (int i = 1; i <= n; i++) ans = Math.max(ans, dist[i]);
        return ans == Integer.MAX_VALUE ? -1 : ans;
    }
    public static void main(String[] args) {
        System.out.println("Delay: " + networkDelayTime(new int[][]{{2,1,1},{2,3,1},{3,4,1}}, 4, 2)); // 2
    }
}
