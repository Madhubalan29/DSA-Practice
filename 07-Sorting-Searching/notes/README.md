# Sorting & Searching

## 🎯 Must-Know Algorithms

### Merge Sort — O(n log n), Stable
- Divide array in half, sort each half, merge
- Used for: **inversion count**, external sorting

### Quick Sort — O(n log n) avg, O(n²) worst
- Pick pivot, partition around it
- Used for: **in-place sorting**, kth smallest element (QuickSelect)

### Counting Sort — O(n + k)
- When values are in a small range [0, k]
- Non-comparison based → can beat O(n log n)

## 💡 Key Concepts
- **Stability**: Merge sort is stable, Quick sort is not (by default)
- **In-place**: Quick sort is in-place, Merge sort needs O(n) extra space
- **Custom comparators**: Crucial for interview problems

## 📚 Big Company Problems
- Sort colors (Dutch National Flag)
- Kth largest element (QuickSelect)
- Merge sorted arrays
- Count inversions (Merge Sort)
