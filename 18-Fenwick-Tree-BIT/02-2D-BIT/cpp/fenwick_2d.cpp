/* 2D Fenwick Tree | Tags: 2d-bit, fenwick */
#include <bits/stdc++.h>
using namespace std;
int bit2d[505][505],N,M;
void update(int x,int y,int val){for(int i=x;i<=N;i+=i&(-i))for(int j=y;j<=M;j+=j&(-j))bit2d[i][j]+=val;}
int query(int x,int y){int s=0;for(int i=x;i>0;i-=i&(-i))for(int j=y;j>0;j-=j&(-j))s+=bit2d[i][j];return s;}
int main(){N=M=3;update(1,1,1);update(2,2,2);update(3,3,3);cout<<"Sum[1,1 to 3,3]: "<<query(3,3)<<endl;} // 6
