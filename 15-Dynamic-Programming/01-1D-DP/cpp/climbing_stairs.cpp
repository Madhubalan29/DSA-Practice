/* Climbing Stairs | LeetCode 70 | Time: O(n), Space: O(1) | Tags: 1d-dp */
#include <bits/stdc++.h>
using namespace std;
int climbStairs(int n){if(n<=2)return n;int a=1,b=2;for(int i=3;i<=n;i++){int c=a+b;a=b;b=c;}return b;}
int main(){cout<<climbStairs(5)<<endl;} // 8
