import java.util.*;
public class CountInversions {
    static long mergeCount(int[] arr, int l, int r) {
        if (l >= r) return 0;
        int mid = (l + r) / 2;
        long cnt = mergeCount(arr, l, mid) + mergeCount(arr, mid + 1, r);
        int[] temp = new int[r - l + 1];
        int i = l, j = mid + 1, k = 0;
        while (i <= mid && j <= r) {
            if (arr[i] <= arr[j]) temp[k++] = arr[i++];
            else { temp[k++] = arr[j++]; cnt += (mid - i + 1); }
        }
        while (i <= mid) temp[k++] = arr[i++];
        while (j <= r) temp[k++] = arr[j++];
        System.arraycopy(temp, 0, arr, l, temp.length);
        return cnt;
    }
    public static void main(String[] args) {
        int[] arr = {5, 3, 2, 4, 1};
        System.out.println("Inversions: " + mergeCount(arr, 0, arr.length - 1)); // 8
    }
}
