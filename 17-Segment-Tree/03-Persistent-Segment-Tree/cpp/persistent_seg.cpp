/* Segment Tree - Range Sum Query | Time: O(n) build, O(log n) query/update */
#include <bits/stdc++.h>
using namespace std;
int tree[400005], n;
void build(vector<int>& a,int v,int l,int r){if(l==r){tree[v]=a[l];return;}int m=(l+r)/2;build(a,2*v,l,m);build(a,2*v+1,m+1,r);tree[v]=tree[2*v]+tree[2*v+1];}
void update(int v,int l,int r,int pos,int val){if(l==r){tree[v]=val;return;}int m=(l+r)/2;if(pos<=m)update(2*v,l,m,pos,val);else update(2*v+1,m+1,r,pos,val);tree[v]=tree[2*v]+tree[2*v+1];}
int query(int v,int l,int r,int ql,int qr){if(ql>r||qr<l)return 0;if(ql<=l&&r<=qr)return tree[v];int m=(l+r)/2;return query(2*v,l,m,ql,qr)+query(2*v+1,m+1,r,ql,qr);}
int main(){vector<int>a={1,3,5,7,9,11};n=a.size();build(a,1,0,n-1);cout<<"Sum[1,3]: "<<query(1,0,n-1,1,3)<<endl;update(1,0,n-1,1,10);cout<<"After update Sum[1,3]: "<<query(1,0,n-1,1,3)<<endl;}
