public class FloydWarshall {
    public static void main(String[] args) {
        int n = 4, INF = (int)1e9;
        int[][] dist = new int[n][n];
        for (int[] row : dist) java.util.Arrays.fill(row, INF);
        for (int i = 0; i < n; i++) dist[i][i] = 0;
        dist[0][1]=3; dist[0][3]=7; dist[1][0]=8; dist[1][2]=2; dist[2][0]=5; dist[2][3]=1; dist[3][0]=2;
        for (int k=0;k<n;k++) for (int i=0;i<n;i++) for (int j=0;j<n;j++)
            if (dist[i][k]!=INF && dist[k][j]!=INF) dist[i][j] = Math.min(dist[i][j], dist[i][k]+dist[k][j]);
        for (int[] row : dist) { for (int x : row) System.out.print((x==INF?"INF":x) + "\t"); System.out.println(); }
    }
}
