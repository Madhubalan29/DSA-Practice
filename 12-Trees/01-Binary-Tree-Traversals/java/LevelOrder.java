import java.util.*;
public class LevelOrder {
    static class TreeNode { int val; TreeNode left, right; TreeNode(int x) { val = x; } }
    public static List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();
        if (root == null) return result;
        Queue<TreeNode> q = new LinkedList<>(); q.add(root);
        while (!q.isEmpty()) {
            int sz = q.size(); List<Integer> level = new ArrayList<>();
            while (sz-- > 0) {
                TreeNode node = q.poll(); level.add(node.val);
                if (node.left != null) q.add(node.left);
                if (node.right != null) q.add(node.right);
            }
            result.add(level);
        }
        return result;
    }
    public static void main(String[] args) {
        TreeNode root = new TreeNode(3); root.left = new TreeNode(9); root.right = new TreeNode(20);
        System.out.println(levelOrder(root));
    }
}
