/* Sqrt Decomposition - Range Sum | Time: O(sqrt(n)) per query */
#include <bits/stdc++.h>
using namespace std;
int main(){int n=9;int a[]={1,2,3,4,5,6,7,8,9};int block=(int)sqrt(n);
vector<int>blocks((n+block-1)/block,0);for(int i=0;i<n;i++)blocks[i/block]+=a[i];
// Query sum [l, r]
int l=2,r=7;int sum=0;for(int i=l;i<=r;){if(i%block==0&&i+block-1<=r){sum+=blocks[i/block];i+=block;}else{sum+=a[i];i++;}}
cout<<"Sum["<<l<<","<<r<<"]: "<<sum<<endl;} // 33
