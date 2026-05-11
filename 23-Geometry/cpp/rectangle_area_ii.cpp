/*
 * Problem: Rectangle Area II
 * Source:  LeetCode 850 - https://leetcode.com/problems/rectangle-area-ii/
 * 
 * Approach: Coordinate compression + sweep line. Compress x-coordinates.
 *           Sweep vertically by y-events (open/close). For each y-strip,
 *           compute the active x-coverage.
 * Time Complexity:  O(n^2 log n)
 * Space Complexity: O(n)
 * 
 * Tags: geometry, sweep-line, coordinate-compression
 */

#include <bits/stdc++.h>
using namespace std;

int rectangleArea(vector<vector<int>>& rectangles) {
    const int MOD = 1e9 + 7;
    
    // Collect all unique x-coordinates
    vector<int> xCoords;
    for (auto& r : rectangles) {
        xCoords.push_back(r[0]);
        xCoords.push_back(r[2]);
    }
    sort(xCoords.begin(), xCoords.end());
    xCoords.erase(unique(xCoords.begin(), xCoords.end()), xCoords.end());
    
    // Create events: {y, type (0=open, 1=close), x1, x2}
    vector<array<int, 4>> events;
    for (auto& r : rectangles) {
        events.push_back({r[1], 0, r[0], r[2]}); // open at y1
        events.push_back({r[3], 1, r[0], r[2]}); // close at y2
    }
    sort(events.begin(), events.end());
    
    // Map x-coordinate to index
    auto getIdx = [&](int x) {
        return lower_bound(xCoords.begin(), xCoords.end(), x) - xCoords.begin();
    };
    
    long long totalArea = 0;
    vector<int> cnt(xCoords.size(), 0); // count of active rectangles covering each x-segment
    
    int prevY = events[0][0];
    
    for (auto& event : events) {
        int y = event[0], type = event[1], x1 = event[2], x2 = event[3];
        
        // Calculate active x-coverage
        long long activeX = 0;
        for (int i = 0; i + 1 < (int)xCoords.size(); i++) {
            if (cnt[i] > 0) {
                activeX += xCoords[i + 1] - xCoords[i];
            }
        }
        
        totalArea = (totalArea + activeX * (y - prevY)) % MOD;
        prevY = y;
        
        // Update counts
        int idx1 = getIdx(x1), idx2 = getIdx(x2);
        int delta = (type == 0) ? 1 : -1;
        for (int i = idx1; i < idx2; i++) {
            cnt[i] += delta;
        }
    }
    
    return (int)totalArea;
}

int main() {
    vector<vector<int>> rectangles = {{0,0,2,2},{1,0,2,3},{1,0,3,1}};
    cout << "Total area: " << rectangleArea(rectangles) << endl;
    // Output: 6
    
    return 0;
}
