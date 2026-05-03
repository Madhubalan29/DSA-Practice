public class Diameter {
    static class TreeNode { int val; TreeNode left, right; TreeNode(int x) { val = x; } }
    static int diameter;
    static int height(TreeNode root) {
        if (root == null) return 0;
        int lh = height(root.left), rh = height(root.right);
        diameter = Math.max(diameter, lh + rh);
        return 1 + Math.max(lh, rh);
    }
    public static void main(String[] args) {
        TreeNode root = new TreeNode(1); root.left = new TreeNode(2); root.right = new TreeNode(3);
        root.left.left = new TreeNode(4); root.left.right = new TreeNode(5);
        diameter = 0; height(root);
        System.out.println("Diameter: " + diameter); // 3
    }
}
