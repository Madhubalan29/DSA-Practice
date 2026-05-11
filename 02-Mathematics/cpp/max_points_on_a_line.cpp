/*
 * Problem: Max Points on a Line
 * Source:  LeetCode 149 - https://leetcode.com/problems/max-points-on-a-line/
 * 
 * Approach: For each point, compute slopes to all other points using GCD-reduced
 *           (dy, dx) pairs as hash keys. Track max collinear count.
 * Time Complexity:  O(n^2)
 * Space Complexity: O(n)
 * 
 * Tags: mathematics, gcd, hashing, geometry
 */

#include <bits/stdc++.h>
using namespace std;

int maxPoints(vector<vector<int>>& points) {
    int n = points.size();
    if (n <= 2) return n;
    
    int result = 2;
    
    for (int i = 0; i < n; i++) {
        map<pair<int,int>, int> slopeCount;
        
        for (int j = 0; j < n; j++) {
            if (i == j) continue;
            
            int dy = points[j][1] - points[i][1];
            int dx = points[j][0] - points[i][0];
            
            // Normalize the slope using GCD
            int g = __gcd(abs(dy), abs(dx));
            if (g != 0) {
                dy /= g;
                dx /= g;
            }
            
            // Ensure consistent sign: make dx positive, or if dx==0, dy positive
            if (dx < 0) {
                dx = -dx;
                dy = -dy;
            } else if (dx == 0) {
                dy = abs(dy);
            }
            
            slopeCount[{dy, dx}]++;
        }
        
        for (auto& [slope, cnt] : slopeCount) {
            result = max(result, cnt + 1); // +1 for point i itself
        }
    }
    
    return result;
}

int main() {
    vector<vector<int>> points = {{1,1},{3,2},{5,3},{4,1},{2,3},{1,4}};
    cout << "Max points on a line: " << maxPoints(points) << endl;
    // Output: 4
    
    return 0;
}
