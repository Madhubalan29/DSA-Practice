# Trees

## 🎯 Sub-Topics

### 1. Binary Tree Traversals
- **Inorder** (Left, Root, Right) → BST gives sorted order
- **Preorder** (Root, Left, Right) → Used for serialization
- **Postorder** (Left, Right, Root) → Used for deletion
- **Level Order** (BFS) → Layer by layer

### 2. Binary Search Tree (BST)
- Left < Root < Right
- Search, Insert, Delete: O(h) where h = height
- **Balanced BST**: h = O(log n) — AVL, Red-Black tree

### 3. Lowest Common Ancestor (LCA)
- **Naive**: O(n) per query
- **Binary Lifting**: O(n log n) preprocess, O(log n) per query
- **Euler Tour + Sparse Table**: O(n log n) preprocess, O(1) per query

### 4. Tree DP
Compute DP values bottom-up from leaves to root.
- Diameter of tree
- Maximum path sum
- Number of nodes in subtree

### 5. Euler Tour
Flatten tree into array → Enables range queries on subtrees.

### 6. Heavy-Light Decomposition (HLD)
Decompose tree into chains → Path queries using segment tree. O(log²n) per query.

## 📚 Big Company Problems
- Inorder/Preorder/Postorder traversal (iterative)
- Level order traversal
- Maximum depth / diameter of binary tree
- Validate BST
- LCA of binary tree
- Serialize & deserialize binary tree
- Binary tree maximum path sum ⭐⭐⭐
- Construct tree from inorder + preorder
