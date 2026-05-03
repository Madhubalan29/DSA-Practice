public class ReverseLinkedList {
    static class ListNode { int val; ListNode next; ListNode(int x) { val = x; } }
    public static ListNode reverseList(ListNode head) {
        ListNode prev = null, curr = head;
        while (curr != null) { ListNode next = curr.next; curr.next = prev; prev = curr; curr = next; }
        return prev;
    }
    public static void main(String[] args) {
        ListNode head = new ListNode(1); head.next = new ListNode(2); head.next.next = new ListNode(3);
        ListNode rev = reverseList(head);
        while (rev != null) { System.out.print(rev.val + " "); rev = rev.next; } // 3 2 1
    }
}
