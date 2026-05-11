/*
 * Problem: Binary Tree Maximum Path Sum
 * Source:  LeetCode 124 - https://leetcode.com/problems/binary-tree-maximum-path-sum/
 * 
 * Approach: Post-order DFS. At each node, compute max single-path contribution
 *           (max(0, left, right) + node->val) for parent. Update global max
 *           considering the path through current node (left + node + right).
 * Time Complexity:  O(n)
 * Space Complexity: O(h) — height of tree
 * 
 * Tags: trees, dfs, dynamic-programming
 */

#include <bits/stdc++.h>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

int maxSum;

int maxGain(TreeNode* node) {
    if (!node) return 0;
    
    int leftGain = max(0, maxGain(node->left));
    int rightGain = max(0, maxGain(node->right));
    
    // Path through this node
    int pathSum = node->val + leftGain + rightGain;
    maxSum = max(maxSum, pathSum);
    
    // Return max contribution to parent
    return node->val + max(leftGain, rightGain);
}

int maxPathSum(TreeNode* root) {
    maxSum = INT_MIN;
    maxGain(root);
    return maxSum;
}

int main() {
    //       -10
    //       /  \
    //      9   20
    //         /  \
    //        15   7
    TreeNode* root = new TreeNode(-10);
    root->left = new TreeNode(9);
    root->right = new TreeNode(20);
    root->right->left = new TreeNode(15);
    root->right->right = new TreeNode(7);
    
    cout << "Max path sum: " << maxPathSum(root) << endl;
    // Output: 42 (15 + 20 + 7)
    
    return 0;
}
