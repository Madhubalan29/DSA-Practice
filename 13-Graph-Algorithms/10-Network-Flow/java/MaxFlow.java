import java.util.*;
public class MaxFlow {
    static int[][] cap; static int[] parent;
    static boolean bfs(int s,int t,int n){parent=new int[n];Arrays.fill(parent,-1);parent[s]=-2;Queue<Integer> q=new LinkedList<>();q.add(s);while(!q.isEmpty()){int u=q.poll();for(int v=0;v<n;v++)if(parent[v]==-1&&cap[u][v]>0){parent[v]=u;if(v==t)return true;q.add(v);}}return false;}
    static int maxFlow(int s,int t,int n){int flow=0;while(bfs(s,t,n)){int pf=Integer.MAX_VALUE,u=t;while(u!=s){pf=Math.min(pf,cap[parent[u]][u]);u=parent[u];}u=t;while(u!=s){cap[parent[u]][u]-=pf;cap[u][parent[u]]+=pf;u=parent[u];}flow+=pf;}return flow;}
    public static void main(String[] args){cap=new int[6][6];cap[0][1]=16;cap[0][2]=13;cap[1][3]=12;cap[2][4]=14;cap[3][5]=20;cap[4][5]=4;System.out.println("Max Flow: "+maxFlow(0,5,6));}
}
