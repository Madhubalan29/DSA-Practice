public class SortColors {
    public static void sortColors(int[] nums) {
        int lo = 0, mid = 0, hi = nums.length - 1;
        while (mid <= hi) {
            if (nums[mid] == 0) { int t = nums[lo]; nums[lo] = nums[mid]; nums[mid] = t; lo++; mid++; }
            else if (nums[mid] == 1) mid++;
            else { int t = nums[mid]; nums[mid] = nums[hi]; nums[hi] = t; hi--; }
        }
    }
    public static void main(String[] args) {
        int[] nums = {2, 0, 2, 1, 1, 0};
        sortColors(nums);
        for (int x : nums) System.out.print(x + " "); // 0 0 1 1 2 2
    }
}
