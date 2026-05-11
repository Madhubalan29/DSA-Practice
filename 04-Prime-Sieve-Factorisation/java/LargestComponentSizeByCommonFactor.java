/*
 * Problem: Largest Component Size by Common Factor
 * Source:  LeetCode 952 - https://leetcode.com/problems/largest-component-size-by-common-factor/
 * 
 * Approach: For each number, find all its prime factors. Union the number with
 *           each of its prime factors using DSU.
 * Time Complexity:  O(n * sqrt(max_val) * α(n))
 * Space Complexity: O(max_val)
 * 
 * Tags: prime-factorisation, dsu, union-find
 */

import java.util.*;

public class LargestComponentSizeByCommonFactor {
    
    int[] parent, rank;
    
    int find(int x) {
        return parent[x] == x ? x : (parent[x] = find(parent[x]));
    }
    
    void unite(int x, int y) {
        x = find(x); y = find(y);
        if (x == y) return;
        if (rank[x] < rank[y]) { int t = x; x = y; y = t; }
        parent[y] = x;
        if (rank[x] == rank[y]) rank[x]++;
    }
    
    public int largestComponentSize(int[] nums) {
        int maxVal = 0;
        for (int num : nums) maxVal = Math.max(maxVal, num);
        
        parent = new int[maxVal + 1];
        rank = new int[maxVal + 1];
        for (int i = 0; i <= maxVal; i++) parent[i] = i;
        
        for (int num : nums) {
            for (int f = 2; f * f <= num; f++) {
                if (num % f == 0) {
                    unite(num, f);
                    unite(num, num / f);
                }
            }
        }
        
        Map<Integer, Integer> componentSize = new HashMap<>();
        int result = 1;
        
        for (int num : nums) {
            int root = find(num);
            componentSize.put(root, componentSize.getOrDefault(root, 0) + 1);
            result = Math.max(result, componentSize.get(root));
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        LargestComponentSizeByCommonFactor sol = new LargestComponentSizeByCommonFactor();
        System.out.println(sol.largestComponentSize(new int[]{4, 6, 15, 35})); // Output: 4
        System.out.println(sol.largestComponentSize(new int[]{20, 50, 9, 63})); // Output: 2
    }
}
