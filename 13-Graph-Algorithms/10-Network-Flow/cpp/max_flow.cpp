/* Max Flow (Edmonds-Karp / BFS-based Ford-Fulkerson) | Time: O(VE²) */
#include <bits/stdc++.h>
using namespace std;
const int MAXN=105, INF=1e9;
int cap[MAXN][MAXN], parent_[MAXN];
bool bfs(int s,int t,int n){
    memset(parent_,-1,sizeof(parent_)); parent_[s]=-2;
    queue<pair<int,int>> q; q.push({s,INF});
    while(!q.empty()){auto[u,flow]=q.front();q.pop();
        for(int v=0;v<n;v++){if(parent_[v]==-1&&cap[u][v]>0){parent_[v]=u;int nf=min(flow,cap[u][v]);if(v==t)return true;q.push({v,nf});}}}
    return false;
}
int maxFlow(int s,int t,int n){
    int flow=0;
    while(bfs(s,t,n)){
        int pathFlow=INF,u=t;
        while(u!=s){int p=parent_[u];pathFlow=min(pathFlow,cap[p][u]);u=p;}
        u=t; while(u!=s){int p=parent_[u];cap[p][u]-=pathFlow;cap[u][p]+=pathFlow;u=p;}
        flow+=pathFlow;
    }
    return flow;
}
int main(){
    cap[0][1]=16;cap[0][2]=13;cap[1][2]=10;cap[1][3]=12;cap[2][1]=4;cap[2][4]=14;cap[3][2]=9;cap[3][5]=20;cap[4][3]=7;cap[4][5]=4;
    cout<<"Max Flow: "<<maxFlow(0,5,6)<<endl; // 23
}
