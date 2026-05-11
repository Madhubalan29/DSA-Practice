/*
 * Problem: Powerful Array (MO's Algorithm)
 * Source:  Codeforces 86D - https://codeforces.com/problemset/problem/86/D
 * 
 * Approach: MO's algorithm with block sorting for offline queries.
 * Time Complexity:  O((n + q) * sqrt(n))
 * Space Complexity: O(n + q)
 * 
 * Tags: sqrt-decomposition, mos-algorithm, offline
 */

import java.util.*;
import java.io.*;

public class PowerfulArrayMOs {
    
    static int[] arr;
    static long[] cnt;
    static long currentAns = 0;
    
    static void add(int pos) {
        currentAns -= cnt[arr[pos]] * cnt[arr[pos]] * arr[pos];
        cnt[arr[pos]]++;
        currentAns += cnt[arr[pos]] * cnt[arr[pos]] * arr[pos];
    }
    
    static void remove(int pos) {
        currentAns -= cnt[arr[pos]] * cnt[arr[pos]] * arr[pos];
        cnt[arr[pos]]--;
        currentAns += cnt[arr[pos]] * cnt[arr[pos]] * arr[pos];
    }
    
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken());
        int q = Integer.parseInt(st.nextToken());
        
        int blockSize = Math.max(1, (int) Math.sqrt(n));
        
        arr = new int[n];
        st = new StringTokenizer(br.readLine());
        int maxVal = 0;
        for (int i = 0; i < n; i++) {
            arr[i] = Integer.parseInt(st.nextToken());
            maxVal = Math.max(maxVal, arr[i]);
        }
        cnt = new long[maxVal + 1];
        
        int[][] queries = new int[q][3]; // {l, r, idx}
        for (int i = 0; i < q; i++) {
            st = new StringTokenizer(br.readLine());
            queries[i][0] = Integer.parseInt(st.nextToken()) - 1;
            queries[i][1] = Integer.parseInt(st.nextToken()) - 1;
            queries[i][2] = i;
        }
        
        final int bs = blockSize;
        Arrays.sort(queries, (a, b) -> {
            int ba = a[0] / bs, bb = b[0] / bs;
            if (ba != bb) return ba - bb;
            return (ba & 1) == 1 ? b[1] - a[1] : a[1] - b[1];
        });
        
        long[] answers = new long[q];
        int curL = 0, curR = -1;
        
        for (int[] query : queries) {
            int l = query[0], r = query[1];
            while (curR < r) add(++curR);
            while (curL > l) add(--curL);
            while (curR > r) remove(curR--);
            while (curL < l) remove(curL++);
            answers[query[2]] = currentAns;
        }
        
        StringBuilder sb = new StringBuilder();
        for (long ans : answers) sb.append(ans).append("\n");
        System.out.print(sb);
    }
}
