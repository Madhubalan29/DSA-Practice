/*
 * Problem: Cat and Mouse
 * Source:  LeetCode 913 - https://leetcode.com/problems/cat-and-mouse/
 * 
 * Approach: BFS from terminal states. State = (mouse_pos, cat_pos, whose_turn).
 *           Terminal states: mouse at 0 → mouse wins, cat at mouse → cat wins.
 *           Propagate results backwards using topological-sort-like BFS.
 * Time Complexity:  O(n^3) in worst case
 * Space Complexity: O(n^2)
 * 
 * Tags: game-theory, bfs, graph, minimax
 */

#include <bits/stdc++.h>
using namespace std;

const int MOUSE_WIN = 1, CAT_WIN = 2, DRAW = 0;
const int MOUSE_TURN = 0, CAT_TURN = 1;

int catMouseGame(vector<vector<int>>& graph) {
    int n = graph.size();
    // state[mouse][cat][turn]
    vector<vector<vector<int>>> result(n, vector<vector<int>>(n, vector<int>(2, DRAW)));
    vector<vector<vector<int>>> degree(n, vector<vector<int>>(n, vector<int>(2, 0)));
    
    // Initialize degrees
    for (int m = 0; m < n; m++) {
        for (int c = 0; c < n; c++) {
            degree[m][c][MOUSE_TURN] = graph[m].size();
            degree[m][c][CAT_TURN] = graph[c].size();
            // Cat cannot go to hole (node 0)
            for (int next : graph[c]) {
                if (next == 0) {
                    degree[m][c][CAT_TURN]--;
                }
            }
        }
    }
    
    queue<tuple<int,int,int,int>> q; // (mouse, cat, turn, result)
    
    // Terminal states
    for (int c = 1; c < n; c++) {
        for (int t = 0; t < 2; t++) {
            // Mouse at hole → mouse wins
            result[0][c][t] = MOUSE_WIN;
            q.push({0, c, t, MOUSE_WIN});
            // Cat catches mouse → cat wins
            result[c][c][t] = CAT_WIN;
            q.push({c, c, t, CAT_WIN});
        }
    }
    
    while (!q.empty()) {
        auto [m, c, t, r] = q.front(); q.pop();
        
        int prevTurn = 1 - t;
        
        if (prevTurn == MOUSE_TURN) {
            // Previous turn was mouse's — look at all states where mouse could have moved to m
            for (int prevM : graph[m]) {
                if (result[prevM][c][prevTurn] != DRAW) continue;
                
                if (r == MOUSE_WIN) {
                    // Mouse can choose this winning move
                    result[prevM][c][prevTurn] = MOUSE_WIN;
                    q.push({prevM, c, prevTurn, MOUSE_WIN});
                } else {
                    // r == CAT_WIN — mouse wouldn't choose this, but decrement degree
                    degree[prevM][c][prevTurn]--;
                    if (degree[prevM][c][prevTurn] == 0) {
                        result[prevM][c][prevTurn] = CAT_WIN;
                        q.push({prevM, c, prevTurn, CAT_WIN});
                    }
                }
            }
        } else {
            // Previous turn was cat's
            for (int prevC : graph[c]) {
                if (prevC == 0) continue; // cat can't be at hole
                if (result[m][prevC][prevTurn] != DRAW) continue;
                
                if (r == CAT_WIN) {
                    result[m][prevC][prevTurn] = CAT_WIN;
                    q.push({m, prevC, prevTurn, CAT_WIN});
                } else {
                    degree[m][prevC][prevTurn]--;
                    if (degree[m][prevC][prevTurn] == 0) {
                        result[m][prevC][prevTurn] = MOUSE_WIN;
                        q.push({m, prevC, prevTurn, MOUSE_WIN});
                    }
                }
            }
        }
    }
    
    return result[1][2][MOUSE_TURN]; // mouse at 1, cat at 2, mouse moves first
}

int main() {
    vector<vector<int>> graph = {{2,5},{3},{0,4,5},{1,4,5},{2,3},{0,2,3}};
    cout << "Result: " << catMouseGame(graph) << endl;
    // 0=Draw, 1=Mouse wins, 2=Cat wins
    
    return 0;
}
