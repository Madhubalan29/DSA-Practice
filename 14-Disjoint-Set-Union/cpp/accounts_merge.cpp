/*
 * Problem: Accounts Merge
 * Source:  LeetCode 721 - https://leetcode.com/problems/accounts-merge/
 * 
 * Approach: Map each email to an index. Union emails belonging to the same account.
 *           Group emails by root, sort each group, prepend account name.
 * Time Complexity:  O(n * k * α(n*k)) where k = avg emails per account
 * Space Complexity: O(n * k)
 * 
 * Tags: dsu, union-find, hashing
 */

#include <bits/stdc++.h>
using namespace std;

class DSU {
    vector<int> parent, rank_;
public:
    DSU(int n) : parent(n), rank_(n, 0) {
        iota(parent.begin(), parent.end(), 0);
    }
    int find(int x) {
        return parent[x] == x ? x : parent[x] = find(parent[x]);
    }
    void unite(int x, int y) {
        x = find(x); y = find(y);
        if (x == y) return;
        if (rank_[x] < rank_[y]) swap(x, y);
        parent[y] = x;
        if (rank_[x] == rank_[y]) rank_[x]++;
    }
};

vector<vector<string>> accountsMerge(vector<vector<string>>& accounts) {
    unordered_map<string, int> emailToId;
    unordered_map<string, string> emailToName;
    int id = 0;
    
    for (auto& acc : accounts) {
        string name = acc[0];
        for (int i = 1; i < (int)acc.size(); i++) {
            if (!emailToId.count(acc[i])) {
                emailToId[acc[i]] = id++;
            }
            emailToName[acc[i]] = name;
        }
    }
    
    DSU dsu(id);
    
    for (auto& acc : accounts) {
        for (int i = 2; i < (int)acc.size(); i++) {
            dsu.unite(emailToId[acc[1]], emailToId[acc[i]]);
        }
    }
    
    unordered_map<int, vector<string>> groups;
    for (auto& [email, eid] : emailToId) {
        groups[dsu.find(eid)].push_back(email);
    }
    
    vector<vector<string>> result;
    for (auto& [root, emails] : groups) {
        sort(emails.begin(), emails.end());
        string name = emailToName[emails[0]];
        vector<string> merged = {name};
        merged.insert(merged.end(), emails.begin(), emails.end());
        result.push_back(merged);
    }
    
    return result;
}

int main() {
    vector<vector<string>> accounts = {
        {"John", "johnsmith@mail.com", "john_newyork@mail.com"},
        {"John", "johnsmith@mail.com", "john00@mail.com"},
        {"Mary", "mary@mail.com"},
        {"John", "johnnybravo@mail.com"}
    };
    
    auto result = accountsMerge(accounts);
    for (auto& acc : result) {
        for (auto& s : acc) cout << s << " ";
        cout << endl;
    }
    
    return 0;
}
