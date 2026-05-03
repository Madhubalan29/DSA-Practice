/*
 * Problem: Top K Frequent Elements
 * Source:  LeetCode 347
 * Time: O(n log k), Space: O(n)
 * Tags: priority-queue, heap, hashing
 */
#include <bits/stdc++.h>
using namespace std;

vector<int> topKFrequent(vector<int>& nums, int k) {
    unordered_map<int, int> freq;
    for (int x : nums) freq[x]++;
    
    priority_queue<pair<int,int>, vector<pair<int,int>>, greater<>> minHeap;
    for (auto& [val, cnt] : freq) {
        minHeap.push({cnt, val});
        if (minHeap.size() > k) minHeap.pop();
    }
    
    vector<int> result;
    while (!minHeap.empty()) { result.push_back(minHeap.top().second); minHeap.pop(); }
    return result;
}

int main() {
    vector<int> nums = {1,1,1,2,2,3};
    auto res = topKFrequent(nums, 2);
    for (int x : res) cout << x << " "; // 2 1 (or 1 2)
    return 0;
}
