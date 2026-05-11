/*
 * Problem: Reverse Nodes in k-Group
 * Source:  LeetCode 25 - https://leetcode.com/problems/reverse-nodes-in-k-group/
 * 
 * Approach: Count k nodes ahead. If available, reverse the group in-place,
 *           then recursively process the remaining list.
 * Time Complexity:  O(n)
 * Space Complexity: O(1) iterative / O(n/k) recursive stack
 * 
 * Tags: linked-list, recursion, pointer-manipulation
 */

#include <bits/stdc++.h>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* reverseKGroup(ListNode* head, int k) {
    // Check if there are at least k nodes
    ListNode* curr = head;
    int count = 0;
    while (curr && count < k) {
        curr = curr->next;
        count++;
    }
    if (count < k) return head; // not enough nodes
    
    // Reverse k nodes
    ListNode* prev = nullptr;
    curr = head;
    for (int i = 0; i < k; i++) {
        ListNode* next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }
    
    // head is now the tail of the reversed group
    head->next = reverseKGroup(curr, k);
    
    return prev; // new head of this group
}

int main() {
    ListNode* head = new ListNode(1);
    head->next = new ListNode(2);
    head->next->next = new ListNode(3);
    head->next->next->next = new ListNode(4);
    head->next->next->next->next = new ListNode(5);
    
    ListNode* result = reverseKGroup(head, 2);
    
    cout << "Result: ";
    while (result) {
        cout << result->val << " ";
        result = result->next;
    }
    cout << endl;
    // Output: 2 1 4 3 5
    
    return 0;
}
