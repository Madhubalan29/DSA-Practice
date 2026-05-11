/*
 * Problem: Count of Smaller Numbers After Self (BIT approach)
 * Source:  LeetCode 315 - https://leetcode.com/problems/count-of-smaller-numbers-after-self/
 * 
 * Approach: Coordinate compress values. Traverse from right to left.
 *           For each element, query BIT for count of values < current, then update BIT.
 * Time Complexity:  O(n log n)
 * Space Complexity: O(n)
 * 
 * Tags: fenwick-tree, bit, coordinate-compression
 */

#include <bits/stdc++.h>
using namespace std;

class BIT {
    vector<int> tree;
    int n;
public:
    BIT(int n) : n(n), tree(n + 1, 0) {}
    
    void update(int i, int delta = 1) {
        for (; i <= n; i += i & (-i))
            tree[i] += delta;
    }
    
    int query(int i) {
        int sum = 0;
        for (; i > 0; i -= i & (-i))
            sum += tree[i];
        return sum;
    }
};

vector<int> countSmaller(vector<int>& nums) {
    int n = nums.size();
    
    // Coordinate compression
    vector<int> sorted_nums = nums;
    sort(sorted_nums.begin(), sorted_nums.end());
    sorted_nums.erase(unique(sorted_nums.begin(), sorted_nums.end()), sorted_nums.end());
    
    unordered_map<int, int> rank;
    for (int i = 0; i < (int)sorted_nums.size(); i++) {
        rank[sorted_nums[i]] = i + 1; // 1-indexed
    }
    
    BIT bit(sorted_nums.size());
    vector<int> result(n);
    
    for (int i = n - 1; i >= 0; i--) {
        int r = rank[nums[i]];
        result[i] = bit.query(r - 1); // count of elements < nums[i]
        bit.update(r);
    }
    
    return result;
}

int main() {
    vector<int> nums = {5, 2, 6, 1};
    auto result = countSmaller(nums);
    
    cout << "Counts: ";
    for (int x : result) cout << x << " ";
    cout << endl;
    // Output: 2 1 1 0
    
    return 0;
}
