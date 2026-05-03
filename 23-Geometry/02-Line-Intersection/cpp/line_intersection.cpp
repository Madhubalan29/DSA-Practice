/* Line Segment Intersection | Tags: geometry */
#include <bits/stdc++.h>
using namespace std;
struct Point{double x,y;};
double cross(Point O,Point A,Point B){return(A.x-O.x)*(B.y-O.y)-(A.y-O.y)*(B.x-O.x);}
bool onSegment(Point p,Point q,Point r){return q.x<=max(p.x,r.x)&&q.x>=min(p.x,r.x)&&q.y<=max(p.y,r.y)&&q.y>=min(p.y,r.y);}
bool intersects(Point p1,Point q1,Point p2,Point q2){
double d1=cross(p2,q2,p1),d2=cross(p2,q2,q1),d3=cross(p1,q1,p2),d4=cross(p1,q1,q2);
if(((d1>0&&d2<0)||(d1<0&&d2>0))&&((d3>0&&d4<0)||(d3<0&&d4>0)))return true;
if(d1==0&&onSegment(p2,p1,q2))return true;if(d2==0&&onSegment(p2,q1,q2))return true;return false;}
int main(){Point p1={1,1},q1={10,1},p2={1,2},q2={10,2};cout<<boolalpha<<intersects(p1,q1,p2,q2)<<endl;} // false
