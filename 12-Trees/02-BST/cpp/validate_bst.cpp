/*
 * Problem: Validate Binary Search Tree
 * Source:  LeetCode 98
 * Time: O(n), Space: O(h)
 * Tags: bst, tree, recursion
 */
#include <bits/stdc++.h>
using namespace std;
struct TreeNode { int val; TreeNode *left, *right; TreeNode(int x):val(x),left(nullptr),right(nullptr){} };

bool isValid(TreeNode* node, long minVal, long maxVal) {
    if (!node) return true;
    if (node->val <= minVal || node->val >= maxVal) return false;
    return isValid(node->left, minVal, node->val) && isValid(node->right, node->val, maxVal);
}

bool isValidBST(TreeNode* root) { return isValid(root, LONG_MIN, LONG_MAX); }

int main() {
    TreeNode* root = new TreeNode(5);
    root->left = new TreeNode(1); root->right = new TreeNode(4);
    root->right->left = new TreeNode(3); root->right->right = new TreeNode(6);
    cout << boolalpha << isValidBST(root) << endl; // false
    return 0;
}
