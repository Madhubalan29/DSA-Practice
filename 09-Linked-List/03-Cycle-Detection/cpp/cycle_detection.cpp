/*
 * Problem: Linked List Cycle II - Find cycle start
 * Source:  LeetCode 142
 * Approach: Floyd's cycle detection. Fast/slow pointers.
 * Time: O(n), Space: O(1)
 * Tags: linked-list, cycle-detection, floyd
 */
#include <bits/stdc++.h>
using namespace std;
struct ListNode { int val; ListNode* next; ListNode(int x) : val(x), next(nullptr) {} };

ListNode* detectCycle(ListNode* head) {
    ListNode *slow = head, *fast = head;
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) {
            slow = head;
            while (slow != fast) { slow = slow->next; fast = fast->next; }
            return slow;
        }
    }
    return nullptr;
}

int main() {
    ListNode* head = new ListNode(3);
    head->next = new ListNode(2);
    head->next->next = new ListNode(0);
    head->next->next->next = new ListNode(-4);
    head->next->next->next->next = head->next; // cycle at node 2
    
    ListNode* start = detectCycle(head);
    cout << "Cycle starts at: " << (start ? start->val : -1) << endl; // 2
    return 0;
}
