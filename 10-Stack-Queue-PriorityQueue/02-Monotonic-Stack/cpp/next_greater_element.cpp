/*
 * Problem: Next Greater Element I
 * Source:  LeetCode 496
 * Approach: Monotonic decreasing stack. Process from right to left.
 * Time: O(n), Space: O(n)
 * Tags: monotonic-stack
 */
#include <bits/stdc++.h>
using namespace std;

vector<int> nextGreaterElement(vector<int>& nums) {
    int n = nums.size();
    vector<int> result(n);
    stack<int> st;
    for (int i = n - 1; i >= 0; i--) {
        while (!st.empty() && st.top() <= nums[i]) st.pop();
        result[i] = st.empty() ? -1 : st.top();
        st.push(nums[i]);
    }
    return result;
}

int main() {
    vector<int> nums = {4, 5, 2, 25};
    auto res = nextGreaterElement(nums);
    for (int i = 0; i < nums.size(); i++)
        cout << nums[i] << " -> " << res[i] << endl;
    // 4->5, 5->25, 2->25, 25->-1
    return 0;
}
