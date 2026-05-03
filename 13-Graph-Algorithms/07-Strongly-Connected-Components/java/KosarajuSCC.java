import java.util.*;
public class KosarajuSCC {
    static List<Integer>[] adj, radj; static boolean[] vis; static List<Integer> order = new ArrayList<>();
    static void dfs1(int u){vis[u]=true;for(int v:adj[u])if(!vis[v])dfs1(v);order.add(u);}
    static List<Integer> dfs2(int u){vis[u]=true;List<Integer> comp=new ArrayList<>();comp.add(u);for(int v:radj[u])if(!vis[v])comp.addAll(dfs2(v));return comp;}
    public static void main(String[] args) {
        int n=5; adj=new List[n]; radj=new List[n]; vis=new boolean[n];
        for(int i=0;i<n;i++){adj[i]=new ArrayList<>();radj[i]=new ArrayList<>();}
        int[][] edges={{0,1},{1,2},{2,0},{1,3},{3,4}};
        for(int[] e:edges){adj[e[0]].add(e[1]);radj[e[1]].add(e[0]);}
        for(int i=0;i<n;i++)if(!vis[i])dfs1(i);
        Arrays.fill(vis,false); int cnt=0;
        for(int i=n-1;i>=0;i--){int u=order.get(i);if(!vis[u]){System.out.println("SCC "+(++cnt)+": "+dfs2(u));}}
    }
}
