/* Graph + DP: Longest Path in DAG | Time: O(V+E) | Tags: graph-dp, dag, topological */
#include <bits/stdc++.h>
using namespace std;
int main(){
    int n=6;
    vector<vector<pair<int,int>>> adj(n);
    // DAG edges: u->v with weight w
    adj[0].push_back({1,5}); adj[0].push_back({2,3}); adj[1].push_back({3,6}); adj[1].push_back({2,2});
    adj[2].push_back({4,4}); adj[2].push_back({5,2}); adj[3].push_back({5,1}); adj[3].push_back({4,-1});
    adj[4].push_back({5,1});
    
    // Topological sort
    vector<int> indeg(n,0); for(int u=0;u<n;u++) for(auto&[v,w]:adj[u]) indeg[v]++;
    queue<int> q; for(int i=0;i<n;i++) if(!indeg[i]) q.push(i);
    vector<int> topo; while(!q.empty()){int u=q.front();q.pop();topo.push_back(u);for(auto&[v,w]:adj[u])if(--indeg[v]==0)q.push(v);}
    
    // DP: longest path from source 0
    vector<int> dist(n, INT_MIN); dist[0]=0;
    for(int u:topo) if(dist[u]!=INT_MIN) for(auto&[v,w]:adj[u]) dist[v]=max(dist[v],dist[u]+w);
    
    cout<<"Longest distances from 0:"<<endl;
    for(int i=0;i<n;i++) cout<<i<<": "<<(dist[i]==INT_MIN?"INF":to_string(dist[i]))<<endl;
}
