/* Union-Find with Path Compression + Rank | Time: O(a(n)) per op */
#include <bits/stdc++.h>
using namespace std;
class DSU { public: vector<int> p, r;
    DSU(int n):p(n),r(n,0){iota(p.begin(),p.end(),0);}
    int find(int x){return p[x]==x?x:p[x]=find(p[x]);}
    bool unite(int x,int y){x=find(x);y=find(y);if(x==y)return false;if(r[x]<r[y])swap(x,y);p[y]=x;if(r[x]==r[y])r[x]++;return true;}
};
int main(){DSU dsu(5);dsu.unite(0,1);dsu.unite(2,3);dsu.unite(1,3);
    cout<<boolalpha<<(dsu.find(0)==dsu.find(3))<<endl; // true
    cout<<(dsu.find(0)==dsu.find(4))<<endl; // false
}
