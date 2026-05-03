import java.util.*;
public class LongestPathDAG {
    public static void main(String[] args) {
        int n = 6; List<int[]>[] adj = new List[n];
        for (int i=0;i<n;i++) adj[i]=new ArrayList<>();
        adj[0].add(new int[]{1,5}); adj[0].add(new int[]{2,3}); adj[1].add(new int[]{3,6});
        adj[1].add(new int[]{2,2}); adj[2].add(new int[]{4,4}); adj[2].add(new int[]{5,2});
        int[] indeg=new int[n]; for(int u=0;u<n;u++) for(int[] e:adj[u]) indeg[e[0]]++;
        Queue<Integer> q=new LinkedList<>(); for(int i=0;i<n;i++) if(indeg[i]==0) q.add(i);
        List<Integer> topo=new ArrayList<>(); while(!q.isEmpty()){int u=q.poll();topo.add(u);for(int[] e:adj[u])if(--indeg[e[0]]==0)q.add(e[0]);}
        int[] dist=new int[n]; Arrays.fill(dist,Integer.MIN_VALUE); dist[0]=0;
        for(int u:topo) if(dist[u]!=Integer.MIN_VALUE) for(int[] e:adj[u]) dist[e[0]]=Math.max(dist[e[0]],dist[u]+e[1]);
        for(int i=0;i<n;i++) System.out.println(i+": "+dist[i]);
    }
}
