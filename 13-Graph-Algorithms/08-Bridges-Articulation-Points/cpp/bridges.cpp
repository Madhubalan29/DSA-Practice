/* Bridges in Graph (Tarjan's) | Time: O(V+E) | Tags: bridges, tarjan */
#include <bits/stdc++.h>
using namespace std;
const int MAXN=1e5+5;
vector<int> adj[MAXN]; int disc[MAXN], low[MAXN], timer_=0; bool vis[MAXN];
vector<pair<int,int>> bridges;
void dfs(int u, int p) {
    vis[u]=true; disc[u]=low[u]=timer_++;
    for(int v:adj[u]){
        if(v==p) continue;
        if(vis[v]) low[u]=min(low[u],disc[v]);
        else{dfs(v,u);low[u]=min(low[u],low[v]);if(low[v]>disc[u])bridges.push_back({u,v});}
    }
}
int main(){
    int n=5;
    vector<pair<int,int>>edges={{0,1},{1,2},{2,0},{1,3},{3,4}};
    for(auto&[u,v]:edges){adj[u].push_back(v);adj[v].push_back(u);}
    for(int i=0;i<n;i++)if(!vis[i])dfs(i,-1);
    cout<<"Bridges:"<<endl;
    for(auto&[u,v]:bridges)cout<<u<<" - "<<v<<endl;
}
