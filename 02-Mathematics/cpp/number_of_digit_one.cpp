/*
 * Problem: Number of Digit One
 * Source:  LeetCode 233 - https://leetcode.com/problems/number-of-digit-one/
 * 
 * Approach: For each digit position, count how many times '1' appears by
 *           analyzing higher digits, current digit, and lower digits.
 *           Formula-based counting per position.
 * Time Complexity:  O(log n)
 * Space Complexity: O(1)
 * 
 * Tags: mathematics, digit-counting, pattern
 */

#include <bits/stdc++.h>
using namespace std;

int countDigitOne(int n) {
    long long count = 0;
    long long factor = 1;
    
    while (factor <= n) {
        long long lower = n % factor;
        long long current = (n / factor) % 10;
        long long higher = n / (factor * 10);
        
        if (current == 0) {
            count += higher * factor;
        } else if (current == 1) {
            count += higher * factor + lower + 1;
        } else {
            count += (higher + 1) * factor;
        }
        
        factor *= 10;
    }
    
    return (int)count;
}

int main() {
    cout << "countDigitOne(13) = " << countDigitOne(13) << endl;   // Output: 6
    cout << "countDigitOne(100) = " << countDigitOne(100) << endl; // Output: 21
    
    return 0;
}
