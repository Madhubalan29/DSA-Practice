# Game Theory

## Key Concepts
### Nim Game
- N stones, remove 1-3 per turn. You lose if 0 left.
- Losing position: N % 4 == 0

### Sprague-Grundy Theorem
- Every impartial game is equivalent to a Nim heap
- Grundy(position) = mex({Grundy(next positions)})
- Combined game: XOR all Grundy values
- Position is losing iff XOR = 0
