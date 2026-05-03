# Matrix Exponentiation

## Core Idea
Compute A^n in O(k³ × log n) where k is matrix size.
Used to solve linear recurrences in O(log n).

## Pattern
If `f(n) = a*f(n-1) + b*f(n-2)`, build transformation matrix and exponentiate.

## Example: Fibonacci
```
[F(n+1)]   [1 1]^n   [F(1)]
[F(n)  ] = [1 0]   × [F(0)]
```

## Applications
- Fibonacci in O(log n)
- Linear recurrence relations
- Graph: count paths of length K
- Expected value problems with Markov chains
