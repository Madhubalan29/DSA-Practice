/*
 * Problem: Single Number (find unique element)
 * Source:  LeetCode 136 - https://leetcode.com/problems/single-number/
 * 
 * Approach: XOR all elements. Duplicates cancel out (a ^ a = 0), leaving the unique one.
 * Time Complexity:  O(n)
 * Space Complexity: O(1)
 * Tags: bit-manipulation, xor
 */

#include <bits/stdc++.h>
using namespace std;

int singleNumber(vector<int>& nums) {
    int result = 0;
    for (int x : nums) result ^= x;
    return result;
}

int main() {
    vector<int> nums = {4, 1, 2, 1, 2};
    cout << "Single Number: " << singleNumber(nums) << endl; // 4
    return 0;
}
