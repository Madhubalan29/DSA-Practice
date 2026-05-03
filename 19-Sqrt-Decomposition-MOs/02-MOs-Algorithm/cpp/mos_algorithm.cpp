/* MO's Algorithm - Distinct Elements in Range | Time: O((N+Q)*sqrt(N)) */
#include <bits/stdc++.h>
using namespace std;
int cnt[1000005],curAns=0,block;
struct Query{int l,r,idx;};
void add(int x){if(cnt[x]++==0)curAns++;}
void rem(int x){if(--cnt[x]==0)curAns--;}
int main(){int n=7;int a[]={1,2,1,3,1,2,1};block=(int)sqrt(n);
vector<Query>queries={{1,5,0},{0,3,1},{2,6,2}};
sort(queries.begin(),queries.end(),[](auto&a,auto&b){return a.l/block!=b.l/block?a.l/block<b.l/block:a.r<b.r;});
int cl=0,cr=-1;vector<int>ans(3);
for(auto&q:queries){while(cr<q.r)add(a[++cr]);while(cl>q.l)add(a[--cl]);while(cr>q.r)rem(a[cr--]);while(cl<q.l)rem(a[cl++]);ans[q.idx]=curAns;}
for(int i=0;i<3;i++)cout<<"Query "<<i<<": "<<ans[i]<<" distinct"<<endl;}
