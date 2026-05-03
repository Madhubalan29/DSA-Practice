import java.util.*;
public class SumDistancesTree { static List<Integer>[] adj; static int[] cnt, ans;
    static void dfs(int u,int p){cnt[u]=1;for(int v:adj[u])if(v!=p){dfs(v,u);cnt[u]+=cnt[v];ans[u]+=ans[v]+cnt[v];}}
    static void dfs2(int u,int p,int n){for(int v:adj[u])if(v!=p){ans[v]=ans[u]-cnt[v]+(n-cnt[v]);dfs2(v,u,n);}}
    public static void main(String[] args){int n=6;adj=new List[n];cnt=new int[n];ans=new int[n];for(int i=0;i<n;i++)adj[i]=new ArrayList<>();
    int[][] e={{0,1},{0,2},{2,3},{2,4},{2,5}};for(int[] x:e){adj[x[0]].add(x[1]);adj[x[1]].add(x[0]);}dfs(0,-1);dfs2(0,-1,n);for(int x:ans)System.out.print(x+" ");}}
