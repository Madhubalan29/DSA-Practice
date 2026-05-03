/* Matrix Chain Multiplication | Time: O(n^3) | Tags: interval-dp, mcm */
#include <bits/stdc++.h>
using namespace std;
int mcm(vector<int>& dims){int n=dims.size()-1;vector<vector<int>>dp(n,vector<int>(n,0));
for(int len=2;len<=n;len++)for(int i=0;i<=n-len;i++){int j=i+len-1;dp[i][j]=INT_MAX;
for(int k=i;k<j;k++)dp[i][j]=min(dp[i][j],dp[i][k]+dp[k+1][j]+dims[i]*dims[k+1]*dims[j+1]);}return dp[0][n-1];}
int main(){vector<int>dims={40,20,30,10,30};cout<<mcm(dims)<<endl;} // 26000
