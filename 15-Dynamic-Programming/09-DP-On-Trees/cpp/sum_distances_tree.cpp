/* Sum of Distances in Tree | LeetCode 834 | Tags: dp-on-trees, rerooting */
#include <bits/stdc++.h>
using namespace std;
vector<int>adj[30005];int cnt[30005],ans[30005];
void dfs(int u,int p){cnt[u]=1;for(int v:adj[u])if(v!=p){dfs(v,u);cnt[u]+=cnt[v];ans[u]+=ans[v]+cnt[v];}}
void dfs2(int u,int p,int n){for(int v:adj[u])if(v!=p){ans[v]=ans[u]-cnt[v]+(n-cnt[v]);dfs2(v,u,n);}}
int main(){int n=6;vector<pair<int,int>>edges={{0,1},{0,2},{2,3},{2,4},{2,5}};
for(auto&[u,v]:edges){adj[u].push_back(v);adj[v].push_back(u);}
dfs(0,-1);dfs2(0,-1,n);for(int i=0;i<n;i++)cout<<ans[i]<<" ";} // 8 12 6 10 10 10
