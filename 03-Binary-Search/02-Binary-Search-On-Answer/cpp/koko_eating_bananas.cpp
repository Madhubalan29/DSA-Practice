/*
 * Problem: Koko Eating Bananas
 * Source:  LeetCode 875 - https://leetcode.com/problems/koko-eating-bananas/
 * 
 * Approach: Binary search on the answer (eating speed k).
 *           For each k, check if Koko can finish all piles in h hours.
 * Time Complexity:  O(n * log(max_pile))
 * Space Complexity: O(1)
 * Tags: binary-search-on-answer
 */

#include <bits/stdc++.h>
using namespace std;

bool canFinish(vector<int>& piles, int k, int h) {
    long long hours = 0;
    for (int p : piles)
        hours += (p + k - 1) / k;  // ceil division
    return hours <= h;
}

int minEatingSpeed(vector<int>& piles, int h) {
    int lo = 1, hi = *max_element(piles.begin(), piles.end());
    while (lo < hi) {
        int mid = lo + (hi - lo) / 2;
        if (canFinish(piles, mid, h)) hi = mid;
        else lo = mid + 1;
    }
    return lo;
}

int main() {
    vector<int> piles = {3, 6, 7, 11};
    cout << "Min speed (h=8): " << minEatingSpeed(piles, 8) << endl;  // 4
    
    vector<int> piles2 = {30, 11, 23, 4, 20};
    cout << "Min speed (h=5): " << minEatingSpeed(piles2, 5) << endl; // 30
    cout << "Min speed (h=6): " << minEatingSpeed(piles2, 6) << endl; // 23
    return 0;
}
