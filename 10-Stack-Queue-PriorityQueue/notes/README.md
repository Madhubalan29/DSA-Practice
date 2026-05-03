# Stack, Queue & Priority Queue

## 🧩 Key Patterns

### Monotonic Stack
Maintain a stack in increasing/decreasing order to find **next/previous greater/smaller** element.
```
// Next Greater Element
stack<int> st;
for (int i = n - 1; i >= 0; i--) {
    while (!st.empty() && st.top() <= arr[i]) st.pop();
    result[i] = st.empty() ? -1 : st.top();
    st.push(arr[i]);
}
```

### Stack Applications
- Valid parentheses
- Evaluate postfix expression
- Min stack (track min at each level)
- Largest rectangle in histogram ⭐⭐⭐

### Priority Queue (Heap)
- **Min-heap**: Get minimum in O(1), insert/delete in O(log n)
- **Max-heap**: Get maximum in O(1)
- Used for: Top K elements, merge K sorted lists, median stream

## 📚 Big Company Problems
- Valid parentheses
- Min stack
- Next greater element I & II
- Largest rectangle in histogram
- Trapping rain water (stack approach)
- Top K frequent elements
- Merge K sorted lists
- Find median from data stream
- Sliding window maximum
