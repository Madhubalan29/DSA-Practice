/*
 * Problem: Erect the Fence (Convex Hull)
 * Source:  LeetCode 587 - https://leetcode.com/problems/erect-the-fence/
 * 
 * Approach: Andrew's Monotone Chain algorithm. Sort points by x (then y).
 *           Build lower hull and upper hull using cross-product to detect turns.
 * Time Complexity:  O(n log n)
 * Space Complexity: O(n)
 * 
 * Tags: geometry, convex-hull, cross-product
 */

#include <bits/stdc++.h>
using namespace std;

// Cross product of vectors OA and OB (O is origin)
int cross(vector<int>& O, vector<int>& A, vector<int>& B) {
    return (A[0] - O[0]) * (B[1] - O[1]) - (A[1] - O[1]) * (B[0] - O[0]);
}

vector<vector<int>> outerTrees(vector<vector<int>>& trees) {
    int n = trees.size();
    if (n <= 3) return trees;
    
    sort(trees.begin(), trees.end());
    
    vector<vector<int>> hull;
    
    // Build lower hull
    for (int i = 0; i < n; i++) {
        while (hull.size() >= 2 && cross(hull[hull.size()-2], hull[hull.size()-1], trees[i]) < 0) {
            hull.pop_back();
        }
        hull.push_back(trees[i]);
    }
    
    // Build upper hull
    int lower_size = hull.size();
    for (int i = n - 2; i >= 0; i--) {
        while ((int)hull.size() > lower_size && cross(hull[hull.size()-2], hull[hull.size()-1], trees[i]) < 0) {
            hull.pop_back();
        }
        hull.push_back(trees[i]);
    }
    
    hull.pop_back(); // remove last point (duplicate of first)
    
    // Remove duplicates
    sort(hull.begin(), hull.end());
    hull.erase(unique(hull.begin(), hull.end()), hull.end());
    
    return hull;
}

int main() {
    vector<vector<int>> trees = {{1,1},{2,2},{2,0},{2,4},{3,3},{4,2}};
    auto hull = outerTrees(trees);
    
    cout << "Convex Hull points:" << endl;
    for (auto& p : hull) {
        cout << "[" << p[0] << ", " << p[1] << "]" << endl;
    }
    
    return 0;
}
