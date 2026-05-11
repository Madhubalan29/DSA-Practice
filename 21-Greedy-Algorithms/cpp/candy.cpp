/*
 * Problem: Candy
 * Source:  LeetCode 135 - https://leetcode.com/problems/candy/
 * 
 * Approach: Two-pass greedy. Left-to-right: if ratings[i] > ratings[i-1], 
 *           give more candy. Right-to-left: same for right neighbor.
 *           Take max of both passes.
 * Time Complexity:  O(n)
 * Space Complexity: O(n)
 * 
 * Tags: greedy, arrays
 */

#include <bits/stdc++.h>
using namespace std;

int candy(vector<int>& ratings) {
    int n = ratings.size();
    vector<int> candies(n, 1);
    
    // Left to right pass
    for (int i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }
    
    // Right to left pass
    for (int i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candies[i] = max(candies[i], candies[i + 1] + 1);
        }
    }
    
    return accumulate(candies.begin(), candies.end(), 0);
}

int main() {
    vector<int> ratings = {1, 0, 2};
    cout << "Min candies: " << candy(ratings) << endl; // Output: 5
    
    vector<int> ratings2 = {1, 2, 2};
    cout << "Min candies: " << candy(ratings2) << endl; // Output: 4
    
    return 0;
}
