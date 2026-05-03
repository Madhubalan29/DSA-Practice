import java.util.*;
public class Bridges {
    static List<Integer>[] adj; static int[] disc, low; static boolean[] vis; static int timer=0;
    static List<int[]> bridges = new ArrayList<>();
    static void dfs(int u, int p){
        vis[u]=true; disc[u]=low[u]=timer++;
        for(int v:adj[u]){if(v==p)continue;if(vis[v])low[u]=Math.min(low[u],disc[v]);
        else{dfs(v,u);low[u]=Math.min(low[u],low[v]);if(low[v]>disc[u])bridges.add(new int[]{u,v});}}
    }
    public static void main(String[] args){
        int n=5; adj=new List[n]; disc=new int[n]; low=new int[n]; vis=new boolean[n];
        for(int i=0;i<n;i++)adj[i]=new ArrayList<>();
        int[][] edges={{0,1},{1,2},{2,0},{1,3},{3,4}};
        for(int[] e:edges){adj[e[0]].add(e[1]);adj[e[1]].add(e[0]);}
        for(int i=0;i<n;i++)if(!vis[i])dfs(i,-1);
        for(int[] b:bridges) System.out.println(b[0]+" - "+b[1]);
    }
}
