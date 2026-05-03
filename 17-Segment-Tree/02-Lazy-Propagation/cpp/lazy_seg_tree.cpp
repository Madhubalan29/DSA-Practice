/* Segment Tree with Lazy Propagation - Range Add + Range Sum */
#include <bits/stdc++.h>
using namespace std;
typedef long long ll;
ll tree[400005],lazy[400005];
void push(int v,int l,int r){if(lazy[v]){int m=(l+r)/2;tree[2*v]+=lazy[v]*(m-l+1);tree[2*v+1]+=lazy[v]*(r-m);lazy[2*v]+=lazy[v];lazy[2*v+1]+=lazy[v];lazy[v]=0;}}
void update(int v,int l,int r,int ql,int qr,ll val){if(ql>r||qr<l)return;if(ql<=l&&r<=qr){tree[v]+=val*(r-l+1);lazy[v]+=val;return;}push(v,l,r);int m=(l+r)/2;update(2*v,l,m,ql,qr,val);update(2*v+1,m+1,r,ql,qr,val);tree[v]=tree[2*v]+tree[2*v+1];}
ll query(int v,int l,int r,int ql,int qr){if(ql>r||qr<l)return 0;if(ql<=l&&r<=qr)return tree[v];push(v,l,r);int m=(l+r)/2;return query(2*v,l,m,ql,qr)+query(2*v+1,m+1,r,ql,qr);}
int main(){int n=5;update(1,0,n-1,0,4,1);update(1,0,n-1,1,3,2);cout<<"Sum[0,4]: "<<query(1,0,n-1,0,4)<<endl;}
