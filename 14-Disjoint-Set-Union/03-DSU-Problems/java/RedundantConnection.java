public class RedundantConnection {
    static int[] p = new int[1001];
    static int find(int x){return p[x]==x?x:(p[x]=find(p[x]));}
    public static int[] findRedundantConnection(int[][] edges){
        for(int i=1;i<=1000;i++)p[i]=i;
        for(int[] e:edges){int a=find(e[0]),b=find(e[1]);if(a==b)return e;p[a]=b;}return new int[]{};
    }
    public static void main(String[] args){int[] r=findRedundantConnection(new int[][]{{1,2},{1,3},{2,3}});System.out.println(r[0]+" "+r[1]);}
}
