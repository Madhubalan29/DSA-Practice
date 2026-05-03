/* TSP using DP + Bitmask | Time: O(n^2 * 2^n) | Tags: dp-bitmask, tsp */
#include <bits/stdc++.h>
using namespace std;
int n; int dist[20][20]; int dp[1<<20][20];
int tsp(int mask,int u){if(mask==(1<<n)-1)return dist[u][0];if(dp[mask][u]!=-1)return dp[mask][u];
int ans=INT_MAX;for(int v=0;v<n;v++)if(!(mask&(1<<v)))ans=min(ans,dist[u][v]+tsp(mask|(1<<v),v));return dp[mask][u]=ans;}
int main(){n=4;int d[4][4]={{0,10,15,20},{10,0,35,25},{15,35,0,30},{20,25,30,0}};
for(int i=0;i<n;i++)for(int j=0;j<n;j++)dist[i][j]=d[i][j];
memset(dp,-1,sizeof(dp));cout<<"TSP min cost: "<<tsp(1,0)<<endl;} // 80
