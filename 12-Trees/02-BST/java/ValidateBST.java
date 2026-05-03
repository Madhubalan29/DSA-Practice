public class ValidateBST {
    static class TreeNode { int val; TreeNode left, right; TreeNode(int x) { val = x; } }
    static boolean isValid(TreeNode node, long min, long max) {
        if (node == null) return true;
        if (node.val <= min || node.val >= max) return false;
        return isValid(node.left, min, node.val) && isValid(node.right, node.val, max);
    }
    public static boolean isValidBST(TreeNode root) { return isValid(root, Long.MIN_VALUE, Long.MAX_VALUE); }
    public static void main(String[] args) {
        TreeNode root = new TreeNode(2); root.left = new TreeNode(1); root.right = new TreeNode(3);
        System.out.println(isValidBST(root)); // true
    }
}
