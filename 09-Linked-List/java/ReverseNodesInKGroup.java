/*
 * Problem: Reverse Nodes in k-Group
 * Source:  LeetCode 25 - https://leetcode.com/problems/reverse-nodes-in-k-group/
 * 
 * Approach: Count k nodes, reverse group, recurse on remainder.
 * Time Complexity:  O(n)
 * Space Complexity: O(n/k) recursive stack
 * 
 * Tags: linked-list, recursion, pointer-manipulation
 */

import java.util.*;

public class ReverseNodesInKGroup {
    
    static class ListNode {
        int val;
        ListNode next;
        ListNode(int x) { val = x; }
    }
    
    public ListNode reverseKGroup(ListNode head, int k) {
        ListNode curr = head;
        int count = 0;
        while (curr != null && count < k) {
            curr = curr.next;
            count++;
        }
        if (count < k) return head;
        
        ListNode prev = null;
        curr = head;
        for (int i = 0; i < k; i++) {
            ListNode next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        
        head.next = reverseKGroup(curr, k);
        return prev;
    }
    
    public static void main(String[] args) {
        ReverseNodesInKGroup sol = new ReverseNodesInKGroup();
        
        ListNode head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        head.next.next.next = new ListNode(4);
        head.next.next.next.next = new ListNode(5);
        
        ListNode result = sol.reverseKGroup(head, 2);
        
        System.out.print("Result: ");
        while (result != null) {
            System.out.print(result.val + " ");
            result = result.next;
        }
        // Output: 2 1 4 3 5
    }
}
