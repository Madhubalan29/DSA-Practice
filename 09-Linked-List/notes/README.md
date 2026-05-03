# Linked List

## 🎯 Key Concepts
- **Singly Linked List**: Each node points to next
- **Doubly Linked List**: Each node points to next AND previous
- **Cycle Detection**: Floyd's Tortoise & Hare algorithm

## 🧩 Key Patterns

### Fast & Slow Pointer
- **Find middle**: Slow moves 1 step, fast moves 2 steps
- **Detect cycle**: If fast meets slow → cycle exists
- **Find cycle start**: Reset one pointer to head, move both by 1

### Reverse a Linked List
```
prev = null, curr = head
while curr:
    next = curr.next
    curr.next = prev
    prev = curr
    curr = next
return prev
```

### Dummy Head Technique
Use a dummy node when the head might change (merge, remove, partition).

## 📚 Big Company Problems
- Reverse linked list
- Detect cycle & find cycle start
- Merge two sorted lists
- Remove Nth node from end
- Add two numbers
- Copy list with random pointer
- LRU Cache (LinkedHashMap / custom DLL + HashMap)
