import java.util.*;
public class KruskalMST {
    static int[] parent, rank_;
    static int find(int x) { return parent[x] == x ? x : (parent[x] = find(parent[x])); }
    static boolean unite(int x, int y) {
        x=find(x); y=find(y); if(x==y) return false;
        if(rank_[x]<rank_[y]){int t=x;x=y;y=t;} parent[y]=x; if(rank_[x]==rank_[y])rank_[x]++;
        return true;
    }
    public static void main(String[] args) {
        int n = 4; parent = new int[n]; rank_ = new int[n];
        for (int i = 0; i < n; i++) parent[i] = i;
        int[][] edges = {{1,0,1},{1,0,2},{2,1,2},{3,1,3},{4,2,3}};
        Arrays.sort(edges, (a,b)->a[0]-b[0]);
        int cost = 0;
        for (int[] e : edges) if (unite(e[1], e[2])) cost += e[0];
        System.out.println("MST cost: " + cost);
    }
}
