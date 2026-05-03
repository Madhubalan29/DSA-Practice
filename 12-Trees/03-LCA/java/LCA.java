public class LCA {
    static class TreeNode { int val; TreeNode left, right; TreeNode(int x) { val = x; } }
    public static TreeNode lca(TreeNode root, TreeNode p, TreeNode q) {
        if (root == null || root == p || root == q) return root;
        TreeNode left = lca(root.left, p, q), right = lca(root.right, p, q);
        if (left != null && right != null) return root;
        return left != null ? left : right;
    }
    public static void main(String[] args) {
        TreeNode root = new TreeNode(3); root.left = new TreeNode(5); root.right = new TreeNode(1);
        System.out.println("LCA: " + lca(root, root.left, root.right).val); // 3
    }
}
