/*
 * Problem: Koko Eating Bananas
 * Source:  LeetCode 875
 * Tags: binary-search-on-answer
 */

import java.util.*;

public class KokoEatingBananas {
    
    static boolean canFinish(int[] piles, int k, int h) {
        long hours = 0;
        for (int p : piles)
            hours += (p + k - 1) / k;
        return hours <= h;
    }
    
    public static int minEatingSpeed(int[] piles, int h) {
        int lo = 1, hi = Arrays.stream(piles).max().getAsInt();
        while (lo < hi) {
            int mid = lo + (hi - lo) / 2;
            if (canFinish(piles, mid, h)) hi = mid;
            else lo = mid + 1;
        }
        return lo;
    }
    
    public static void main(String[] args) {
        System.out.println("Min speed (h=8): " + minEatingSpeed(new int[]{3, 6, 7, 11}, 8)); // 4
        System.out.println("Min speed (h=5): " + minEatingSpeed(new int[]{30, 11, 23, 4, 20}, 5)); // 30
    }
}
