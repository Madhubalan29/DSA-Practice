/*
 * Problem: Range Minimum Query (Sqrt Decomposition)
 * Source:  SPOJ RMQSQ - https://www.spoj.com/problems/RMQSQ/
 * 
 * Approach: Precompute block minimums for blocks of size sqrt(n).
 *           For each query, combine partial blocks on edges + full blocks in middle.
 * Time Complexity:  O(n) preprocess, O(sqrt(n)) per query
 * Space Complexity: O(n)
 * 
 * Tags: sqrt-decomposition, range-query
 */

#include <bits/stdc++.h>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    
    int n;
    cin >> n;
    
    vector<int> arr(n);
    for (int i = 0; i < n; i++) cin >> arr[i];
    
    int blockSize = max(1, (int)sqrt(n));
    int numBlocks = (n + blockSize - 1) / blockSize;
    vector<int> blockMin(numBlocks, INT_MAX);
    
    // Precompute block minimums
    for (int i = 0; i < n; i++) {
        blockMin[i / blockSize] = min(blockMin[i / blockSize], arr[i]);
    }
    
    int q;
    cin >> q;
    
    while (q--) {
        int l, r;
        cin >> l >> r;
        
        int ans = INT_MAX;
        int blockL = l / blockSize;
        int blockR = r / blockSize;
        
        if (blockL == blockR) {
            // Same block — scan directly
            for (int i = l; i <= r; i++) ans = min(ans, arr[i]);
        } else {
            // Left partial block
            for (int i = l; i < (blockL + 1) * blockSize; i++) ans = min(ans, arr[i]);
            // Full blocks in middle
            for (int b = blockL + 1; b < blockR; b++) ans = min(ans, blockMin[b]);
            // Right partial block
            for (int i = blockR * blockSize; i <= r; i++) ans = min(ans, arr[i]);
        }
        
        cout << ans << "\n";
    }
    
    return 0;
}
