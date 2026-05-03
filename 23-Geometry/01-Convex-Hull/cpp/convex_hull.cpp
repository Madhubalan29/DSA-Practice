/* Convex Hull (Andrew's Monotone Chain) | Time: O(n log n) */
#include <bits/stdc++.h>
using namespace std;
typedef pair<long long,long long> Point;
long long cross(Point O,Point A,Point B){return(A.first-O.first)*(B.second-O.second)-(A.second-O.second)*(B.first-O.first);}
vector<Point> convexHull(vector<Point>& pts){sort(pts.begin(),pts.end());int n=pts.size(),k=0;
vector<Point>hull(2*n);for(int i=0;i<n;i++){while(k>=2&&cross(hull[k-2],hull[k-1],pts[i])<=0)k--;hull[k++]=pts[i];}
for(int i=n-2,t=k+1;i>=0;i--){while(k>=t&&cross(hull[k-2],hull[k-1],pts[i])<=0)k--;hull[k++]=pts[i];}
hull.resize(k-1);return hull;}
int main(){vector<Point>pts={{0,0},{1,1},{2,2},{2,0},{0,2},{1,0}};auto h=convexHull(pts);
cout<<"Convex Hull: ";for(auto&[x,y]:h)cout<<"("<<x<<","<<y<<") ";cout<<endl;}
