import java.util.*;
public class SubsetsII {
    public static List<List<Integer>> subsetsWithDup(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> result = new ArrayList<>();
        backtrack(nums, 0, new ArrayList<>(), result);
        return result;
    }
    static void backtrack(int[] nums, int start, List<Integer> cur, List<List<Integer>> result) {
        result.add(new ArrayList<>(cur));
        for (int i = start; i < nums.length; i++) {
            if (i > start && nums[i] == nums[i - 1]) continue;
            cur.add(nums[i]);
            backtrack(nums, i + 1, cur, result);
            cur.remove(cur.size() - 1);
        }
    }
    public static void main(String[] args) { System.out.println(subsetsWithDup(new int[]{1, 2, 2})); }
}
