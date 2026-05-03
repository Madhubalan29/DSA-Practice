/*
 * Problem: Reverse Linked List
 * Source:  LeetCode 206
 * Time: O(n), Space: O(1)
 * Tags: linked-list
 */
#include <bits/stdc++.h>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* reverseList(ListNode* head) {
    ListNode* prev = nullptr, *curr = head;
    while (curr) {
        ListNode* next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

int main() {
    ListNode* head = new ListNode(1);
    head->next = new ListNode(2);
    head->next->next = new ListNode(3);
    head->next->next->next = new ListNode(4);
    head->next->next->next->next = new ListNode(5);
    
    ListNode* reversed = reverseList(head);
    while (reversed) { cout << reversed->val << " "; reversed = reversed->next; }
    // Output: 5 4 3 2 1
    return 0;
}
