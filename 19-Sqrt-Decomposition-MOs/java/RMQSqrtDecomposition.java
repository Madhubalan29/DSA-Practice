/*
 * Problem: Range Minimum Query (Sqrt Decomposition)
 * Source:  SPOJ RMQSQ - https://www.spoj.com/problems/RMQSQ/
 * 
 * Approach: Block decomposition with precomputed block minimums.
 * Time Complexity:  O(n) preprocess, O(sqrt(n)) per query
 * Space Complexity: O(n)
 * 
 * Tags: sqrt-decomposition, range-query
 */

import java.util.*;
import java.io.*;

public class RMQSqrtDecomposition {
    
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine().trim());
        
        int[] arr = new int[n];
        StringTokenizer st = new StringTokenizer(br.readLine());
        for (int i = 0; i < n; i++) arr[i] = Integer.parseInt(st.nextToken());
        
        int blockSize = Math.max(1, (int) Math.sqrt(n));
        int numBlocks = (n + blockSize - 1) / blockSize;
        int[] blockMin = new int[numBlocks];
        Arrays.fill(blockMin, Integer.MAX_VALUE);
        
        for (int i = 0; i < n; i++) {
            blockMin[i / blockSize] = Math.min(blockMin[i / blockSize], arr[i]);
        }
        
        int q = Integer.parseInt(br.readLine().trim());
        StringBuilder sb = new StringBuilder();
        
        while (q-- > 0) {
            st = new StringTokenizer(br.readLine());
            int l = Integer.parseInt(st.nextToken());
            int r = Integer.parseInt(st.nextToken());
            
            int ans = Integer.MAX_VALUE;
            int blockL = l / blockSize, blockR = r / blockSize;
            
            if (blockL == blockR) {
                for (int i = l; i <= r; i++) ans = Math.min(ans, arr[i]);
            } else {
                for (int i = l; i < (blockL + 1) * blockSize; i++) ans = Math.min(ans, arr[i]);
                for (int b = blockL + 1; b < blockR; b++) ans = Math.min(ans, blockMin[b]);
                for (int i = blockR * blockSize; i <= r; i++) ans = Math.min(ans, arr[i]);
            }
            
            sb.append(ans).append("\n");
        }
        
        System.out.print(sb);
    }
}
