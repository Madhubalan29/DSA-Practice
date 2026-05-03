/* Non-overlapping Intervals | LeetCode 435 | Tags: interval-scheduling, greedy */
#include <bits/stdc++.h>
using namespace std;
int eraseOverlapIntervals(vector<vector<int>>& intervals){sort(intervals.begin(),intervals.end(),[](auto&a,auto&b){return a[1]<b[1];});
int cnt=0,end=INT_MIN;for(auto&i:intervals){if(i[0]>=end)end=i[1];else cnt++;}return cnt;}
int main(){vector<vector<int>>intervals={{1,2},{2,3},{3,4},{1,3}};cout<<eraseOverlapIntervals(intervals)<<endl;} // 1
