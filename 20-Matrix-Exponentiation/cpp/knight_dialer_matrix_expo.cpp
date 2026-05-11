/*
 * Problem: Knight Dialer (Matrix Exponentiation)
 * Source:  LeetCode 935 - https://leetcode.com/problems/knight-dialer/
 * 
 * Approach: Model as a state transition matrix (10x10 for digits 0-9).
 *           Each entry M[i][j] = 1 if knight can move from digit j to digit i.
 *           Answer = sum of all entries in M^(n-1) * initial_vector.
 * Time Complexity:  O(10^3 * log n) = O(log n)
 * Space Complexity: O(10^2)
 * 
 * Tags: matrix-exponentiation, dp, knight-moves
 */

#include <bits/stdc++.h>
using namespace std;

typedef long long ll;
typedef vector<vector<ll>> Matrix;
const ll MOD = 1e9 + 7;

Matrix multiply(const Matrix& A, const Matrix& B) {
    int n = A.size();
    Matrix C(n, vector<ll>(n, 0));
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
            for (int k = 0; k < n; k++)
                C[i][j] = (C[i][j] + A[i][k] * B[k][j]) % MOD;
    return C;
}

Matrix matPow(Matrix base, ll exp) {
    int n = base.size();
    Matrix result(n, vector<ll>(n, 0));
    for (int i = 0; i < n; i++) result[i][i] = 1;
    while (exp > 0) {
        if (exp & 1) result = multiply(result, base);
        base = multiply(base, base);
        exp >>= 1;
    }
    return result;
}

int knightDialer(int n) {
    // Adjacency: from digit i, knight can move to these digits
    vector<vector<int>> moves = {
        {4, 6},       // 0
        {6, 8},       // 1
        {7, 9},       // 2
        {4, 8},       // 3
        {0, 3, 9},    // 4
        {},            // 5
        {0, 1, 7},    // 6
        {2, 6},       // 7
        {1, 3},       // 8
        {2, 4}         // 9
    };
    
    // Build transition matrix
    Matrix trans(10, vector<ll>(10, 0));
    for (int i = 0; i < 10; i++)
        for (int j : moves[i])
            trans[j][i] = 1; // from i to j
    
    Matrix result = matPow(trans, n - 1);
    
    ll total = 0;
    for (int i = 0; i < 10; i++)
        for (int j = 0; j < 10; j++)
            total = (total + result[i][j]) % MOD;
    
    return (int)total;
}

int main() {
    cout << "n=1: " << knightDialer(1) << endl;  // 10
    cout << "n=2: " << knightDialer(2) << endl;  // 20
    cout << "n=3: " << knightDialer(3) << endl;  // 46
    cout << "n=3131: " << knightDialer(3131) << endl;
    
    return 0;
}
