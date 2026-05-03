import java.util.*;
public class Permutations {
    public static List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        backtrack(nums, 0, result);
        return result;
    }
    static void backtrack(int[] nums, int idx, List<List<Integer>> result) {
        if (idx == nums.length) {
            List<Integer> perm = new ArrayList<>();
            for (int x : nums) perm.add(x);
            result.add(perm); return;
        }
        for (int i = idx; i < nums.length; i++) {
            int t = nums[idx]; nums[idx] = nums[i]; nums[i] = t;
            backtrack(nums, idx + 1, result);
            t = nums[idx]; nums[idx] = nums[i]; nums[i] = t;
        }
    }
    public static void main(String[] args) { System.out.println(permute(new int[]{1, 2, 3})); }
}
