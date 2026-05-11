/*
 * Problem: Largest Component Size by Common Factor
 * Source:  LeetCode 952 - https://leetcode.com/problems/largest-component-size-by-common-factor/
 * 
 * Approach: For each number, find all its prime factors. Union the number with
 *           each of its prime factors using DSU. Then count component sizes.
 * Time Complexity:  O(n * sqrt(max_val) * α(n))
 * Space Complexity: O(max_val)
 * 
 * Tags: prime-factorisation, dsu, union-find
 */

#include <bits/stdc++.h>
using namespace std;

class DSU {
    vector<int> parent, rank_;
public:
    DSU(int n) : parent(n), rank_(n, 0) {
        iota(parent.begin(), parent.end(), 0);
    }
    int find(int x) {
        return parent[x] == x ? x : parent[x] = find(parent[x]);
    }
    void unite(int x, int y) {
        x = find(x); y = find(y);
        if (x == y) return;
        if (rank_[x] < rank_[y]) swap(x, y);
        parent[y] = x;
        if (rank_[x] == rank_[y]) rank_[x]++;
    }
};

int largestComponentSize(vector<int>& nums) {
    int maxVal = *max_element(nums.begin(), nums.end());
    DSU dsu(maxVal + 1);
    
    for (int num : nums) {
        for (int f = 2; f * f <= num; f++) {
            if (num % f == 0) {
                dsu.unite(num, f);
                dsu.unite(num, num / f);
            }
        }
    }
    
    unordered_map<int, int> componentSize;
    int result = 1;
    
    for (int num : nums) {
        int root = dsu.find(num);
        componentSize[root]++;
        result = max(result, componentSize[root]);
    }
    
    return result;
}

int main() {
    vector<int> nums = {4, 6, 15, 35};
    cout << "Largest component size: " << largestComponentSize(nums) << endl;
    // Output: 4 (all connected: 4-6 share 2, 6-15 share 3, 15-35 share 5)
    
    vector<int> nums2 = {20, 50, 9, 63};
    cout << "Largest component size: " << largestComponentSize(nums2) << endl;
    // Output: 2
    
    return 0;
}
