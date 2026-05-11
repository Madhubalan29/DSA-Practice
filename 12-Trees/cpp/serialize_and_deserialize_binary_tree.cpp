/*
 * Problem: Serialize and Deserialize Binary Tree
 * Source:  LeetCode 297 - https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
 * 
 * Approach: Preorder traversal with "null" markers for null nodes.
 *           Serialize: DFS preorder, comma-separated.
 *           Deserialize: Split by comma, rebuild using queue and preorder.
 * Time Complexity:  O(n) for both serialize and deserialize
 * Space Complexity: O(n)
 * 
 * Tags: trees, dfs, design, serialization
 */

#include <bits/stdc++.h>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

// Encodes a tree to a single string.
string serialize(TreeNode* root) {
    if (!root) return "null";
    return to_string(root->val) + "," + serialize(root->left) + "," + serialize(root->right);
}

// Decodes your encoded data to tree.
TreeNode* deserializeHelper(queue<string>& tokens) {
    string token = tokens.front();
    tokens.pop();
    
    if (token == "null") return nullptr;
    
    TreeNode* node = new TreeNode(stoi(token));
    node->left = deserializeHelper(tokens);
    node->right = deserializeHelper(tokens);
    
    return node;
}

TreeNode* deserialize(string data) {
    queue<string> tokens;
    stringstream ss(data);
    string token;
    while (getline(ss, token, ',')) {
        tokens.push(token);
    }
    return deserializeHelper(tokens);
}

int main() {
    TreeNode* root = new TreeNode(1);
    root->left = new TreeNode(2);
    root->right = new TreeNode(3);
    root->right->left = new TreeNode(4);
    root->right->right = new TreeNode(5);
    
    string serialized = serialize(root);
    cout << "Serialized: " << serialized << endl;
    
    TreeNode* deserialized = deserialize(serialized);
    cout << "Deserialized root: " << deserialized->val << endl;
    cout << "Re-serialized: " << serialize(deserialized) << endl;
    
    return 0;
}
