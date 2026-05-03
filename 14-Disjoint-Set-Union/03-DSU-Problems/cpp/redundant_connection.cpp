/* Redundant Connection | LeetCode 684 | Tags: dsu */
#include <bits/stdc++.h>
using namespace std;
int p[1005];
int find(int x){return p[x]==x?x:p[x]=find(p[x]);}
vector<int> findRedundantConnection(vector<vector<int>>& edges){
    for(int i=1;i<=1000;i++)p[i]=i;
    for(auto&e:edges){int a=find(e[0]),b=find(e[1]);if(a==b)return e;p[a]=b;}return {};
}
int main(){vector<vector<int>>e={{1,2},{1,3},{2,3}};auto r=findRedundantConnection(e);cout<<r[0]<<" "<<r[1]<<endl;}
