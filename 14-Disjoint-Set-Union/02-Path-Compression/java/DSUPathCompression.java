public class DSU {
    int[] parent, rank;
    DSU(int n){parent=new int[n];rank=new int[n];for(int i=0;i<n;i++)parent[i]=i;}
    int find(int x){return parent[x]==x?x:(parent[x]=find(parent[x]));}
    boolean unite(int x,int y){x=find(x);y=find(y);if(x==y)return false;if(rank[x]<rank[y]){int t=x;x=y;y=t;}parent[y]=x;if(rank[x]==rank[y])rank[x]++;return true;}
    public static void main(String[] args){DSU d=new DSU(5);d.unite(0,1);d.unite(2,3);d.unite(1,3);System.out.println(d.find(0)==d.find(3));}
}
