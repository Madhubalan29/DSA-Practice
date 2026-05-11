/*
 * Problem: Maximum XOR of Two Numbers in an Array
 * Source:  LeetCode 421 - https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/
 * 
 * Approach: Build a bitwise Trie of all numbers. For each number, traverse the
 *           trie greedily picking the opposite bit at each level to maximize XOR.
 * Time Complexity:  O(n * 32)
 * Space Complexity: O(n * 32)
 * 
 * Tags: bit-manipulation, trie, greedy
 */

#include <bits/stdc++.h>
using namespace std;

struct TrieNode {
    TrieNode* children[2] = {nullptr, nullptr};
};

class BitwiseTrie {
    TrieNode* root;
public:
    BitwiseTrie() { root = new TrieNode(); }
    
    void insert(int num) {
        TrieNode* node = root;
        for (int i = 31; i >= 0; i--) {
            int bit = (num >> i) & 1;
            if (!node->children[bit]) {
                node->children[bit] = new TrieNode();
            }
            node = node->children[bit];
        }
    }
    
    int getMaxXor(int num) {
        TrieNode* node = root;
        int maxXor = 0;
        for (int i = 31; i >= 0; i--) {
            int bit = (num >> i) & 1;
            int desired = 1 - bit; // we want the opposite bit
            if (node->children[desired]) {
                maxXor |= (1 << i);
                node = node->children[desired];
            } else {
                node = node->children[bit];
            }
        }
        return maxXor;
    }
};

int findMaximumXOR(vector<int>& nums) {
    BitwiseTrie trie;
    for (int num : nums) trie.insert(num);
    
    int result = 0;
    for (int num : nums) {
        result = max(result, trie.getMaxXor(num));
    }
    return result;
}

int main() {
    vector<int> nums = {3, 10, 5, 25, 2, 8};
    cout << "Maximum XOR: " << findMaximumXOR(nums) << endl;
    // Output: 28 (5 XOR 25 = 28)
    
    return 0;
}
