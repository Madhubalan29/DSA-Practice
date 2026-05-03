import java.util.*;
public class CheapestFlights {
    public static int findCheapestPrice(int n, int[][] flights, int src, int dst, int k) {
        int[] dist = new int[n]; Arrays.fill(dist, Integer.MAX_VALUE); dist[src] = 0;
        for (int i = 0; i <= k; i++) {
            int[] tmp = dist.clone();
            for (int[] f : flights)
                if (dist[f[0]] != Integer.MAX_VALUE) tmp[f[1]] = Math.min(tmp[f[1]], dist[f[0]] + f[2]);
            dist = tmp;
        }
        return dist[dst] == Integer.MAX_VALUE ? -1 : dist[dst];
    }
    public static void main(String[] args) {
        System.out.println(findCheapestPrice(3, new int[][]{{0,1,100},{1,2,100},{0,2,500}}, 0, 2, 1)); // 200
    }
}
