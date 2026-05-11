/*
 * Problem: Range Module
 * Source:  LeetCode 715 - https://leetcode.com/problems/range-module/
 * 
 * Approach: Use an ordered map (TreeMap) to store non-overlapping intervals.
 *           For each operation, find and merge/split affected intervals.
 * Time Complexity:  O(n log n) per operation amortized
 * Space Complexity: O(n) for stored intervals
 * 
 * Tags: segment-tree, interval-management, ordered-map
 */

#include <bits/stdc++.h>
using namespace std;

class RangeModule {
    map<int, int> intervals; // key=left, value=right (half-open [left, right))
    
public:
    RangeModule() {}
    
    void addRange(int left, int right) {
        auto it = intervals.upper_bound(left);
        if (it != intervals.begin()) {
            --it;
            if (it->second < left) ++it;
        }
        
        while (it != intervals.end() && it->first <= right) {
            left = min(left, it->first);
            right = max(right, it->second);
            it = intervals.erase(it);
        }
        
        intervals[left] = right;
    }
    
    bool queryRange(int left, int right) {
        auto it = intervals.upper_bound(left);
        if (it == intervals.begin()) return false;
        --it;
        return it->second >= right;
    }
    
    void removeRange(int left, int right) {
        auto it = intervals.upper_bound(left);
        if (it != intervals.begin()) {
            --it;
            if (it->second < left) ++it;
        }
        
        vector<pair<int,int>> toAdd;
        
        while (it != intervals.end() && it->first < right) {
            if (it->first < left) toAdd.push_back({it->first, left});
            if (it->second > right) toAdd.push_back({right, it->second});
            it = intervals.erase(it);
        }
        
        for (auto& [l, r] : toAdd) intervals[l] = r;
    }
};

int main() {
    RangeModule rm;
    rm.addRange(10, 20);
    rm.removeRange(14, 16);
    cout << boolalpha;
    cout << "Query [10,14): " << rm.queryRange(10, 14) << endl; // true
    cout << "Query [13,15): " << rm.queryRange(13, 15) << endl; // false
    cout << "Query [16,17): " << rm.queryRange(16, 17) << endl; // true
    
    return 0;
}
