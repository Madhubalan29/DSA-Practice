/*
 * Problem: Diameter of Binary Tree (Tree DP)
 * Source:  LeetCode 543
 * Approach: For each node, diameter through it = left_height + right_height.
 * Time: O(n), Space: O(h)
 * Tags: tree-dp, tree
 */
#include <bits/stdc++.h>
using namespace std;
struct TreeNode { int val; TreeNode *left, *right; TreeNode(int x):val(x),left(nullptr),right(nullptr){} };

int diameter;
int height(TreeNode* root) {
    if (!root) return 0;
    int lh = height(root->left), rh = height(root->right);
    diameter = max(diameter, lh + rh);
    return 1 + max(lh, rh);
}

int diameterOfBinaryTree(TreeNode* root) { diameter = 0; height(root); return diameter; }

int main() {
    TreeNode* root = new TreeNode(1);
    root->left = new TreeNode(2); root->right = new TreeNode(3);
    root->left->left = new TreeNode(4); root->left->right = new TreeNode(5);
    cout << "Diameter: " << diameterOfBinaryTree(root) << endl; // 3
    return 0;
}
