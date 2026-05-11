/*
 * Problem: Serialize and Deserialize Binary Tree
 * Source:  LeetCode 297 - https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
 * 
 * Approach: Preorder DFS with "null" markers.
 * Time Complexity:  O(n)
 * Space Complexity: O(n)
 * 
 * Tags: trees, dfs, design, serialization
 */

import java.util.*;

public class SerializeAndDeserializeBinaryTree {
    
    static class TreeNode {
        int val;
        TreeNode left, right;
        TreeNode(int x) { val = x; }
    }
    
    // Encodes a tree to a single string
    public String serialize(TreeNode root) {
        if (root == null) return "null";
        return root.val + "," + serialize(root.left) + "," + serialize(root.right);
    }
    
    // Decodes your encoded data to tree
    public TreeNode deserialize(String data) {
        Queue<String> tokens = new LinkedList<>(Arrays.asList(data.split(",")));
        return buildTree(tokens);
    }
    
    TreeNode buildTree(Queue<String> tokens) {
        String token = tokens.poll();
        if ("null".equals(token)) return null;
        
        TreeNode node = new TreeNode(Integer.parseInt(token));
        node.left = buildTree(tokens);
        node.right = buildTree(tokens);
        return node;
    }
    
    public static void main(String[] args) {
        SerializeAndDeserializeBinaryTree sol = new SerializeAndDeserializeBinaryTree();
        
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.right.left = new TreeNode(4);
        root.right.right = new TreeNode(5);
        
        String serialized = sol.serialize(root);
        System.out.println("Serialized: " + serialized);
        
        TreeNode deserialized = sol.deserialize(serialized);
        System.out.println("Re-serialized: " + sol.serialize(deserialized));
    }
}
