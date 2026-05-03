public class CycleDetection {
    static class ListNode { int val; ListNode next; ListNode(int x) { val = x; } }
    public static ListNode detectCycle(ListNode head) {
        ListNode slow = head, fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next; fast = fast.next.next;
            if (slow == fast) {
                slow = head;
                while (slow != fast) { slow = slow.next; fast = fast.next; }
                return slow;
            }
        }
        return null;
    }
    public static void main(String[] args) {
        ListNode head = new ListNode(3); head.next = new ListNode(2);
        head.next.next = new ListNode(0); head.next.next.next = new ListNode(-4);
        head.next.next.next.next = head.next;
        System.out.println("Cycle at: " + detectCycle(head).val); // 2
    }
}
