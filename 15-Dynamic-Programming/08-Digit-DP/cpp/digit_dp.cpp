/* Digit DP: Count numbers from 1 to N with no consecutive 1s in binary | Tags: digit-dp */
#include <bits/stdc++.h>
using namespace std;
int findIntegers(int n){vector<int>bits;while(n){bits.push_back(n&1);n>>=1;}reverse(bits.begin(),bits.end());
int sz=bits.size();vector<vector<vector<int>>>dp(sz+1,vector<vector<int>>(2,vector<int>(2,-1)));
function<int(int,int,int)>solve=[&](int pos,int prev,int tight)->int{if(pos==sz)return 1;if(dp[pos][prev][tight]!=-1)return dp[pos][prev][tight];
int limit=tight?bits[pos]:1;int res=0;for(int d=0;d<=limit;d++){if(prev==1&&d==1)continue;res+=solve(pos+1,d,tight&&(d==limit));}return dp[pos][prev][tight]=res;};
return solve(0,0,1);}
int main(){cout<<findIntegers(5)<<endl;} // 5
