/*
 * Problem: Lowest Common Ancestor of Binary Tree
 * Source:  LeetCode 236
 * Time: O(n), Space: O(h)
 * Tags: lca, tree, recursion
 */
#include <bits/stdc++.h>
using namespace std;
struct TreeNode { int val; TreeNode *left, *right; TreeNode(int x):val(x),left(nullptr),right(nullptr){} };

TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
    if (!root || root == p || root == q) return root;
    TreeNode* left = lowestCommonAncestor(root->left, p, q);
    TreeNode* right = lowestCommonAncestor(root->right, p, q);
    if (left && right) return root;
    return left ? left : right;
}

int main() {
    TreeNode* root = new TreeNode(3);
    root->left = new TreeNode(5); root->right = new TreeNode(1);
    root->left->left = new TreeNode(6); root->left->right = new TreeNode(2);
    auto lca = lowestCommonAncestor(root, root->left, root->right);
    cout << "LCA of 5 and 1: " << lca->val << endl; // 3
    return 0;
}
