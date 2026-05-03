import java.util.*;
public class TopKFrequent {
    public static int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> freq = new HashMap<>();
        for (int x : nums) freq.merge(x, 1, Integer::sum);
        PriorityQueue<int[]> minHeap = new PriorityQueue<>((a, b) -> a[1] - b[1]);
        for (var e : freq.entrySet()) {
            minHeap.offer(new int[]{e.getKey(), e.getValue()});
            if (minHeap.size() > k) minHeap.poll();
        }
        int[] result = new int[k]; int i = 0;
        while (!minHeap.isEmpty()) result[i++] = minHeap.poll()[0];
        return result;
    }
    public static void main(String[] args) {
        for (int x : topKFrequent(new int[]{1,1,1,2,2,3}, 2)) System.out.print(x + " ");
    }
}
