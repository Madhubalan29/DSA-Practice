/* Nim Game | LeetCode 292 | Tags: game-theory */
#include <bits/stdc++.h>
using namespace std;
bool canWinNim(int n){return n%4!=0;}
/* Sprague-Grundy for general game */
int grundy(int n, vector<int>& moves){if(n==0)return 0;set<int>reachable;for(int m:moves)if(n>=m)reachable.insert(grundy(n-m,moves));
int mex=0;while(reachable.count(mex))mex++;return mex;}
int main(){cout<<boolalpha<<canWinNim(4)<<endl; // false
vector<int>moves={1,2,3};cout<<"Grundy(5): "<<grundy(5,moves)<<endl;}
