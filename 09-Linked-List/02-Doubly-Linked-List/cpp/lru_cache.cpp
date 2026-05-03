/*
 * Problem: LRU Cache (uses Doubly Linked List + HashMap)
 * Source:  LeetCode 146
 * Time: O(1) get and put, Space: O(capacity)
 * Tags: doubly-linked-list, hashing, design
 */
#include <bits/stdc++.h>
using namespace std;

class LRUCache {
    int cap;
    list<pair<int,int>> dll;
    unordered_map<int, list<pair<int,int>>::iterator> mp;
public:
    LRUCache(int capacity) : cap(capacity) {}
    
    int get(int key) {
        if (!mp.count(key)) return -1;
        dll.splice(dll.begin(), dll, mp[key]);
        return mp[key]->second;
    }
    
    void put(int key, int value) {
        if (mp.count(key)) {
            dll.splice(dll.begin(), dll, mp[key]);
            mp[key]->second = value;
            return;
        }
        if (dll.size() == cap) {
            mp.erase(dll.back().first);
            dll.pop_back();
        }
        dll.push_front({key, value});
        mp[key] = dll.begin();
    }
};

int main() {
    LRUCache cache(2);
    cache.put(1, 1); cache.put(2, 2);
    cout << cache.get(1) << endl;  // 1
    cache.put(3, 3);               // evicts key 2
    cout << cache.get(2) << endl;  // -1
    return 0;
}
