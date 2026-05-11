/*
 * Problem: IPO (Initial Public Offering)
 * Source:  LeetCode 502 - https://leetcode.com/problems/ipo/
 * 
 * Approach: Min-heap sorted by capital requirement. Max-heap for available profits.
 *           Greedily pick the most profitable project we can afford.
 * Time Complexity:  O(n log n)
 * Space Complexity: O(n)
 * 
 * Tags: greedy, heap, priority-queue
 */

#include <bits/stdc++.h>
using namespace std;

int findMaximizedCapital(int k, int w, vector<int>& profits, vector<int>& capital) {
    int n = profits.size();
    
    // Sort projects by capital requirement
    vector<pair<int, int>> projects(n);
    for (int i = 0; i < n; i++) projects[i] = {capital[i], profits[i]};
    sort(projects.begin(), projects.end());
    
    priority_queue<int> maxHeap; // available profits
    int idx = 0;
    
    for (int i = 0; i < k; i++) {
        // Add all affordable projects
        while (idx < n && projects[idx].first <= w) {
            maxHeap.push(projects[idx].second);
            idx++;
        }
        
        if (maxHeap.empty()) break;
        
        w += maxHeap.top();
        maxHeap.pop();
    }
    
    return w;
}

int main() {
    vector<int> profits = {1, 2, 3};
    vector<int> capital = {0, 1, 1};
    cout << "Max capital: " << findMaximizedCapital(2, 0, profits, capital) << endl;
    // Output: 4
    
    return 0;
}
