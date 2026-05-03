/* 0/1 Knapsack | Classic DP | Tags: knapsack, dp */
#include <bits/stdc++.h>
using namespace std;
int knapsack(int W,vector<int>& wt,vector<int>& val){int n=wt.size();vector<int>dp(W+1,0);
for(int i=0;i<n;i++)for(int w=W;w>=wt[i];w--)dp[w]=max(dp[w],dp[w-wt[i]]+val[i]);return dp[W];}
int main(){vector<int>wt={1,3,4,5},val={1,4,5,7};cout<<knapsack(7,wt,val)<<endl;} // 9
