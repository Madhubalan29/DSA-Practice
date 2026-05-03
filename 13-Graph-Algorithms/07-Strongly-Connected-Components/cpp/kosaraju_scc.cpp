/* Kosaraju's SCC | Time: O(V+E) | Tags: scc, graph */
#include <bits/stdc++.h>
using namespace std;
const int MAXN = 1e5+5;
vector<int> adj[MAXN], radj[MAXN]; bool vis[MAXN]; vector<int> order, comp;
void dfs1(int u) { vis[u]=true; for(int v:adj[u]) if(!vis[v]) dfs1(v); order.push_back(u); }
void dfs2(int u) { vis[u]=true; comp.push_back(u); for(int v:radj[u]) if(!vis[v]) dfs2(v); }
int main() {
    int n=5, m=5;
    vector<pair<int,int>> edges={{0,1},{1,2},{2,0},{1,3},{3,4}};
    for(auto&[u,v]:edges){adj[u].push_back(v);radj[v].push_back(u);}
    memset(vis,false,sizeof(vis));
    for(int i=0;i<n;i++) if(!vis[i]) dfs1(i);
    memset(vis,false,sizeof(vis));
    int sccCount=0;
    for(int i=n-1;i>=0;i--){
        int u=order[i]; if(!vis[u]){comp.clear(); dfs2(u); sccCount++;
            cout<<"SCC "<<sccCount<<": "; for(int x:comp) cout<<x<<" "; cout<<endl;
        }
    }
}
