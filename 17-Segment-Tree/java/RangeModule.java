/*
 * Problem: Range Module
 * Source:  LeetCode 715 - https://leetcode.com/problems/range-module/
 * 
 * Approach: TreeMap-based interval management.
 * Time Complexity:  O(n log n) per operation amortized
 * Space Complexity: O(n)
 * 
 * Tags: segment-tree, interval-management, ordered-map
 */

import java.util.*;

public class RangeModule {
    
    TreeMap<Integer, Integer> intervals; // key=left, value=right
    
    public RangeModule() {
        intervals = new TreeMap<>();
    }
    
    public void addRange(int left, int right) {
        Integer start = intervals.floorKey(left);
        Integer end = intervals.floorKey(right);
        
        if (start != null && intervals.get(start) >= left) {
            left = start;
        }
        if (end != null && intervals.get(end) > right) {
            right = intervals.get(end);
        }
        
        intervals.subMap(left, true, right, true).clear();
        intervals.put(left, right);
    }
    
    public boolean queryRange(int left, int right) {
        Integer start = intervals.floorKey(left);
        return start != null && intervals.get(start) >= right;
    }
    
    public void removeRange(int left, int right) {
        Integer start = intervals.floorKey(left);
        Integer end = intervals.floorKey(right);
        
        if (end != null && intervals.get(end) > right) {
            intervals.put(right, intervals.get(end));
        }
        if (start != null && intervals.get(start) > left) {
            intervals.put(start, left);
        }
        
        intervals.subMap(left, true, right, false).clear();
    }
    
    public static void main(String[] args) {
        RangeModule rm = new RangeModule();
        rm.addRange(10, 20);
        rm.removeRange(14, 16);
        System.out.println("Query [10,14): " + rm.queryRange(10, 14)); // true
        System.out.println("Query [13,15): " + rm.queryRange(13, 15)); // false
        System.out.println("Query [16,17): " + rm.queryRange(16, 17)); // true
    }
}
