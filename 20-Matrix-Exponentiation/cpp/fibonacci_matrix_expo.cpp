/*
 * Problem: Fibonacci via Matrix Exponentiation
 * Source:  Codeforces 185A - https://codeforces.com/problemset/problem/185/A
 *          Also: LeetCode 509 (solve in O(log n)) - https://leetcode.com/problems/fibonacci-number/
 * 
 * Approach: |F(n+1)| = |1 1|^n * |1|
 *           |F(n)  |   |1 0|     |0|
 *           Use fast matrix exponentiation (binary exponentiation on matrices).
 * Time Complexity:  O(k^3 * log n) where k=2 for Fibonacci
 * Space Complexity: O(k^2)
 * 
 * Tags: matrix-exponentiation, binary-exponentiation, linear-recurrence
 */

#include <bits/stdc++.h>
using namespace std;

typedef long long ll;
typedef vector<vector<ll>> Matrix;
const ll MOD = 1e9 + 7;

Matrix multiply(const Matrix& A, const Matrix& B) {
    int n = A.size(), m = B[0].size(), k = B.size();
    Matrix C(n, vector<ll>(m, 0));
    for (int i = 0; i < n; i++)
        for (int j = 0; j < m; j++)
            for (int p = 0; p < k; p++)
                C[i][j] = (C[i][j] + A[i][p] * B[p][j]) % MOD;
    return C;
}

Matrix matPow(Matrix base, ll exp) {
    int n = base.size();
    Matrix result(n, vector<ll>(n, 0));
    for (int i = 0; i < n; i++) result[i][i] = 1; // identity
    
    while (exp > 0) {
        if (exp & 1) result = multiply(result, base);
        base = multiply(base, base);
        exp >>= 1;
    }
    return result;
}

ll fibonacci(ll n) {
    if (n <= 1) return n;
    Matrix base = {{1, 1}, {1, 0}};
    Matrix result = matPow(base, n - 1);
    return result[0][0]; // F(n)
}

int main() {
    ll n;
    cin >> n;
    cout << "F(" << n << ") = " << fibonacci(n) << endl;
    
    // Test cases
    cout << "F(10) = " << fibonacci(10) << endl;   // 55
    cout << "F(50) = " << fibonacci(50) << endl;   // 12586269025 mod 10^9+7
    
    return 0;
}
