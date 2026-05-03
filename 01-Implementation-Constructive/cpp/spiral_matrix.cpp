/*
 * Problem: Spiral Matrix
 * Source:  LeetCode 54 - https://leetcode.com/problems/spiral-matrix/
 * 
 * Approach: Use four boundaries (top, bottom, left, right) and traverse
 *           in spiral order: right → down → left → up, shrinking boundaries.
 * Time Complexity:  O(m * n)
 * Space Complexity: O(1) extra (output not counted)
 * 
 * Tags: implementation, matrix, simulation
 */

#include <bits/stdc++.h>
using namespace std;

vector<int> spiralOrder(vector<vector<int>>& matrix) {
    vector<int> result;
    if (matrix.empty()) return result;
    
    int top = 0, bottom = matrix.size() - 1;
    int left = 0, right = matrix[0].size() - 1;
    
    while (top <= bottom && left <= right) {
        // Traverse right
        for (int j = left; j <= right; j++)
            result.push_back(matrix[top][j]);
        top++;
        
        // Traverse down
        for (int i = top; i <= bottom; i++)
            result.push_back(matrix[i][right]);
        right--;
        
        // Traverse left
        if (top <= bottom) {
            for (int j = right; j >= left; j--)
                result.push_back(matrix[bottom][j]);
            bottom--;
        }
        
        // Traverse up
        if (left <= right) {
            for (int i = bottom; i >= top; i--)
                result.push_back(matrix[i][left]);
            left++;
        }
    }
    
    return result;
}

int main() {
    vector<vector<int>> matrix = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };
    
    vector<int> result = spiralOrder(matrix);
    
    cout << "Spiral Order: ";
    for (int x : result) cout << x << " ";
    cout << endl;
    // Output: 1 2 3 6 9 8 7 4 5
    
    return 0;
}
