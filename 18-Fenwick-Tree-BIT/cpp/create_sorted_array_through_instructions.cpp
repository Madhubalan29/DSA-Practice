/*
 * Problem: Create Sorted Array through Instructions
 * Source:  LeetCode 1649 - https://leetcode.com/problems/create-sorted-array-through-instructions/
 * 
 * Approach: Use BIT to maintain frequency of inserted values. For each new value,
 *           cost = min(count_less_than, count_greater_than). Query BIT for prefix sums.
 * Time Complexity:  O(n log m) where m = max value
 * Space Complexity: O(m)
 * 
 * Tags: fenwick-tree, bit, order-statistics
 */

#include <bits/stdc++.h>
using namespace std;

class BIT {
    vector<int> tree;
    int n;
public:
    BIT(int n) : n(n), tree(n + 1, 0) {}
    void update(int i) { for (; i <= n; i += i & (-i)) tree[i]++; }
    int query(int i) { int s = 0; for (; i > 0; i -= i & (-i)) s += tree[i]; return s; }
};

int createSortedArray(vector<int>& instructions) {
    const int MOD = 1e9 + 7;
    int maxVal = *max_element(instructions.begin(), instructions.end());
    BIT bit(maxVal);
    
    long long totalCost = 0;
    
    for (int i = 0; i < (int)instructions.size(); i++) {
        int val = instructions[i];
        int lessThan = bit.query(val - 1);
        int greaterThan = i - bit.query(val);
        totalCost = (totalCost + min(lessThan, greaterThan)) % MOD;
        bit.update(val);
    }
    
    return (int)totalCost;
}

int main() {
    vector<int> instructions = {1, 5, 6, 2};
    cout << "Total cost: " << createSortedArray(instructions) << endl;
    // Output: 1
    
    vector<int> instructions2 = {1, 2, 3, 6, 5, 4};
    cout << "Total cost: " << createSortedArray(instructions2) << endl;
    // Output: 3
    
    return 0;
}
