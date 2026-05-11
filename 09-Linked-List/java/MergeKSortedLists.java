/*
 * Problem: Merge k Sorted Lists
 * Source:  LeetCode 23 - https://leetcode.com/problems/merge-k-sorted-lists/
 * 
 * Approach: Min-heap to always extract the smallest node across all lists.
 * Time Complexity:  O(N log k)
 * Space Complexity: O(k)
 * 
 * Tags: linked-list, heap, priority-queue
 */

import java.util.*;

public class MergeKSortedLists {
    
    static class ListNode {
        int val;
        ListNode next;
        ListNode(int x) { val = x; }
    }
    
    public ListNode mergeKLists(ListNode[] lists) {
        PriorityQueue<ListNode> pq = new PriorityQueue<>((a, b) -> a.val - b.val);
        
        for (ListNode list : lists) {
            if (list != null) pq.offer(list);
        }
        
        ListNode dummy = new ListNode(0);
        ListNode tail = dummy;
        
        while (!pq.isEmpty()) {
            ListNode node = pq.poll();
            tail.next = node;
            tail = tail.next;
            if (node.next != null) pq.offer(node.next);
        }
        
        return dummy.next;
    }
    
    public static void main(String[] args) {
        MergeKSortedLists sol = new MergeKSortedLists();
        
        ListNode l1 = new ListNode(1);
        l1.next = new ListNode(4);
        l1.next.next = new ListNode(5);
        
        ListNode l2 = new ListNode(1);
        l2.next = new ListNode(3);
        l2.next.next = new ListNode(4);
        
        ListNode l3 = new ListNode(2);
        l3.next = new ListNode(6);
        
        ListNode result = sol.mergeKLists(new ListNode[]{l1, l2, l3});
        
        System.out.print("Merged: ");
        while (result != null) {
            System.out.print(result.val + " ");
            result = result.next;
        }
        // Output: 1 1 2 3 4 4 5 6
    }
}
