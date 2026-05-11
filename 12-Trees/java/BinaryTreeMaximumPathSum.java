/*
 * Problem: Binary Tree Maximum Path Sum
 * Source:  LeetCode 124 - https://leetcode.com/problems/binary-tree-maximum-path-sum/
 * 
 * Approach: Post-order DFS with global max tracking.
 * Time Complexity:  O(n)
 * Space Complexity: O(h)
 * 
 * Tags: trees, dfs, dynamic-programming
 */

import java.util.*;

public class BinaryTreeMaximumPathSum {
    
    static class TreeNode {
        int val;
        TreeNode left, right;
        TreeNode(int x) { val = x; }
    }
    
    int maxSum = Integer.MIN_VALUE;
    
    public int maxPathSum(TreeNode root) {
        maxSum = Integer.MIN_VALUE;
        maxGain(root);
        return maxSum;
    }
    
    int maxGain(TreeNode node) {
        if (node == null) return 0;
        
        int leftGain = Math.max(0, maxGain(node.left));
        int rightGain = Math.max(0, maxGain(node.right));
        
        maxSum = Math.max(maxSum, node.val + leftGain + rightGain);
        
        return node.val + Math.max(leftGain, rightGain);
    }
    
    public static void main(String[] args) {
        BinaryTreeMaximumPathSum sol = new BinaryTreeMaximumPathSum();
        TreeNode root = new TreeNode(-10);
        root.left = new TreeNode(9);
        root.right = new TreeNode(20);
        root.right.left = new TreeNode(15);
        root.right.right = new TreeNode(7);
        
        System.out.println("Max path sum: " + sol.maxPathSum(root)); // 42
    }
}
