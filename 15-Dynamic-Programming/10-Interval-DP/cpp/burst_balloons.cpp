/* Burst Balloons | LeetCode 312 | Tags: interval-dp */
#include <bits/stdc++.h>
using namespace std;
int maxCoins(vector<int>& nums){nums.insert(nums.begin(),1);nums.push_back(1);int n=nums.size();
vector<vector<int>>dp(n,vector<int>(n,0));
for(int len=2;len<n;len++)for(int i=0;i+len<n;i++){int j=i+len;for(int k=i+1;k<j;k++)dp[i][j]=max(dp[i][j],dp[i][k]+dp[k][j]+nums[i]*nums[k]*nums[j]);}return dp[0][n-1];}
int main(){vector<int>nums={3,1,5,8};cout<<maxCoins(nums)<<endl;} // 167
