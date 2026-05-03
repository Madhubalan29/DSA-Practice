/* Fenwick Tree (BIT) - Point Update + Range Query | Time: O(log n) */
#include <bits/stdc++.h>
using namespace std;
int bit[100005], n;
void update(int i,int delta){for(;i<=n;i+=i&(-i))bit[i]+=delta;}
int query(int i){int s=0;for(;i>0;i-=i&(-i))s+=bit[i];return s;}
int rangeQuery(int l,int r){return query(r)-query(l-1);}
int main(){n=6;int a[]={1,3,5,7,9,11};for(int i=0;i<n;i++)update(i+1,a[i]);
cout<<"Sum[2,4]: "<<rangeQuery(2,4)<<endl; // 15
update(2,7); // a[1] += 7
cout<<"After update Sum[2,4]: "<<rangeQuery(2,4)<<endl;} // 22
