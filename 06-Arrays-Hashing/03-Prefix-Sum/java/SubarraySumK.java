import java.util.*;
public class SubarraySumK {
    public static int subarraySum(int[] nums, int k) {
        Map<Integer, Integer> prefixCount = new HashMap<>();
        prefixCount.put(0, 1);
        int sum = 0, count = 0;
        for (int x : nums) {
            sum += x;
            count += prefixCount.getOrDefault(sum - k, 0);
            prefixCount.merge(sum, 1, Integer::sum);
        }
        return count;
    }
    public static void main(String[] args) {
        System.out.println("Count (k=2): " + subarraySum(new int[]{1, 1, 1}, 2)); // 2
    }
}
