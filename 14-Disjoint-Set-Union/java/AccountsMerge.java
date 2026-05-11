/*
 * Problem: Accounts Merge
 * Source:  LeetCode 721 - https://leetcode.com/problems/accounts-merge/
 * 
 * Approach: DSU on email indices. Group by root, sort, prepend name.
 * Time Complexity:  O(n * k * α(n*k))
 * Space Complexity: O(n * k)
 * 
 * Tags: dsu, union-find, hashing
 */

import java.util.*;

public class AccountsMerge {
    
    int[] parent, rank;
    
    int find(int x) { return parent[x] == x ? x : (parent[x] = find(parent[x])); }
    
    void unite(int x, int y) {
        x = find(x); y = find(y);
        if (x == y) return;
        if (rank[x] < rank[y]) { int t = x; x = y; y = t; }
        parent[y] = x;
        if (rank[x] == rank[y]) rank[x]++;
    }
    
    public List<List<String>> accountsMerge(List<List<String>> accounts) {
        Map<String, Integer> emailToId = new HashMap<>();
        Map<String, String> emailToName = new HashMap<>();
        int id = 0;
        
        for (List<String> acc : accounts) {
            String name = acc.get(0);
            for (int i = 1; i < acc.size(); i++) {
                if (!emailToId.containsKey(acc.get(i))) {
                    emailToId.put(acc.get(i), id++);
                }
                emailToName.put(acc.get(i), name);
            }
        }
        
        parent = new int[id];
        rank = new int[id];
        for (int i = 0; i < id; i++) parent[i] = i;
        
        for (List<String> acc : accounts) {
            for (int i = 2; i < acc.size(); i++) {
                unite(emailToId.get(acc.get(1)), emailToId.get(acc.get(i)));
            }
        }
        
        Map<Integer, List<String>> groups = new HashMap<>();
        for (Map.Entry<String, Integer> entry : emailToId.entrySet()) {
            int root = find(entry.getValue());
            groups.computeIfAbsent(root, k -> new ArrayList<>()).add(entry.getKey());
        }
        
        List<List<String>> result = new ArrayList<>();
        for (List<String> emails : groups.values()) {
            Collections.sort(emails);
            List<String> merged = new ArrayList<>();
            merged.add(emailToName.get(emails.get(0)));
            merged.addAll(emails);
            result.add(merged);
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        AccountsMerge sol = new AccountsMerge();
        List<List<String>> accounts = new ArrayList<>();
        accounts.add(Arrays.asList("John", "johnsmith@mail.com", "john_newyork@mail.com"));
        accounts.add(Arrays.asList("John", "johnsmith@mail.com", "john00@mail.com"));
        accounts.add(Arrays.asList("Mary", "mary@mail.com"));
        accounts.add(Arrays.asList("John", "johnnybravo@mail.com"));
        
        System.out.println(sol.accountsMerge(accounts));
    }
}
