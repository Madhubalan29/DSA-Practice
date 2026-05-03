import java.util.*;
public class TSPBitmask { static int n; static int[][] dist; static int[][] dp;
    static int tsp(int mask,int u){if(mask==(1<<n)-1)return dist[u][0];if(dp[mask][u]!=-1)return dp[mask][u];
    int ans=Integer.MAX_VALUE/2;for(int v=0;v<n;v++)if((mask&(1<<v))==0)ans=Math.min(ans,dist[u][v]+tsp(mask|(1<<v),v));return dp[mask][u]=ans;}
    public static void main(String[] args){n=4;dist=new int[][]{{0,10,15,20},{10,0,35,25},{15,35,0,30},{20,25,30,0}};
    dp=new int[1<<n][n];for(int[] r:dp)Arrays.fill(r,-1);System.out.println("TSP: "+tsp(1,0));}}
