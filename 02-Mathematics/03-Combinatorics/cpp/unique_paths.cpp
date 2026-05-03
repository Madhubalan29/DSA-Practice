/*
 * Problem: Unique Paths (nCr approach)
 * Source:  LeetCode 62 - https://leetcode.com/problems/unique-paths/
 * 
 * Approach: Answer is C(m+n-2, m-1). Use combinatorics.
 * Time Complexity:  O(min(m, n))
 * Space Complexity: O(1)
 * 
 * Tags: combinatorics, math
 */

#include <bits/stdc++.h>
using namespace std;

int uniquePaths(int m, int n) {
    // C(m+n-2, m-1)
    long long result = 1;
    int total = m + n - 2;
    int choose = min(m - 1, n - 1);
    
    for (int i = 0; i < choose; i++) {
        result = result * (total - i) / (i + 1);
    }
    
    return (int) result;
}

int main() {
    cout << "uniquePaths(3, 7) = " << uniquePaths(3, 7) << endl; // 28
    cout << "uniquePaths(3, 3) = " << uniquePaths(3, 3) << endl; // 6
    return 0;
}
