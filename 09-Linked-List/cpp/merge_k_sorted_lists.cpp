/*
 * Problem: Merge k Sorted Lists
 * Source:  LeetCode 23 - https://leetcode.com/problems/merge-k-sorted-lists/
 * 
 * Approach: Use a min-heap to always extract the smallest node across all lists.
 *           Push the next node of the extracted node back into the heap.
 * Time Complexity:  O(N log k) where N = total nodes, k = number of lists
 * Space Complexity: O(k)
 * 
 * Tags: linked-list, heap, priority-queue, divide-and-conquer
 */

#include <bits/stdc++.h>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* mergeKLists(vector<ListNode*>& lists) {
    auto cmp = [](ListNode* a, ListNode* b) { return a->val > b->val; };
    priority_queue<ListNode*, vector<ListNode*>, decltype(cmp)> pq(cmp);
    
    for (ListNode* list : lists) {
        if (list) pq.push(list);
    }
    
    ListNode dummy(0);
    ListNode* tail = &dummy;
    
    while (!pq.empty()) {
        ListNode* node = pq.top();
        pq.pop();
        tail->next = node;
        tail = tail->next;
        if (node->next) pq.push(node->next);
    }
    
    return dummy.next;
}

int main() {
    // Create lists: [1->4->5], [1->3->4], [2->6]
    ListNode* l1 = new ListNode(1);
    l1->next = new ListNode(4);
    l1->next->next = new ListNode(5);
    
    ListNode* l2 = new ListNode(1);
    l2->next = new ListNode(3);
    l2->next->next = new ListNode(4);
    
    ListNode* l3 = new ListNode(2);
    l3->next = new ListNode(6);
    
    vector<ListNode*> lists = {l1, l2, l3};
    ListNode* result = mergeKLists(lists);
    
    cout << "Merged: ";
    while (result) {
        cout << result->val << " ";
        result = result->next;
    }
    cout << endl;
    // Output: 1 1 2 3 4 4 5 6
    
    return 0;
}
