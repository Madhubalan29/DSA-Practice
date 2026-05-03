public class MaxSubarray {
    public static int maxSubArray(int[] nums) {
        int maxSum = nums[0], curSum = nums[0];
        for (int i = 1; i < nums.length; i++) {
            curSum = Math.max(nums[i], curSum + nums[i]);
            maxSum = Math.max(maxSum, curSum);
        }
        return maxSum;
    }
    public static void main(String[] args) {
        System.out.println("Max Subarray Sum: " + maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // 6
    }
}
