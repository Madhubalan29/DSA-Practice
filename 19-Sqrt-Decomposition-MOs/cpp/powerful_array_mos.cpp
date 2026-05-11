/*
 * Problem: Powerful Array (MO's Algorithm)
 * Source:  Codeforces 86D - https://codeforces.com/problemset/problem/86/D
 * 
 * Approach: MO's algorithm — sort queries by (L/block, R). Maintain current
 *           answer by adding/removing elements. cnt[x]^2 * x contribution.
 * Time Complexity:  O((n + q) * sqrt(n))
 * Space Complexity: O(n + q)
 * 
 * Tags: sqrt-decomposition, mos-algorithm, offline
 */

#include <bits/stdc++.h>
using namespace std;

const int MAXN = 200005;
int arr[MAXN];
long long cnt[1000006];
long long answers[MAXN];
long long currentAns = 0;
int blockSize;

struct Query {
    int l, r, idx;
};

void add(int pos) {
    currentAns -= cnt[arr[pos]] * cnt[arr[pos]] * arr[pos];
    cnt[arr[pos]]++;
    currentAns += cnt[arr[pos]] * cnt[arr[pos]] * arr[pos];
}

void remove(int pos) {
    currentAns -= cnt[arr[pos]] * cnt[arr[pos]] * arr[pos];
    cnt[arr[pos]]--;
    currentAns += cnt[arr[pos]] * cnt[arr[pos]] * arr[pos];
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    
    int n, q;
    cin >> n >> q;
    
    blockSize = max(1, (int)sqrt(n));
    
    for (int i = 0; i < n; i++) cin >> arr[i];
    
    vector<Query> queries(q);
    for (int i = 0; i < q; i++) {
        cin >> queries[i].l >> queries[i].r;
        queries[i].l--; queries[i].r--; // 0-indexed
        queries[i].idx = i;
    }
    
    // Sort by MO's ordering
    sort(queries.begin(), queries.end(), [](const Query& a, const Query& b) {
        int blockA = a.l / ::blockSize, blockB = b.l / ::blockSize;
        if (blockA != blockB) return blockA < blockB;
        return (blockA & 1) ? (a.r > b.r) : (a.r < b.r);
    });
    
    int curL = 0, curR = -1;
    
    for (auto& q : queries) {
        while (curR < q.r) add(++curR);
        while (curL > q.l) add(--curL);
        while (curR > q.r) remove(curR--);
        while (curL < q.l) remove(curL++);
        
        answers[q.idx] = currentAns;
    }
    
    for (int i = 0; i < (int)queries.size(); i++) {
        cout << answers[i] << "\n";
    }
    
    return 0;
}
