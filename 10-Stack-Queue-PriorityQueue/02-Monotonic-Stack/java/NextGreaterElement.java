import java.util.*;
public class NextGreaterElement {
    public static int[] nextGreater(int[] nums) {
        int n = nums.length;
        int[] result = new int[n];
        Deque<Integer> st = new ArrayDeque<>();
        for (int i = n - 1; i >= 0; i--) {
            while (!st.isEmpty() && st.peek() <= nums[i]) st.pop();
            result[i] = st.isEmpty() ? -1 : st.peek();
            st.push(nums[i]);
        }
        return result;
    }
    public static void main(String[] args) {
        int[] nums = {4, 5, 2, 25};
        int[] res = nextGreater(nums);
        for (int i = 0; i < nums.length; i++) System.out.println(nums[i] + " -> " + res[i]);
    }
}
