/*
 * Problem: GCD and LCM using Euclidean Algorithm
 * Source:  CP-Algorithms
 * 
 * Approach: Euclidean algorithm: gcd(a, b) = gcd(b, a % b).
 *           Extended GCD finds x, y such that ax + by = gcd(a, b).
 * Time Complexity:  O(log(min(a, b)))
 * Space Complexity: O(1)
 * 
 * Tags: math, gcd, euclidean
 */

#include <bits/stdc++.h>
using namespace std;
typedef long long ll;

ll gcd(ll a, ll b) {
    while (b) {
        a %= b;
        swap(a, b);
    }
    return a;
}

ll lcm(ll a, ll b) {
    return a / gcd(a, b) * b;
}

// Extended GCD: ax + by = gcd(a, b)
ll extGcd(ll a, ll b, ll &x, ll &y) {
    if (b == 0) {
        x = 1; y = 0;
        return a;
    }
    ll x1, y1;
    ll g = extGcd(b, a % b, x1, y1);
    x = y1;
    y = x1 - (a / b) * y1;
    return g;
}

int main() {
    cout << "gcd(12, 8) = " << gcd(12, 8) << endl;     // 4
    cout << "lcm(12, 8) = " << lcm(12, 8) << endl;     // 24
    cout << "gcd(100, 75) = " << gcd(100, 75) << endl;  // 25
    
    ll x, y;
    ll g = extGcd(30, 20, x, y);
    cout << "ExtGCD(30, 20): " << x << "*30 + " << y << "*20 = " << g << endl;
    
    return 0;
}
