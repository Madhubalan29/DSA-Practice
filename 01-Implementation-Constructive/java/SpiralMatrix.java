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

import java.util.*;

public class SpiralMatrix {
    
    public static List<Integer> spiralOrder(int[][] matrix) {
        List<Integer> result = new ArrayList<>();
        if (matrix.length == 0) return result;
        
        int top = 0, bottom = matrix.length - 1;
        int left = 0, right = matrix[0].length - 1;
        
        while (top <= bottom && left <= right) {
            // Traverse right
            for (int j = left; j <= right; j++)
                result.add(matrix[top][j]);
            top++;
            
            // Traverse down
            for (int i = top; i <= bottom; i++)
                result.add(matrix[i][right]);
            right--;
            
            // Traverse left
            if (top <= bottom) {
                for (int j = right; j >= left; j--)
                    result.add(matrix[bottom][j]);
                bottom--;
            }
            
            // Traverse up
            if (left <= right) {
                for (int i = bottom; i >= top; i--)
                    result.add(matrix[i][left]);
                left++;
            }
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        
        List<Integer> result = spiralOrder(matrix);
        System.out.println("Spiral Order: " + result);
        // Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
    }
}
