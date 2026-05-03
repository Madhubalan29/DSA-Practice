/*
 * Problem: Maximum XOR of Two Numbers in an Array
 * Source:  LeetCode 421 - https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/
 * 
 * Approach: Build answer bit by bit from MSB. For each bit position, check
 *           if we can set it to 1 using prefix XOR set.
 * Time Complexity:  O(32 * n)
 * Space Complexity: O(n)
 * Tags: bit-manipulation, xor, greedy
 */

#include <bits/stdc++.h>
using namespace std;

int findMaximumXOR(vector<int>& nums) {
    int maxXor = 0, mask = 0;
    
    for (int i = 31; i >= 0; i--) {
        mask |= (1 << i);
        unordered_set<int> prefixes;
        for (int num : nums)
            prefixes.insert(num & mask);
        
        int candidate = maxXor | (1 << i);
        for (int prefix : prefixes) {
            if (prefixes.count(candidate ^ prefix)) {
                maxXor = candidate;
                break;
            }
        }
    }
    
    return maxXor;
}

int main() {
    vector<int> nums = {3, 10, 5, 25, 2, 8};
    cout << "Max XOR: " << findMaximumXOR(nums) << endl; // 28 (5 ^ 25)
    return 0;
}
