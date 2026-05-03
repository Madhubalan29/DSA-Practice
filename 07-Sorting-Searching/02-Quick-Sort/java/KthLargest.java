public class KthLargest {
    static int partition(int[] nums, int lo, int hi) {
        int pivot = nums[hi], i = lo;
        for (int j = lo; j < hi; j++)
            if (nums[j] >= pivot) { int t = nums[i]; nums[i] = nums[j]; nums[j] = t; i++; }
        int t = nums[i]; nums[i] = nums[hi]; nums[hi] = t;
        return i;
    }
    public static int findKthLargest(int[] nums, int k) {
        int lo = 0, hi = nums.length - 1; k--;
        while (lo <= hi) {
            int p = partition(nums, lo, hi);
            if (p == k) return nums[p];
            else if (p < k) lo = p + 1;
            else hi = p - 1;
        }
        return -1;
    }
    public static void main(String[] args) {
        System.out.println("2nd largest: " + findKthLargest(new int[]{3,2,1,5,6,4}, 2)); // 5
    }
}
