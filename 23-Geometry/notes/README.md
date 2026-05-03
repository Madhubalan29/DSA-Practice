# Computational Geometry

## Key Algorithms
### Convex Hull — O(n log n)
- Gift wrapping (Jarvis March): O(nh)
- Graham Scan: O(n log n)
- Andrew's Monotone Chain: O(n log n)

### Line Intersection
- Cross product to check orientation
- Sweep line algorithm for multiple segments

## Core Primitives
- **Cross product**: `(b-a) × (c-a)` — determines turn direction
- **Orientation**: Clockwise, Counter-clockwise, or Collinear
- **Point in polygon**: Ray casting / winding number
