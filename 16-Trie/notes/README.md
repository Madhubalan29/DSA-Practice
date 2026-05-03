# Trie (Prefix Tree)

## Core Idea
Tree where each edge represents a character. Efficient for prefix queries.

## Types
### Standard Trie
- Insert/Search/StartsWith: O(word length)
- Used for: autocomplete, spell check, word search

### XOR Trie (Binary Trie)
- Store numbers bit by bit (MSB to LSB)
- Find maximum XOR pair in O(32) per query
- Used for: Maximum XOR problems

## Big Company Problems
- Implement Trie
- Word Search II (Trie + Backtracking)
- Maximum XOR of two numbers in array
- Replace words, Search suggestions system
