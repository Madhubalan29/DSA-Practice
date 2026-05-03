/*
 * Problem: Binary Tree Level Order Traversal
 * Source:  LeetCode 102
 * Time: O(n), Space: O(n)
 * Tags: tree, bfs, traversal
 */
#include <bits/stdc++.h>
using namespace std;
struct TreeNode { int val; TreeNode *left, *right; TreeNode(int x):val(x),left(nullptr),right(nullptr){} };

vector<vector<int>> levelOrder(TreeNode* root) {
    vector<vector<int>> result;
    if (!root) return result;
    queue<TreeNode*> q;
    q.push(root);
    while (!q.empty()) {
        int sz = q.size();
        vector<int> level;
        while (sz--) {
            auto node = q.front(); q.pop();
            level.push_back(node->val);
            if (node->left) q.push(node->left);
            if (node->right) q.push(node->right);
        }
        result.push_back(level);
    }
    return result;
}

int main() {
    TreeNode* root = new TreeNode(3);
    root->left = new TreeNode(9);
    root->right = new TreeNode(20);
    root->right->left = new TreeNode(15);
    root->right->right = new TreeNode(7);
    auto res = levelOrder(root);
    for (auto& level : res) { for (int x : level) cout << x << " "; cout << endl; }
    // 3 | 9 20 | 15 7
    return 0;
}
