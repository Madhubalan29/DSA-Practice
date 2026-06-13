const fs = require('fs');
const path = require('path');

// ============================================================================
// DSA COMPREHENSIVE QUESTION GENERATOR
// 500+ curated real problems from LeetCode, Codeforces, CSES, SPOJ, GFG
// ============================================================================

const baseDir = path.resolve('d:/New folder/DSA-Practice');

// CLI flags
const args = process.argv.slice(2);
const force = args.includes('--force');
const dryRun = args.includes('--dry-run');
const topicFilter = args.find(a => a.startsWith('--topic='));
const diffFilter = args.find(a => a.startsWith('--difficulty='));
const filterTopic = topicFilter ? topicFilter.split('=')[1].toLowerCase() : null;
const filterDiff = diffFilter ? diffFilter.split('=')[1] : null;

// ============================================================================
// PROBLEM DATABASE — 500+ curated problems
// ============================================================================

const PROBLEMS = {

// ──────────────────────────────────────────────────────────────────────────
// 01 — IMPLEMENTATION & CONSTRUCTIVE
// ──────────────────────────────────────────────────────────────────────────
"01-Implementation-Constructive/01-Ad-Hoc": [
    { title: "Watermelon", link: "https://codeforces.com/problemset/problem/4/A", platform: "Codeforces", difficulty: "Easy", desc: "Determine if a watermelon of weight w can be divided into two even parts.", concepts: "Ad-hoc, Math", why: "Classic beginner problem that tests edge case thinking." },
    { title: "Next Permutation", link: "https://leetcode.com/problems/next-permutation/", platform: "LeetCode", difficulty: "Medium", desc: "Implement next permutation, which rearranges numbers into the lexicographically next greater permutation.", concepts: "Ad-hoc, Arrays", why: "Frequently asked in interviews; tests in-place algorithmic thinking." },
    { title: "Spiral Matrix", link: "https://leetcode.com/problems/spiral-matrix/", platform: "LeetCode", difficulty: "Medium", desc: "Given an m x n matrix, return all elements of the matrix in spiral order.", concepts: "Ad-hoc, Matrix", why: "Tests careful boundary management and simulation skills." },
    { title: "Rotate Image", link: "https://leetcode.com/problems/rotate-image/", platform: "LeetCode", difficulty: "Medium", desc: "Rotate the image (n×n 2D matrix) by 90 degrees clockwise in-place.", concepts: "Ad-hoc, Matrix", why: "In-place matrix manipulation — a Google/Amazon favorite." },
    { title: "ZigZag Conversion", link: "https://leetcode.com/problems/zigzag-conversion/", platform: "LeetCode", difficulty: "Medium", desc: "Write the string in a zigzag pattern on a given number of rows then read line by line.", concepts: "Ad-hoc, String", why: "Pattern recognition and index manipulation." },
    { title: "Text Justification", link: "https://leetcode.com/problems/text-justification/", platform: "LeetCode", difficulty: "Hard", desc: "Given an array of words and a maxWidth, format the text such that each line has exactly maxWidth characters and is fully justified.", concepts: "Ad-hoc, String, Greedy", why: "Google's all-time favorite hard implementation problem." },
],

"01-Implementation-Constructive/02-Simulation": [
    { title: "Game of Life", link: "https://leetcode.com/problems/game-of-life/", platform: "LeetCode", difficulty: "Medium", desc: "Implement Conway's Game of Life with in-place state updates.", concepts: "Simulation, Matrix", why: "Tests in-place simulation with bit manipulation tricks." },
    { title: "Robot Bounded In Circle", link: "https://leetcode.com/problems/robot-bounded-in-circle/", platform: "LeetCode", difficulty: "Medium", desc: "Determine if robot instructions lead to a bounded circle.", concepts: "Simulation, Math", why: "Elegant math insight hidden behind a simulation problem." },
    { title: "Asteroid Collision", link: "https://leetcode.com/problems/asteroid-collision/", platform: "LeetCode", difficulty: "Medium", desc: "Find out the state of the asteroids after all collisions.", concepts: "Simulation, Stack", why: "Combines simulation logic with stack data structure." },
    { title: "Design Snake Game", link: "https://leetcode.com/problems/design-snake-game/", platform: "LeetCode", difficulty: "Medium", desc: "Design a Snake game that is played on a device with screen size.", concepts: "Simulation, Deque, Design", why: "System design + simulation — asked at Apple/Google." },
    { title: "Walking Robot Simulation", link: "https://leetcode.com/problems/walking-robot-simulation/", platform: "LeetCode", difficulty: "Medium", desc: "A robot on an infinite XY-plane starts at (0, 0) facing north. Simulate commands and obstacles.", concepts: "Simulation, Hashing", why: "Combines simulation with efficient obstacle lookup." },
],

"01-Implementation-Constructive/03-Greedy-Construction": [
    { title: "Construct the Lexicographically Largest Valid Sequence", link: "https://leetcode.com/problems/construct-the-lexicographically-largest-valid-sequence/", platform: "LeetCode", difficulty: "Medium", desc: "Construct a sequence of length 2n-1 where each integer i (2<=i<=n) occurs exactly twice with distance i.", concepts: "Construction, Backtracking", why: "Tests constructive algorithm design." },
    { title: "Minimum Number of Moves to Make Palindrome", link: "https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome/", platform: "LeetCode", difficulty: "Hard", desc: "Return the minimum number of moves to make a string a palindrome using adjacent swaps.", concepts: "Greedy, Construction", why: "Greedy construction with careful proof of correctness." },
    { title: "Increasing Triplet Subsequence", link: "https://leetcode.com/problems/increasing-triplet-subsequence/", platform: "LeetCode", difficulty: "Medium", desc: "Return true if there exists i < j < k such that nums[i] < nums[j] < nums[k].", concepts: "Greedy, Construction", why: "Greedy variable tracking — simple but tricky." },
    { title: "Interleaving String", link: "https://leetcode.com/problems/interleaving-string/", platform: "LeetCode", difficulty: "Medium", desc: "Determine whether s3 is formed by interleaving s1 and s2.", concepts: "Construction, DP", why: "Constructive thinking combined with DP." },
    { title: "Minimum Deletions to Make Character Frequencies Unique", link: "https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/", platform: "LeetCode", difficulty: "Medium", desc: "Return the minimum number of characters to delete to make frequency of each letter unique.", concepts: "Greedy, Construction", why: "Greedy frequency manipulation — Microsoft favorite." },
],

// ──────────────────────────────────────────────────────────────────────────
// 02 — MATHEMATICS
// ──────────────────────────────────────────────────────────────────────────
"02-Mathematics/01-Number-Theory": [
    { title: "Ugly Number II", link: "https://leetcode.com/problems/ugly-number-ii/", platform: "LeetCode", difficulty: "Medium", desc: "Find the n-th ugly number (prime factors only include 2, 3, 5).", concepts: "Number Theory, DP", why: "Classic number theory + DP hybrid." },
    { title: "Happy Number", link: "https://leetcode.com/problems/happy-number/", platform: "LeetCode", difficulty: "Easy", desc: "Determine if a number is a happy number (sum of squares of digits eventually reaches 1).", concepts: "Number Theory, Cycle Detection", why: "Combines math with Floyd's cycle detection." },
    { title: "Perfect Squares", link: "https://leetcode.com/problems/perfect-squares/", platform: "LeetCode", difficulty: "Medium", desc: "Given an integer n, return the least number of perfect square numbers that sum to n.", concepts: "Number Theory, BFS, DP", why: "Lagrange's four-square theorem — math insight helps." },
    { title: "Integer Break", link: "https://leetcode.com/problems/integer-break/", platform: "LeetCode", difficulty: "Medium", desc: "Break a positive integer n into at least two positive integers to maximize the product.", concepts: "Number Theory, Math", why: "Mathematical insight: always break into 3s." },
    { title: "Nth Digit", link: "https://leetcode.com/problems/nth-digit/", platform: "LeetCode", difficulty: "Medium", desc: "Find the nth digit of the infinite integer sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...", concepts: "Number Theory, Math", why: "Tests pattern recognition in digit sequences." },
    { title: "Divisor Game", link: "https://leetcode.com/problems/divisor-game/", platform: "LeetCode", difficulty: "Easy", desc: "Alice and Bob take turns choosing x (1<=x<N) where x divides N, replacing N with N-x.", concepts: "Number Theory, Game Theory", why: "Simple but teaches parity-based reasoning." },
],

"02-Mathematics/02-Modular-Arithmetic": [
    { title: "Super Pow", link: "https://leetcode.com/problems/super-pow/", platform: "LeetCode", difficulty: "Medium", desc: "Calculate a^b mod 1337 where b is a very large number represented as an array.", concepts: "Modular Exponentiation", why: "Tests modular arithmetic with large exponents." },
    { title: "Power of Three", link: "https://leetcode.com/problems/power-of-three/", platform: "LeetCode", difficulty: "Easy", desc: "Given an integer n, return true if it is a power of three.", concepts: "Modular Arithmetic, Math", why: "Multiple solution approaches including modular tricks." },
    { title: "Large Fibonacci Modulo", link: "https://cses.fi/problemset/task/1722", platform: "CSES", difficulty: "Medium", desc: "Calculate F(n) mod 10^9+7 for very large n.", concepts: "Modular Arithmetic, Matrix Exponentiation", why: "Fundamental CP technique for computing recurrences under mod." },
    { title: "Modular Multiplicative Inverse", link: "https://cp-algorithms.com/algebra/module-inverse.html", platform: "CP-Algorithms", difficulty: "Medium", desc: "Find the modular multiplicative inverse of a number using Fermat's little theorem or Extended Euclidean.", concepts: "Modular Inverse, Fermat", why: "Essential building block for combinatorics under mod." },
    { title: "Throwing Dice", link: "https://cses.fi/problemset/task/1096", platform: "CSES", difficulty: "Medium", desc: "Count the number of ways to get sum n when throwing a dice.", concepts: "Modular Arithmetic, DP", why: "Combines modular arithmetic with DP counting." },
],

"02-Mathematics/03-Combinatorics": [
    { title: "Unique Paths", link: "https://leetcode.com/problems/unique-paths/", platform: "LeetCode", difficulty: "Medium", desc: "Count unique paths from top-left to bottom-right of an m×n grid.", concepts: "Combinatorics, DP", why: "Direct application of C(m+n-2, m-1)." },
    { title: "Pascal's Triangle II", link: "https://leetcode.com/problems/pascals-triangle-ii/", platform: "LeetCode", difficulty: "Easy", desc: "Given an integer rowIndex, return the rowIndex-th row of Pascal's triangle.", concepts: "Combinatorics, nCr", why: "Foundation of all combinatorial calculations." },
    { title: "Binomial Coefficients", link: "https://cses.fi/problemset/task/1079", platform: "CSES", difficulty: "Medium", desc: "Calculate C(n,k) mod 10^9+7 for given n and k.", concepts: "Combinatorics, Modular Inverse", why: "Core CP skill — efficient nCr calculation." },
    { title: "Distribute Candies", link: "https://cses.fi/problemset/task/1716", platform: "CSES", difficulty: "Medium", desc: "In how many ways can you distribute n candies to k children?", concepts: "Stars and Bars, Combinatorics", why: "Classic stars-and-bars counting problem." },
    { title: "Kth Smallest Instructions", link: "https://leetcode.com/problems/kth-smallest-instructions/", platform: "LeetCode", difficulty: "Hard", desc: "Find the k-th smallest instruction string that leads to the destination.", concepts: "Combinatorics, Greedy", why: "Tests combinatorial ranking/unranking." },
    { title: "Count Sorted Vowel Strings", link: "https://leetcode.com/problems/count-sorted-vowel-strings/", platform: "LeetCode", difficulty: "Medium", desc: "Count the number of strings of length n consisting of vowels in sorted order.", concepts: "Combinatorics, DP", why: "Multiple approaches: stars-and-bars or DP." },
],

"02-Mathematics/04-GCD-LCM-Euclidean": [
    { title: "Greatest Common Divisor of Strings", link: "https://leetcode.com/problems/greatest-common-divisor-of-strings/", platform: "LeetCode", difficulty: "Easy", desc: "Find the largest string x such that x divides both str1 and str2.", concepts: "GCD, String", why: "Creative application of GCD to strings." },
    { title: "Water and Jug Problem", link: "https://leetcode.com/problems/water-and-jug-problem/", platform: "LeetCode", difficulty: "Medium", desc: "Determine whether it is possible to measure exactly z litres using jugs of x and y litres.", concepts: "GCD, Bezout's Identity", why: "Direct application of Bezout's identity and GCD." },
    { title: "X of a Kind in a Deck of Cards", link: "https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/", platform: "LeetCode", difficulty: "Easy", desc: "Return true if you can split cards into groups where each group has x same cards.", concepts: "GCD", why: "GCD of frequency counts." },
    { title: "Nth Magical Number", link: "https://leetcode.com/problems/nth-magical-number/", platform: "LeetCode", difficulty: "Hard", desc: "Find the nth smallest positive integer divisible by a or b.", concepts: "LCM, Binary Search", why: "LCM + inclusion-exclusion + binary search." },
    { title: "Common Divisors", link: "https://cses.fi/problemset/task/1081", platform: "CSES", difficulty: "Easy", desc: "Find the number of common divisors of two given integers.", concepts: "GCD, Divisors", why: "Combines GCD with divisor enumeration." },
],

"02-Mathematics/05-Euler-Totient": [
    { title: "Euler Totient Function", link: "https://cp-algorithms.com/algebra/phi-function.html", platform: "CP-Algorithms", difficulty: "Medium", desc: "Compute φ(n) — the count of numbers 1..n coprime to n.", concepts: "Euler Totient, Number Theory", why: "Essential for problems involving coprime counting and modular arithmetic." },
    { title: "Sum of Euler Totient", link: "https://www.spoj.com/problems/ETF/", platform: "SPOJ", difficulty: "Medium", desc: "Find Euler Totient function for a given number.", concepts: "Euler Totient", why: "Direct implementation practice." },
    { title: "GCD Sum", link: "https://codeforces.com/problemset/problem/1900/D", platform: "Codeforces", difficulty: "Hard", desc: "Calculate the sum of GCD over all pairs — uses Euler Totient function.", concepts: "Euler Totient, Mobius", why: "Advanced number theory combining phi with summation." },
    { title: "Primitive Root", link: "https://cp-algorithms.com/algebra/primitive-root.html", platform: "CP-Algorithms", difficulty: "Hard", desc: "Find a primitive root modulo n using Euler's totient function.", concepts: "Euler Totient, Primitive Root", why: "Important for NTT and advanced modular arithmetic." },
    { title: "Coprime Segments", link: "https://codeforces.com/contest/1462/problem/D", platform: "Codeforces", difficulty: "Medium", desc: "Count segments where all pairs of elements are coprime.", concepts: "GCD, Euler Totient", why: "Applies coprimality concepts in segment queries." },
],

"02-Mathematics/06-Catalan-Numbers": [
    { title: "Unique Binary Search Trees", link: "https://leetcode.com/problems/unique-binary-search-trees/", platform: "LeetCode", difficulty: "Medium", desc: "Given n, how many structurally unique BSTs can store values 1..n?", concepts: "Catalan Numbers, DP", why: "Direct application of Catalan number formula." },
    { title: "Generate Parentheses", link: "https://leetcode.com/problems/generate-parentheses/", platform: "LeetCode", difficulty: "Medium", desc: "Generate all combinations of n pairs of well-formed parentheses.", concepts: "Catalan Numbers, Backtracking", why: "Count of valid parentheses = Catalan(n)." },
    { title: "Different Ways to Add Parentheses", link: "https://leetcode.com/problems/different-ways-to-add-parentheses/", platform: "LeetCode", difficulty: "Medium", desc: "Given a string of numbers and operators, compute all possible results from different groupings.", concepts: "Catalan Numbers, Divide & Conquer", why: "Catalan structure in expression tree enumeration." },
    { title: "Handshakes That Don't Cross", link: "https://leetcode.com/problems/handshakes-that-dont-cross/", platform: "LeetCode", difficulty: "Hard", desc: "2n people sit in a circle. Count ways to pair them for handshakes without crossing.", concepts: "Catalan Numbers", why: "Classic non-crossing partition — direct Catalan." },
    { title: "Bracket Sequences I", link: "https://cses.fi/problemset/task/2064", platform: "CSES", difficulty: "Medium", desc: "Count the number of valid bracket sequences of length 2n.", concepts: "Catalan Numbers, Combinatorics", why: "Textbook Catalan number application." },
],

"02-Mathematics/07-Matrix-Determinant": [
    { title: "Matrix Determinant", link: "https://cp-algorithms.com/linear_algebra/determinant-gauss.html", platform: "CP-Algorithms", difficulty: "Hard", desc: "Compute determinant of an n×n matrix using Gaussian elimination.", concepts: "Linear Algebra, Gauss", why: "Fundamental linear algebra operation in CP." },
    { title: "Kirchhoff's Theorem", link: "https://cp-algorithms.com/graph/kirchhoff-theorem.html", platform: "CP-Algorithms", difficulty: "Hard", desc: "Count spanning trees using matrix tree theorem and determinant.", concepts: "Matrix Determinant, Graph Theory", why: "Beautiful connection between linear algebra and graph theory." },
    { title: "System of Linear Equations", link: "https://cp-algorithms.com/linear_algebra/linear-system-gauss.html", platform: "CP-Algorithms", difficulty: "Hard", desc: "Solve a system of linear equations using Gaussian elimination.", concepts: "Linear Algebra, Gauss Elimination", why: "Core technique for geometry and optimization problems." },
    { title: "Matrix Rank", link: "https://cp-algorithms.com/linear_algebra/rank-matrix.html", platform: "CP-Algorithms", difficulty: "Hard", desc: "Find the rank of a matrix using row reduction.", concepts: "Linear Algebra", why: "Used in XOR basis and linear independence problems." },
],

"02-Mathematics/08-Probability-Expected-Value": [
    { title: "Soup Servings", link: "https://leetcode.com/problems/soup-servings/", platform: "LeetCode", difficulty: "Medium", desc: "Return the probability that soup A will be empty first.", concepts: "Probability, DP, Memoization", why: "Probability DP with convergence optimization." },
    { title: "New 21 Game", link: "https://leetcode.com/problems/new-21-game/", platform: "LeetCode", difficulty: "Medium", desc: "Alice draws numbers until she gets >=k points. Find P(points <= n).", concepts: "Probability, Sliding Window DP", why: "Combines probability with sliding window optimization." },
    { title: "Dice Probability", link: "https://cses.fi/problemset/task/1725", platform: "CSES", difficulty: "Medium", desc: "What is the probability that the sum of outcomes of n dice throws is between a and b?", concepts: "Probability, DP", why: "Fundamental probability DP problem." },
    { title: "Knight Probability in Chessboard", link: "https://leetcode.com/problems/knight-probability-in-chessboard/", platform: "LeetCode", difficulty: "Medium", desc: "Find probability that a knight remains on the board after k moves.", concepts: "Probability, DP", why: "2D probability DP — clean and elegant." },
    { title: "Random Pick with Weight", link: "https://leetcode.com/problems/random-pick-with-weight/", platform: "LeetCode", difficulty: "Medium", desc: "Pick an index proportional to its weight.", concepts: "Probability, Binary Search, Prefix Sum", why: "Weighted random sampling — very practical." },
],

// ──────────────────────────────────────────────────────────────────────────
// 03 — BINARY SEARCH
// ──────────────────────────────────────────────────────────────────────────
"03-Binary-Search/01-Basic-Binary-Search": [
    { title: "Binary Search", link: "https://leetcode.com/problems/binary-search/", platform: "LeetCode", difficulty: "Easy", desc: "Given a sorted array and target, search for target in nums.", concepts: "Binary Search", why: "Fundamental algorithm, basis for all binary search variations." },
    { title: "Search Insert Position", link: "https://leetcode.com/problems/search-insert-position/", platform: "LeetCode", difficulty: "Easy", desc: "Given a sorted array, return the index if target is found or where it would be inserted.", concepts: "Binary Search, Lower Bound", why: "Tests understanding of lower bound and insert positions." },
    { title: "First Bad Version", link: "https://leetcode.com/problems/first-bad-version/", platform: "LeetCode", difficulty: "Easy", desc: "Find the first bad version given an API isBadVersion(version).", concepts: "Binary Search", why: "Simplest predicate-based binary search." },
    { title: "Find First and Last Position", link: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/", platform: "LeetCode", difficulty: "Medium", desc: "Find the starting and ending position of a given target value in a sorted array.", concepts: "Binary Search, Lower/Upper Bound", why: "Tests both lower_bound and upper_bound implementations." },
    { title: "Search a 2D Matrix", link: "https://leetcode.com/problems/search-a-2d-matrix/", platform: "LeetCode", difficulty: "Medium", desc: "Search for a value in an m x n matrix with sorted rows.", concepts: "Binary Search, Matrix", why: "Treats 2D matrix as 1D sorted array." },
    { title: "Peak Index in a Mountain Array", link: "https://leetcode.com/problems/peak-index-in-a-mountain-array/", platform: "LeetCode", difficulty: "Medium", desc: "Find the peak index in a mountain array.", concepts: "Binary Search", why: "Binary search on non-sorted array using monotonicity." },
],

"03-Binary-Search/02-Binary-Search-On-Answer": [
    { title: "Koko Eating Bananas", link: "https://leetcode.com/problems/koko-eating-bananas/", platform: "LeetCode", difficulty: "Medium", desc: "Return the minimum integer k such that Koko can eat all bananas within h hours.", concepts: "Binary Search on Answer", why: "Classic application of binary search on answer space." },
    { title: "Split Array Largest Sum", link: "https://leetcode.com/problems/split-array-largest-sum/", platform: "LeetCode", difficulty: "Hard", desc: "Split nums into k non-empty subarrays minimizing the largest sum.", concepts: "Binary Search, Greedy", why: "Advanced binary search on answer — top tech companies favorite." },
    { title: "Capacity To Ship Packages Within D Days", link: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/", platform: "LeetCode", difficulty: "Medium", desc: "Find the minimum capacity of the ship to ship all packages within D days.", concepts: "Binary Search on Answer", why: "Variant of split array — tests greedy feasibility check." },
    { title: "Magnetic Force Between Two Balls", link: "https://leetcode.com/problems/magnetic-force-between-two-balls/", platform: "LeetCode", difficulty: "Medium", desc: "Maximize the minimum magnetic force between any two balls.", concepts: "Binary Search on Answer", why: "Maximize minimum — classic binary search pattern." },
    { title: "Minimize Max Distance to Gas Station", link: "https://leetcode.com/problems/minimize-max-distance-to-gas-station/", platform: "LeetCode", difficulty: "Hard", desc: "Add k gas stations to minimize the maximum distance between adjacent stations.", concepts: "Binary Search on Answer, Floating Point", why: "Floating point binary search on answer — tricky precision." },
    { title: "Factory Machines", link: "https://cses.fi/problemset/task/1620", platform: "CSES", difficulty: "Medium", desc: "Given machines with different speeds, find the minimum time to produce t products.", concepts: "Binary Search on Answer", why: "Clean CSES problem for binary search on answer practice." },
],

"03-Binary-Search/03-Search-In-Rotated-Array": [
    { title: "Search in Rotated Sorted Array", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/", platform: "LeetCode", difficulty: "Medium", desc: "Search target in a rotated sorted array.", concepts: "Binary Search", why: "Tests ability to adapt binary search for rotated arrays." },
    { title: "Search in Rotated Sorted Array II", link: "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/", platform: "LeetCode", difficulty: "Medium", desc: "Search in a rotated sorted array with duplicates.", concepts: "Binary Search", why: "Handles duplicates — worst case O(n) but average O(log n)." },
    { title: "Find Minimum in Rotated Sorted Array", link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/", platform: "LeetCode", difficulty: "Medium", desc: "Find the minimum element in a rotated sorted array.", concepts: "Binary Search", why: "Find the pivot using binary search properties." },
    { title: "Find Minimum in Rotated Sorted Array II", link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/", platform: "LeetCode", difficulty: "Hard", desc: "Find minimum in rotated sorted array with duplicates.", concepts: "Binary Search", why: "Handles the edge case of duplicates in rotation." },
    { title: "Find Peak Element", link: "https://leetcode.com/problems/find-peak-element/", platform: "LeetCode", difficulty: "Medium", desc: "Find a peak element where the element is strictly greater than its neighbors.", concepts: "Binary Search", why: "Binary search on unsorted array using gradient." },
],

// ──────────────────────────────────────────────────────────────────────────
// 04 — PRIME, SIEVE, FACTORISATION
// ──────────────────────────────────────────────────────────────────────────
"04-Prime-Sieve-Factorisation/01-Sieve-Of-Eratosthenes": [
    { title: "Count Primes", link: "https://leetcode.com/problems/count-primes/", platform: "LeetCode", difficulty: "Medium", desc: "Given an integer n, return the number of prime numbers strictly less than n.", concepts: "Sieve of Eratosthenes", why: "Standard sieve implementation." },
    { title: "Four Divisors", link: "https://leetcode.com/problems/four-divisors/", platform: "LeetCode", difficulty: "Medium", desc: "Return the sum of divisors of integers that have exactly four divisors.", concepts: "Number Theory, Sieve", why: "Tests prime factor properties." },
    { title: "Closest Prime Numbers in Range", link: "https://leetcode.com/problems/closest-prime-numbers-in-range/", platform: "LeetCode", difficulty: "Medium", desc: "Find the closest pair of prime numbers in the range [left, right].", concepts: "Sieve, Twin Primes", why: "Sieve application with twin prime checking." },
    { title: "Sum of Four Divisors", link: "https://leetcode.com/problems/four-divisors/", platform: "LeetCode", difficulty: "Medium", desc: "Sum of divisors for numbers with exactly 4 divisors.", concepts: "Sieve, Factorization", why: "Combines sieve with divisor counting." },
    { title: "Prime Pairs With Target Sum", link: "https://leetcode.com/problems/prime-pairs-with-target-sum/", platform: "LeetCode", difficulty: "Medium", desc: "Find all pairs of primes that sum to a target.", concepts: "Sieve, Goldbach", why: "Goldbach conjecture application." },
],

"04-Prime-Sieve-Factorisation/02-Segmented-Sieve": [
    { title: "Prime Generator", link: "https://www.spoj.com/problems/PRIME1/", platform: "SPOJ", difficulty: "Medium", desc: "Generate all primes between two given numbers m and n.", concepts: "Segmented Sieve", why: "Classic problem requiring segmented sieve." },
    { title: "Count Primes in Range", link: "https://practice.geeksforgeeks.org/problems/count-primes-in-range/", platform: "GFG", difficulty: "Medium", desc: "Count primes in range [L, R] using segmented sieve.", concepts: "Segmented Sieve", why: "Standard segmented sieve application." },
    { title: "Almost Prime", link: "https://codeforces.com/problemset/problem/26/A", platform: "Codeforces", difficulty: "Easy", desc: "Find numbers that are products of exactly two primes.", concepts: "Sieve, Semi-prime", why: "Semi-prime detection using sieve." },
    { title: "Printing Some Primes", link: "https://www.spoj.com/problems/TDPRIMES/", platform: "SPOJ", difficulty: "Medium", desc: "Print every 100th prime up to 10^8.", concepts: "Segmented Sieve", why: "Large-scale prime generation requiring memory-efficient sieve." },
    { title: "Sherlock and His Girlfriend", link: "https://codeforces.com/problemset/problem/776/B", platform: "Codeforces", difficulty: "Easy", desc: "Color numbers based on primality of their indices.", concepts: "Sieve", why: "Creative sieve application with graph coloring." },
],

"04-Prime-Sieve-Factorisation/03-Prime-Factorisation": [
    { title: "Largest Prime Factor", link: "https://practice.geeksforgeeks.org/problems/largest-prime-factor2601/1", platform: "GFG", difficulty: "Medium", desc: "Find the largest prime factor of a number.", concepts: "Prime Factorization", why: "Fundamental factorization logic." },
    { title: "Distinct Prime Factors of Product of Array", link: "https://leetcode.com/problems/distinct-prime-factors-of-product-of-array/", platform: "LeetCode", difficulty: "Medium", desc: "Return number of distinct prime factors of the product of array elements.", concepts: "Prime Factorization, Sieve", why: "Combines factorization to avoid overflow." },
    { title: "Smallest Value After Replacing With Sum of Prime Factors", link: "https://leetcode.com/problems/smallest-value-after-replacing-with-sum-of-prime-factors/", platform: "LeetCode", difficulty: "Medium", desc: "Replace n with sum of its prime factors repeatedly until it stabilizes.", concepts: "Prime Factorization", why: "Iterative factorization until fixed point." },
    { title: "2 vs 3", link: "https://codeforces.com/problemset/problem/1512/C", platform: "Codeforces", difficulty: "Medium", desc: "Use prime factorization to solve comparison problems.", concepts: "Prime Factorization, Math", why: "Creative use of factor decomposition." },
    { title: "Divisor Sum", link: "https://cses.fi/problemset/task/1082", platform: "CSES", difficulty: "Medium", desc: "Calculate the sum of all divisors of numbers 1..n.", concepts: "Factorization, Math", why: "Efficient divisor sum using mathematical formula." },
],

// ──────────────────────────────────────────────────────────────────────────
// 05 — BIT MANIPULATION
// ──────────────────────────────────────────────────────────────────────────
"05-Bit-Manipulation/01-Basics": [
    { title: "Number of 1 Bits", link: "https://leetcode.com/problems/number-of-1-bits/", platform: "LeetCode", difficulty: "Easy", desc: "Count the number of '1' bits in an unsigned integer.", concepts: "Bit Manipulation", why: "Brian Kernighan's algorithm — basic bitwise test." },
    { title: "Reverse Bits", link: "https://leetcode.com/problems/reverse-bits/", platform: "LeetCode", difficulty: "Easy", desc: "Reverse bits of a given 32-bit unsigned integer.", concepts: "Bit Manipulation", why: "Tests shifting and masking systematically." },
    { title: "Power of Two", link: "https://leetcode.com/problems/power-of-two/", platform: "LeetCode", difficulty: "Easy", desc: "Given an integer n, return true if it is a power of two.", concepts: "Bit Manipulation", why: "One-liner: n > 0 && (n & (n-1)) == 0." },
    { title: "Counting Bits", link: "https://leetcode.com/problems/counting-bits/", platform: "LeetCode", difficulty: "Easy", desc: "For every number 0..n, calculate the number of 1 bits.", concepts: "Bit Manipulation, DP", why: "Combines bit tricks with DP recurrence." },
    { title: "Bitwise AND of Numbers Range", link: "https://leetcode.com/problems/bitwise-and-of-numbers-range/", platform: "LeetCode", difficulty: "Medium", desc: "Return the bitwise AND of all numbers in range [m, n].", concepts: "Bit Manipulation", why: "Tests understanding of common prefix in binary." },
    { title: "Sum of Two Integers", link: "https://leetcode.com/problems/sum-of-two-integers/", platform: "LeetCode", difficulty: "Medium", desc: "Calculate the sum of two integers a and b without using + or -.", concepts: "Bit Manipulation", why: "Half adder using XOR and AND — fundamental CS." },
],

"05-Bit-Manipulation/02-Power-Set": [
    { title: "Subsets", link: "https://leetcode.com/problems/subsets/", platform: "LeetCode", difficulty: "Medium", desc: "Return all possible subsets of an array of unique elements.", concepts: "Bit Manipulation, Backtracking", why: "Bitmask approach to generating power set." },
    { title: "Subsets II", link: "https://leetcode.com/problems/subsets-ii/", platform: "LeetCode", difficulty: "Medium", desc: "Return all possible subsets that might contain duplicates.", concepts: "Bit Manipulation, Backtracking", why: "Handling duplicates in subset generation." },
    { title: "Letter Case Permutation", link: "https://leetcode.com/problems/letter-case-permutation/", platform: "LeetCode", difficulty: "Medium", desc: "Return all possible strings by toggling letter cases.", concepts: "Bit Manipulation", why: "Using bitwise ops to toggle cases elegantly." },
    { title: "Find the Shortest Superstring", link: "https://leetcode.com/problems/find-the-shortest-superstring/", platform: "LeetCode", difficulty: "Hard", desc: "Find the shortest string containing all given strings as substrings.", concepts: "Bitmask DP, TSP", why: "TSP variant with bitmask — advanced power set usage." },
    { title: "Maximum Students Taking Exam", link: "https://leetcode.com/problems/maximum-students-taking-exam/", platform: "LeetCode", difficulty: "Hard", desc: "Maximize students seated such that no one can see another's answer.", concepts: "Bitmask DP", why: "Profile DP with bitmask — advanced technique." },
],

"05-Bit-Manipulation/03-XOR-Problems": [
    { title: "Single Number", link: "https://leetcode.com/problems/single-number/", platform: "LeetCode", difficulty: "Easy", desc: "Find the single element where every other appears twice.", concepts: "XOR", why: "Classic XOR: a ^ a = 0." },
    { title: "Single Number II", link: "https://leetcode.com/problems/single-number-ii/", platform: "LeetCode", difficulty: "Medium", desc: "Every element appears three times except one. Find that one.", concepts: "Bit Manipulation", why: "Generalized single number — bit counting approach." },
    { title: "Single Number III", link: "https://leetcode.com/problems/single-number-iii/", platform: "LeetCode", difficulty: "Medium", desc: "Two elements appear once, others appear twice. Find both.", concepts: "XOR, Bit Separation", why: "XOR + rightmost set bit separation — very clever." },
    { title: "Maximum XOR of Two Numbers", link: "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/", platform: "LeetCode", difficulty: "Medium", desc: "Return the maximum XOR of any two numbers in the array.", concepts: "XOR, Trie", why: "Trie-based XOR maximization — important pattern." },
    { title: "XOR Queries of a Subarray", link: "https://leetcode.com/problems/xor-queries-of-a-subarray/", platform: "LeetCode", difficulty: "Medium", desc: "Answer XOR queries on subarrays using prefix XOR.", concepts: "XOR, Prefix", why: "Prefix XOR — analogous to prefix sum." },
    { title: "Find the Original Array of Prefix XOR", link: "https://leetcode.com/problems/find-the-original-array-of-prefix-xor/", platform: "LeetCode", difficulty: "Medium", desc: "Given prefix XOR array, find the original array.", concepts: "XOR", why: "XOR inverse operation — a[i] = prefix[i] ^ prefix[i-1]." },
],

// ──────────────────────────────────────────────────────────────────────────
// 06 — ARRAYS & HASHING
// ──────────────────────────────────────────────────────────────────────────
"06-Arrays-Hashing/01-Two-Pointer": [
    { title: "Two Sum II - Input Array Is Sorted", link: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/", platform: "LeetCode", difficulty: "Medium", desc: "Find two numbers in a sorted array that add up to a target.", concepts: "Two Pointer", why: "Foundation of two-pointer technique." },
    { title: "3Sum", link: "https://leetcode.com/problems/3sum/", platform: "LeetCode", difficulty: "Medium", desc: "Find all unique triplets that sum to zero.", concepts: "Two Pointer, Sorting", why: "Most asked medium problem — dedup is the hard part." },
    { title: "Container With Most Water", link: "https://leetcode.com/problems/container-with-most-water/", platform: "LeetCode", difficulty: "Medium", desc: "Find two lines that together with x-axis form a container holding the most water.", concepts: "Two Pointer, Greedy", why: "Greedy two-pointer with correctness proof." },
    { title: "Trapping Rain Water", link: "https://leetcode.com/problems/trapping-rain-water/", platform: "LeetCode", difficulty: "Hard", desc: "Given elevation map, compute how much water it can trap after raining.", concepts: "Two Pointer, Stack", why: "Multiple approaches — two pointer is optimal." },
    { title: "Remove Duplicates from Sorted Array II", link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/", platform: "LeetCode", difficulty: "Medium", desc: "Remove duplicates allowing at most two copies in-place.", concepts: "Two Pointer", why: "In-place array modification with slow/fast pointer." },
    { title: "Sort Colors", link: "https://leetcode.com/problems/sort-colors/", platform: "LeetCode", difficulty: "Medium", desc: "Sort an array of 0s, 1s, and 2s in-place.", concepts: "Two Pointer, Dutch National Flag", why: "Dutch National Flag algorithm — 3-way partition." },
],

"06-Arrays-Hashing/02-Sliding-Window": [
    { title: "Longest Substring Without Repeating Characters", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", platform: "LeetCode", difficulty: "Medium", desc: "Find the length of the longest substring without repeating characters.", concepts: "Sliding Window, HashMap", why: "THE sliding window problem — asked everywhere." },
    { title: "Minimum Window Substring", link: "https://leetcode.com/problems/minimum-window-substring/", platform: "LeetCode", difficulty: "Hard", desc: "Find the minimum window substring containing all characters of t.", concepts: "Sliding Window, HashMap", why: "Hard sliding window — Facebook's top asked." },
    { title: "Longest Repeating Character Replacement", link: "https://leetcode.com/problems/longest-repeating-character-replacement/", platform: "LeetCode", difficulty: "Medium", desc: "Find the longest substring with same letter after k replacements.", concepts: "Sliding Window", why: "Clever window condition — count-based sliding." },
    { title: "Permutation in String", link: "https://leetcode.com/problems/permutation-in-string/", platform: "LeetCode", difficulty: "Medium", desc: "Check if one string's permutation is a substring of another.", concepts: "Sliding Window, Anagram", why: "Fixed-size sliding window with frequency matching." },
    { title: "Sliding Window Maximum", link: "https://leetcode.com/problems/sliding-window-maximum/", platform: "LeetCode", difficulty: "Hard", desc: "Return the max sliding window for each window of size k.", concepts: "Sliding Window, Deque", why: "Monotonic deque — combines sliding window with deque." },
    { title: "Subarrays with K Different Integers", link: "https://leetcode.com/problems/subarrays-with-k-different-integers/", platform: "LeetCode", difficulty: "Hard", desc: "Return the number of subarrays with exactly k different integers.", concepts: "Sliding Window", why: "atMost(k) - atMost(k-1) trick — advanced pattern." },
],

"06-Arrays-Hashing/03-Prefix-Sum": [
    { title: "Subarray Sum Equals K", link: "https://leetcode.com/problems/subarray-sum-equals-k/", platform: "LeetCode", difficulty: "Medium", desc: "Count subarrays that sum to k.", concepts: "Prefix Sum, HashMap", why: "Prefix sum + hashmap — O(n) counting." },
    { title: "Product of Array Except Self", link: "https://leetcode.com/problems/product-of-array-except-self/", platform: "LeetCode", difficulty: "Medium", desc: "Return array where each element is the product of all other elements.", concepts: "Prefix Product", why: "Prefix and suffix product without division." },
    { title: "Range Sum Query 2D", link: "https://leetcode.com/problems/range-sum-query-2d-immutable/", platform: "LeetCode", difficulty: "Medium", desc: "Sum of elements inside a rectangle in a 2D matrix.", concepts: "2D Prefix Sum", why: "2D prefix sum — inclusion-exclusion principle." },
    { title: "Continuous Subarray Sum", link: "https://leetcode.com/problems/continuous-subarray-sum/", platform: "LeetCode", difficulty: "Medium", desc: "Check if there is a subarray of size >= 2 whose sum is a multiple of k.", concepts: "Prefix Sum, Modular", why: "Prefix sum mod k with pigeonhole principle." },
    { title: "Find Pivot Index", link: "https://leetcode.com/problems/find-pivot-index/", platform: "LeetCode", difficulty: "Easy", desc: "Find the leftmost pivot index where left sum equals right sum.", concepts: "Prefix Sum", why: "Simple prefix sum application." },
    { title: "Static Range Sum Queries", link: "https://cses.fi/problemset/task/1646", platform: "CSES", difficulty: "Easy", desc: "Answer range sum queries on a static array.", concepts: "Prefix Sum", why: "Foundation problem for prefix sums." },
],

"06-Arrays-Hashing/04-Kadanes-Algorithm": [
    { title: "Maximum Subarray", link: "https://leetcode.com/problems/maximum-subarray/", platform: "LeetCode", difficulty: "Medium", desc: "Find the contiguous subarray with the largest sum.", concepts: "Kadane's Algorithm", why: "THE classic DP/greedy problem." },
    { title: "Maximum Sum Circular Subarray", link: "https://leetcode.com/problems/maximum-sum-circular-subarray/", platform: "LeetCode", difficulty: "Medium", desc: "Find the maximum sum subarray in a circular array.", concepts: "Kadane's, Circular Array", why: "Kadane's with circular extension using min subarray trick." },
    { title: "Maximum Product Subarray", link: "https://leetcode.com/problems/maximum-product-subarray/", platform: "LeetCode", difficulty: "Medium", desc: "Find the contiguous subarray with the largest product.", concepts: "Kadane's Variant", why: "Kadane's adapted for products — track min and max." },
    { title: "Longest Turbulent Subarray", link: "https://leetcode.com/problems/longest-turbulent-subarray/", platform: "LeetCode", difficulty: "Medium", desc: "Find the longest turbulent subarray (alternating comparisons).", concepts: "Kadane's Variant", why: "Kadane's adapted for alternating sequences." },
    { title: "Maximum Subarray Sum", link: "https://cses.fi/problemset/task/1643", platform: "CSES", difficulty: "Easy", desc: "Find the maximum sum contiguous subarray.", concepts: "Kadane's Algorithm", why: "Clean CSES version of Kadane's." },
],

"06-Arrays-Hashing/05-Hashing-HashMap": [
    { title: "Two Sum", link: "https://leetcode.com/problems/two-sum/", platform: "LeetCode", difficulty: "Easy", desc: "Find indices of two numbers that add up to target.", concepts: "HashMap", why: "LeetCode #1 — THE interview ice-breaker." },
    { title: "Group Anagrams", link: "https://leetcode.com/problems/group-anagrams/", platform: "LeetCode", difficulty: "Medium", desc: "Group strings that are anagrams of each other.", concepts: "HashMap, Sorting", why: "Hash key design — sorted string as key." },
    { title: "Longest Consecutive Sequence", link: "https://leetcode.com/problems/longest-consecutive-sequence/", platform: "LeetCode", difficulty: "Medium", desc: "Find the length of the longest consecutive elements sequence.", concepts: "HashSet", why: "O(n) using HashSet — Union Find alternative." },
    { title: "Top K Frequent Elements", link: "https://leetcode.com/problems/top-k-frequent-elements/", platform: "LeetCode", difficulty: "Medium", desc: "Return the k most frequent elements.", concepts: "HashMap, Heap, Bucket Sort", why: "Multiple approaches — bucket sort gives O(n)." },
    { title: "Valid Anagram", link: "https://leetcode.com/problems/valid-anagram/", platform: "LeetCode", difficulty: "Easy", desc: "Determine if two strings are anagrams.", concepts: "HashMap, Counting", why: "Basic frequency counting." },
    { title: "Isomorphic Strings", link: "https://leetcode.com/problems/isomorphic-strings/", platform: "LeetCode", difficulty: "Easy", desc: "Determine if two strings are isomorphic.", concepts: "HashMap, Bijection", why: "Bijective mapping verification." },
],

"06-Arrays-Hashing/06-Dutch-National-Flag": [
    { title: "Sort Colors", link: "https://leetcode.com/problems/sort-colors/", platform: "LeetCode", difficulty: "Medium", desc: "Sort an array with only 0, 1, and 2 in one pass.", concepts: "Dutch National Flag", why: "THE Dutch National Flag problem by Dijkstra." },
    { title: "Move Zeroes", link: "https://leetcode.com/problems/move-zeroes/", platform: "LeetCode", difficulty: "Easy", desc: "Move all zeroes to the end while maintaining relative order.", concepts: "Two Pointer, Partition", why: "Simplified DNF — two-way partitioning." },
    { title: "Partition Array According to Given Pivot", link: "https://leetcode.com/problems/partition-array-according-to-given-pivot/", platform: "LeetCode", difficulty: "Medium", desc: "Rearrange array such that elements less than pivot come first, then equal, then greater.", concepts: "Dutch National Flag", why: "Generalized 3-way partition." },
    { title: "Wiggle Sort II", link: "https://leetcode.com/problems/wiggle-sort-ii/", platform: "LeetCode", difficulty: "Medium", desc: "Reorder such that nums[0] < nums[1] > nums[2] < nums[3]...", concepts: "Dutch National Flag, Median", why: "Combines DNF with virtual indexing — very hard Medium." },
    { title: "Segregate 0s and 1s", link: "https://practice.geeksforgeeks.org/problems/segregate-0s-and-1s5106/1", platform: "GFG", difficulty: "Easy", desc: "Segregate 0s and 1s in an array.", concepts: "Dutch National Flag", why: "Two-way partition — simplest DNF variant." },
],

"06-Arrays-Hashing/07-Merge-Intervals": [
    { title: "Merge Intervals", link: "https://leetcode.com/problems/merge-intervals/", platform: "LeetCode", difficulty: "Medium", desc: "Merge all overlapping intervals.", concepts: "Intervals, Sorting", why: "THE interval problem — sort by start, merge." },
    { title: "Insert Interval", link: "https://leetcode.com/problems/insert-interval/", platform: "LeetCode", difficulty: "Medium", desc: "Insert a new interval into sorted non-overlapping intervals and merge if necessary.", concepts: "Intervals", why: "Extension of merge intervals — Google favorite." },
    { title: "Non-overlapping Intervals", link: "https://leetcode.com/problems/non-overlapping-intervals/", platform: "LeetCode", difficulty: "Medium", desc: "Return the minimum number of intervals to remove to make the rest non-overlapping.", concepts: "Intervals, Greedy", why: "Greedy interval scheduling — classic." },
    { title: "Meeting Rooms II", link: "https://leetcode.com/problems/meeting-rooms-ii/", platform: "LeetCode", difficulty: "Medium", desc: "Find the minimum number of conference rooms required.", concepts: "Intervals, Heap", why: "Sweep line / min-heap approach — very common." },
    { title: "Interval List Intersections", link: "https://leetcode.com/problems/interval-list-intersections/", platform: "LeetCode", difficulty: "Medium", desc: "Find the intersection of two interval lists.", concepts: "Intervals, Two Pointer", why: "Two-pointer on sorted intervals." },
    { title: "My Calendar I", link: "https://leetcode.com/problems/my-calendar-i/", platform: "LeetCode", difficulty: "Medium", desc: "Implement a calendar that can add new events without double booking.", concepts: "Intervals, TreeMap", why: "Online interval insertion — BST/TreeMap approach." },
],

"06-Arrays-Hashing/08-Matrix-Traversal": [
    { title: "Spiral Matrix", link: "https://leetcode.com/problems/spiral-matrix/", platform: "LeetCode", difficulty: "Medium", desc: "Return all elements of the matrix in spiral order.", concepts: "Matrix, Simulation", why: "Boundary management under pressure." },
    { title: "Rotate Image", link: "https://leetcode.com/problems/rotate-image/", platform: "LeetCode", difficulty: "Medium", desc: "Rotate an n×n matrix by 90 degrees clockwise in-place.", concepts: "Matrix, Transpose", why: "Transpose + reverse trick — Amazon/Google." },
    { title: "Set Matrix Zeroes", link: "https://leetcode.com/problems/set-matrix-zeroes/", platform: "LeetCode", difficulty: "Medium", desc: "If element is 0, set its entire row and column to 0.", concepts: "Matrix", why: "In-place O(1) space using first row/column as markers." },
    { title: "Diagonal Traverse", link: "https://leetcode.com/problems/diagonal-traverse/", platform: "LeetCode", difficulty: "Medium", desc: "Return all elements of the matrix in diagonal order.", concepts: "Matrix", why: "Direction toggling during traversal." },
    { title: "Spiral Matrix II", link: "https://leetcode.com/problems/spiral-matrix-ii/", platform: "LeetCode", difficulty: "Medium", desc: "Generate an n×n matrix filled with elements 1 to n² in spiral order.", concepts: "Matrix, Simulation", why: "Reverse of Spiral Matrix — generation instead of reading." },
],

// ──────────────────────────────────────────────────────────────────────────
// 07 — SORTING & SEARCHING
// ──────────────────────────────────────────────────────────────────────────
"07-Sorting-Searching/01-Merge-Sort": [
    { title: "Sort an Array", link: "https://leetcode.com/problems/sort-an-array/", platform: "LeetCode", difficulty: "Medium", desc: "Sort an array in ascending order (implement merge sort).", concepts: "Merge Sort", why: "Implement merge sort from scratch." },
    { title: "Count of Smaller Numbers After Self", link: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/", platform: "LeetCode", difficulty: "Hard", desc: "For each element, count the number of smaller elements to its right.", concepts: "Merge Sort, Inversion Count", why: "Modified merge sort for inversion counting." },
    { title: "Reverse Pairs", link: "https://leetcode.com/problems/reverse-pairs/", platform: "LeetCode", difficulty: "Hard", desc: "Count important reverse pairs where nums[i] > 2*nums[j] and i < j.", concepts: "Merge Sort", why: "Merge sort variant with custom comparison." },
    { title: "Count of Range Sum", link: "https://leetcode.com/problems/count-of-range-sum/", platform: "LeetCode", difficulty: "Hard", desc: "Count range sums in [lower, upper] using merge sort on prefix sums.", concepts: "Merge Sort, Prefix Sum", why: "Advanced merge sort application." },
    { title: "Merge Sorted Array", link: "https://leetcode.com/problems/merge-sorted-array/", platform: "LeetCode", difficulty: "Easy", desc: "Merge two sorted arrays in-place.", concepts: "Merge, Two Pointer", why: "Basic merge operation — building block." },
],

"07-Sorting-Searching/02-Quick-Sort": [
    { title: "Sort an Array", link: "https://leetcode.com/problems/sort-an-array/", platform: "LeetCode", difficulty: "Medium", desc: "Sort using Quick Sort with randomized pivot.", concepts: "Quick Sort", why: "Implement quicksort with random pivot to avoid worst case." },
    { title: "Kth Largest Element in an Array", link: "https://leetcode.com/problems/kth-largest-element-in-an-array/", platform: "LeetCode", difficulty: "Medium", desc: "Find the kth largest element in an unsorted array.", concepts: "Quick Select, Partition", why: "Quick Select algorithm — O(n) average case." },
    { title: "Wiggle Sort II", link: "https://leetcode.com/problems/wiggle-sort-ii/", platform: "LeetCode", difficulty: "Medium", desc: "Reorder array such that nums[0] < nums[1] > nums[2] < ...", concepts: "Quick Select, DNF", why: "Quick Select + Dutch National Flag + virtual indexing." },
    { title: "Top K Frequent Elements", link: "https://leetcode.com/problems/top-k-frequent-elements/", platform: "LeetCode", difficulty: "Medium", desc: "Return the k most frequent elements.", concepts: "Quick Select, HashMap", why: "Quick Select on frequencies." },
    { title: "Sort List", link: "https://leetcode.com/problems/sort-list/", platform: "LeetCode", difficulty: "Medium", desc: "Sort a linked list in O(n log n) time and O(1) space.", concepts: "Merge Sort on Linked List", why: "Merge sort is preferred for linked lists over quick sort." },
],

"07-Sorting-Searching/03-Counting-Sort": [
    { title: "Sort Colors", link: "https://leetcode.com/problems/sort-colors/", platform: "LeetCode", difficulty: "Medium", desc: "Sort array with only values 0, 1, 2.", concepts: "Counting Sort", why: "Counting sort when value range is small." },
    { title: "H-Index", link: "https://leetcode.com/problems/h-index/", platform: "LeetCode", difficulty: "Medium", desc: "Compute the researcher's h-index.", concepts: "Counting Sort", why: "Counting sort for O(n) solution instead of O(n log n)." },
    { title: "Maximum Gap", link: "https://leetcode.com/problems/maximum-gap/", platform: "LeetCode", difficulty: "Medium", desc: "Find the maximum difference between successive elements in sorted form.", concepts: "Bucket Sort, Radix Sort", why: "Pigeon-hole principle with bucket sort for O(n)." },
    { title: "Relative Sort Array", link: "https://leetcode.com/problems/relative-sort-array/", platform: "LeetCode", difficulty: "Easy", desc: "Sort arr1 such that relative order matches arr2.", concepts: "Counting Sort", why: "Custom ordering using counting sort." },
    { title: "Sort Characters By Frequency", link: "https://leetcode.com/problems/sort-characters-by-frequency/", platform: "LeetCode", difficulty: "Medium", desc: "Sort string characters by decreasing frequency.", concepts: "Counting Sort, Bucket Sort", why: "Bucket sort for frequency-based ordering." },
],

"07-Sorting-Searching/04-Heap-Sort": [
    { title: "Sort an Array", link: "https://leetcode.com/problems/sort-an-array/", platform: "LeetCode", difficulty: "Medium", desc: "Implement heap sort from scratch.", concepts: "Heap Sort", why: "In-place O(n log n) sort — good for understanding heaps." },
    { title: "Kth Largest Element", link: "https://leetcode.com/problems/kth-largest-element-in-an-array/", platform: "LeetCode", difficulty: "Medium", desc: "Find kth largest using a min-heap of size k.", concepts: "Heap", why: "Min-heap of size k — O(n log k) approach." },
    { title: "Last Stone Weight", link: "https://leetcode.com/problems/last-stone-weight/", platform: "LeetCode", difficulty: "Easy", desc: "Simulate smashing heaviest stones using a max-heap.", concepts: "Heap", why: "Direct max-heap simulation." },
    { title: "Find K Pairs with Smallest Sums", link: "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/", platform: "LeetCode", difficulty: "Medium", desc: "Find k pairs with smallest sums from two sorted arrays.", concepts: "Heap", why: "Multi-way merge using min-heap." },
    { title: "Reorganize String", link: "https://leetcode.com/problems/reorganize-string/", platform: "LeetCode", difficulty: "Medium", desc: "Rearrange string so no two adjacent characters are the same.", concepts: "Heap, Greedy", why: "Greedy with max-heap — always place most frequent." },
],

"07-Sorting-Searching/05-Radix-Sort": [
    { title: "Maximum Gap", link: "https://leetcode.com/problems/maximum-gap/", platform: "LeetCode", difficulty: "Medium", desc: "Find max gap in sorted form in O(n) time.", concepts: "Radix Sort", why: "Radix sort enables O(n) solution." },
    { title: "Sort an Array", link: "https://leetcode.com/problems/sort-an-array/", platform: "LeetCode", difficulty: "Medium", desc: "Implement radix sort (LSD or MSD).", concepts: "Radix Sort", why: "Non-comparison O(nk) sort." },
    { title: "Largest Number", link: "https://leetcode.com/problems/largest-number/", platform: "LeetCode", difficulty: "Medium", desc: "Arrange numbers to form the largest number.", concepts: "Custom Sort", why: "Custom comparator: a+b vs b+a." },
    { title: "Sort the Matrix Diagonally", link: "https://leetcode.com/problems/sort-the-matrix-diagonally/", platform: "LeetCode", difficulty: "Medium", desc: "Sort each diagonal of the matrix in ascending order.", concepts: "Sorting", why: "Practice sorting non-standard structures." },
],

"07-Sorting-Searching/06-Bucket-Sort": [
    { title: "Top K Frequent Elements", link: "https://leetcode.com/problems/top-k-frequent-elements/", platform: "LeetCode", difficulty: "Medium", desc: "Return k most frequent elements using bucket sort.", concepts: "Bucket Sort, HashMap", why: "O(n) solution using frequency buckets." },
    { title: "Sort Characters By Frequency", link: "https://leetcode.com/problems/sort-characters-by-frequency/", platform: "LeetCode", difficulty: "Medium", desc: "Sort characters by decreasing frequency.", concepts: "Bucket Sort", why: "Bucket sort for frequency ordering." },
    { title: "Maximum Gap", link: "https://leetcode.com/problems/maximum-gap/", platform: "LeetCode", difficulty: "Medium", desc: "Find max gap using pigeonhole with bucket sort.", concepts: "Bucket Sort", why: "Pigeonhole principle with buckets." },
    { title: "Contains Duplicate III", link: "https://leetcode.com/problems/contains-duplicate-iii/", platform: "LeetCode", difficulty: "Hard", desc: "Check if any two elements within index diff k have value diff at most t.", concepts: "Bucket Sort, Sliding Window", why: "Bucket-based sliding window — clever O(n)." },
],

"07-Sorting-Searching/07-Custom-Comparators": [
    { title: "Largest Number", link: "https://leetcode.com/problems/largest-number/", platform: "LeetCode", difficulty: "Medium", desc: "Arrange numbers to form the largest number.", concepts: "Custom Comparator", why: "Classic custom comparator: compare a+b vs b+a." },
    { title: "Merge Intervals", link: "https://leetcode.com/problems/merge-intervals/", platform: "LeetCode", difficulty: "Medium", desc: "Merge overlapping intervals after sorting by start.", concepts: "Custom Sort, Intervals", why: "Sort by start time using comparator." },
    { title: "Queue Reconstruction by Height", link: "https://leetcode.com/problems/queue-reconstruction-by-height/", platform: "LeetCode", difficulty: "Medium", desc: "Reconstruct a queue based on height and people-in-front count.", concepts: "Custom Sort, Greedy", why: "Sort descending by height, then insert by k-value." },
    { title: "Custom Sort String", link: "https://leetcode.com/problems/custom-sort-string/", platform: "LeetCode", difficulty: "Medium", desc: "Sort string s so that characters follow the order in string order.", concepts: "Custom Sort", why: "Custom ordering from a reference string." },
    { title: "Reorder Data in Log Files", link: "https://leetcode.com/problems/reorder-data-in-log-files/", platform: "LeetCode", difficulty: "Medium", desc: "Reorder logs: letter-logs sorted lexicographically, digit-logs in original order.", concepts: "Custom Sort", why: "Multi-key sorting with different rules." },
],

// ──────────────────────────────────────────────────────────────────────────
// 08 — RECURSION & BACKTRACKING
// ──────────────────────────────────────────────────────────────────────────
"08-Recursion-Backtracking/01-Recursion-Basics": [
    { title: "Pow(x, n)", link: "https://leetcode.com/problems/powx-n/", platform: "LeetCode", difficulty: "Medium", desc: "Implement pow(x, n) using fast exponentiation.", concepts: "Recursion, Fast Power", why: "Divide and conquer: O(log n) instead of O(n)." },
    { title: "Fibonacci Number", link: "https://leetcode.com/problems/fibonacci-number/", platform: "LeetCode", difficulty: "Easy", desc: "Calculate the nth Fibonacci number.", concepts: "Recursion, Memoization", why: "Foundation for understanding recursion → memoization → DP." },
    { title: "Climbing Stairs", link: "https://leetcode.com/problems/climbing-stairs/", platform: "LeetCode", difficulty: "Easy", desc: "How many distinct ways to climb n stairs (1 or 2 steps)?", concepts: "Recursion, DP", why: "Recursion tree → memoization → tabulation." },
    { title: "Tower of Hanoi", link: "https://practice.geeksforgeeks.org/problems/tower-of-hanoi/1", platform: "GFG", difficulty: "Medium", desc: "Print moves to solve Tower of Hanoi with n discs.", concepts: "Recursion", why: "Classic recursion problem — trust the recursive step." },
    { title: "Reverse String", link: "https://leetcode.com/problems/reverse-string/", platform: "LeetCode", difficulty: "Easy", desc: "Reverse a string in-place using recursion.", concepts: "Recursion", why: "Simple recursion exercise." },
],

"08-Recursion-Backtracking/02-Subsets-Combinations": [
    { title: "Subsets", link: "https://leetcode.com/problems/subsets/", platform: "LeetCode", difficulty: "Medium", desc: "Return all possible subsets of an array.", concepts: "Backtracking", why: "Foundation of include/exclude recursion pattern." },
    { title: "Subsets II", link: "https://leetcode.com/problems/subsets-ii/", platform: "LeetCode", difficulty: "Medium", desc: "Return unique subsets from array with duplicates.", concepts: "Backtracking, Dedup", why: "Skip duplicates at the same recursion level." },
    { title: "Combinations", link: "https://leetcode.com/problems/combinations/", platform: "LeetCode", difficulty: "Medium", desc: "Return all possible combinations of k numbers from 1..n.", concepts: "Backtracking", why: "nCk generation using backtracking." },
    { title: "Combination Sum", link: "https://leetcode.com/problems/combination-sum/", platform: "LeetCode", difficulty: "Medium", desc: "Find combinations that sum to target (can reuse elements).", concepts: "Backtracking", why: "Unbounded subset sum with backtracking." },
    { title: "Combination Sum II", link: "https://leetcode.com/problems/combination-sum-ii/", platform: "LeetCode", difficulty: "Medium", desc: "Find combinations that sum to target (each number used once, with duplicates).", concepts: "Backtracking", why: "Bounded with dedup — sort + skip." },
    { title: "Letter Combinations of a Phone Number", link: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/", platform: "LeetCode", difficulty: "Medium", desc: "Return all possible letter combinations that the phone digits could represent.", concepts: "Backtracking", why: "Multi-branch recursion with mapping." },
],

"08-Recursion-Backtracking/03-Permutations": [
    { title: "Permutations", link: "https://leetcode.com/problems/permutations/", platform: "LeetCode", difficulty: "Medium", desc: "Return all possible permutations of an array.", concepts: "Backtracking", why: "Core permutation generation." },
    { title: "Permutations II", link: "https://leetcode.com/problems/permutations-ii/", platform: "LeetCode", difficulty: "Medium", desc: "Return unique permutations from array with duplicates.", concepts: "Backtracking", why: "Permutation with dedup using sorting." },
    { title: "Next Permutation", link: "https://leetcode.com/problems/next-permutation/", platform: "LeetCode", difficulty: "Medium", desc: "Find the next lexicographically greater permutation.", concepts: "Permutation", why: "In-place next permutation algorithm." },
    { title: "Permutation Sequence", link: "https://leetcode.com/problems/permutation-sequence/", platform: "LeetCode", difficulty: "Hard", desc: "Find the kth permutation sequence of 1..n.", concepts: "Permutation, Math", why: "Factorial number system — O(n²) instead of generating all." },
    { title: "Beautiful Arrangement", link: "https://leetcode.com/problems/beautiful-arrangement/", platform: "LeetCode", difficulty: "Medium", desc: "Count beautiful arrangements where perm[i] is divisible by i or vice versa.", concepts: "Backtracking, Bitmask", why: "Constrained permutation counting." },
],

"08-Recursion-Backtracking/04-N-Queens": [
    { title: "N-Queens", link: "https://leetcode.com/problems/n-queens/", platform: "LeetCode", difficulty: "Hard", desc: "Place n queens on an n×n chessboard so no two queens attack each other.", concepts: "Backtracking", why: "THE backtracking problem — every CS student must solve." },
    { title: "N-Queens II", link: "https://leetcode.com/problems/n-queens-ii/", platform: "LeetCode", difficulty: "Hard", desc: "Return the number of distinct N-Queens solutions.", concepts: "Backtracking", why: "Count-only version — simpler output." },
    { title: "Check Knight Tour Configuration", link: "https://leetcode.com/problems/check-knight-tour-configuration/", platform: "LeetCode", difficulty: "Medium", desc: "Check if a given grid represents a valid knight's tour.", concepts: "Backtracking, Simulation", why: "Verification of backtracking results." },
    { title: "Solve the Sudoku (Codeforces)", link: "https://codeforces.com/problemset/problem/1095/E", platform: "Codeforces", difficulty: "Hard", desc: "Constraint satisfaction on a board — N-Queens style.", concepts: "Backtracking, Constraint Satisfaction", why: "Generalized N-Queens constraint thinking." },
],

"08-Recursion-Backtracking/05-Sudoku-Solver": [
    { title: "Sudoku Solver", link: "https://leetcode.com/problems/sudoku-solver/", platform: "LeetCode", difficulty: "Hard", desc: "Solve a Sudoku puzzle by filling the empty cells.", concepts: "Backtracking", why: "Classic constraint satisfaction — prune aggressively." },
    { title: "Valid Sudoku", link: "https://leetcode.com/problems/valid-sudoku/", platform: "LeetCode", difficulty: "Medium", desc: "Determine if a 9×9 Sudoku board is valid.", concepts: "Hashing, Matrix", why: "Validation before solving — uses HashSet per row/col/box." },
    { title: "Unique Paths III", link: "https://leetcode.com/problems/unique-paths-iii/", platform: "LeetCode", difficulty: "Hard", desc: "Walk over every non-obstacle square exactly once.", concepts: "Backtracking", why: "Hamiltonian path on a grid — pure backtracking." },
    { title: "Crossword Puzzle", link: "https://www.hackerrank.com/challenges/crossword-puzzle/problem", platform: "HackerRank", difficulty: "Medium", desc: "Fill a 10×10 crossword with given words.", concepts: "Backtracking", why: "2D constraint satisfaction similar to Sudoku." },
],

"08-Recursion-Backtracking/06-Divide-And-Conquer": [
    { title: "Merge Sort", link: "https://leetcode.com/problems/sort-an-array/", platform: "LeetCode", difficulty: "Medium", desc: "Implement merge sort.", concepts: "Divide and Conquer", why: "Fundamental D&C algorithm." },
    { title: "Count of Smaller Numbers After Self", link: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/", platform: "LeetCode", difficulty: "Hard", desc: "Count smaller elements to the right using modified merge sort.", concepts: "Divide and Conquer, Merge Sort", why: "Inversion count — classic D&C application." },
    { title: "Closest Pair of Points", link: "https://practice.geeksforgeeks.org/problems/closest-pair-of-points/0", platform: "GFG", difficulty: "Hard", desc: "Find the closest pair of points in 2D using divide and conquer.", concepts: "Divide and Conquer, Geometry", why: "O(n log n) via D&C — textbook algorithm." },
    { title: "Median of Two Sorted Arrays", link: "https://leetcode.com/problems/median-of-two-sorted-arrays/", platform: "LeetCode", difficulty: "Hard", desc: "Find the median of two sorted arrays in O(log(m+n)).", concepts: "Divide and Conquer, Binary Search", why: "One of the hardest LeetCode problems — binary search on partition." },
    { title: "Maximum Subarray (D&C)", link: "https://leetcode.com/problems/maximum-subarray/", platform: "LeetCode", difficulty: "Medium", desc: "Solve maximum subarray using divide and conquer.", concepts: "Divide and Conquer", why: "D&C approach: max of left, right, and crossing." },
],

"08-Recursion-Backtracking/07-Rat-In-Maze": [
    { title: "Rat in a Maze Problem", link: "https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1", platform: "GFG", difficulty: "Medium", desc: "Find all paths for a rat from (0,0) to (n-1,n-1) in a maze.", concepts: "Backtracking", why: "Classic backtracking on grid." },
    { title: "Unique Paths III", link: "https://leetcode.com/problems/unique-paths-iii/", platform: "LeetCode", difficulty: "Hard", desc: "Walk over every non-obstacle square exactly once.", concepts: "Backtracking", why: "Hamiltonian path on grid." },
    { title: "The Maze", link: "https://leetcode.com/problems/the-maze/", platform: "LeetCode", difficulty: "Medium", desc: "Determine if the ball can stop at the destination in a maze.", concepts: "BFS/DFS, Maze", why: "Ball keeps rolling until hitting a wall — different from standard." },
    { title: "Word Search", link: "https://leetcode.com/problems/word-search/", platform: "LeetCode", difficulty: "Medium", desc: "Determine if the word exists in the grid.", concepts: "Backtracking", why: "Grid backtracking with visited tracking." },
],

"08-Recursion-Backtracking/08-Word-Search": [
    { title: "Word Search", link: "https://leetcode.com/problems/word-search/", platform: "LeetCode", difficulty: "Medium", desc: "Determine if the word exists in the grid.", concepts: "Backtracking", why: "Classic grid backtracking — one of the most asked mediums." },
    { title: "Word Search II", link: "https://leetcode.com/problems/word-search-ii/", platform: "LeetCode", difficulty: "Hard", desc: "Find all words in the board that are in the dictionary.", concepts: "Backtracking, Trie", why: "Trie + backtracking optimization — top hard problem." },
    { title: "Word Break II", link: "https://leetcode.com/problems/word-break-ii/", platform: "LeetCode", difficulty: "Hard", desc: "Return all possible sentences from word dictionary.", concepts: "Backtracking, DP", why: "Backtracking with memoization for sentence construction." },
    { title: "Boggle", link: "https://practice.geeksforgeeks.org/problems/boggle-board/1", platform: "GFG", difficulty: "Medium", desc: "Find all words in the board from a dictionary.", concepts: "Backtracking, Trie", why: "Similar to Word Search II." },
],

"08-Recursion-Backtracking/09-Expression-Parsing": [
    { title: "Different Ways to Add Parentheses", link: "https://leetcode.com/problems/different-ways-to-add-parentheses/", platform: "LeetCode", difficulty: "Medium", desc: "Compute all possible results from different groupings of operators.", concepts: "Divide and Conquer, Recursion", why: "Expression tree enumeration." },
    { title: "Basic Calculator", link: "https://leetcode.com/problems/basic-calculator/", platform: "LeetCode", difficulty: "Hard", desc: "Implement a calculator with +, -, and parentheses.", concepts: "Recursion, Stack", why: "Recursive descent parsing — compiler design basics." },
    { title: "Basic Calculator II", link: "https://leetcode.com/problems/basic-calculator-ii/", platform: "LeetCode", difficulty: "Medium", desc: "Implement calculator with +, -, *, / (no parentheses).", concepts: "Stack, Parsing", why: "Operator precedence parsing." },
    { title: "Evaluate Reverse Polish Notation", link: "https://leetcode.com/problems/evaluate-reverse-polish-notation/", platform: "LeetCode", difficulty: "Medium", desc: "Evaluate an arithmetic expression in Reverse Polish Notation.", concepts: "Stack, Expression", why: "Postfix evaluation — stack-based." },
    { title: "Expression Add Operators", link: "https://leetcode.com/problems/expression-add-operators/", platform: "LeetCode", difficulty: "Hard", desc: "Add +, -, or * between digits to reach a target.", concepts: "Backtracking, Expression", why: "Backtracking with expression evaluation — very hard." },
],

// ──────────────────────────────────────────────────────────────────────────
// 09 — LINKED LIST
// ──────────────────────────────────────────────────────────────────────────
"09-Linked-List/01-Singly-Linked-List": [
    { title: "Reverse Linked List", link: "https://leetcode.com/problems/reverse-linked-list/", platform: "LeetCode", difficulty: "Easy", desc: "Reverse a singly linked list.", concepts: "Linked List", why: "THE fundamental linked list operation." },
    { title: "Middle of the Linked List", link: "https://leetcode.com/problems/middle-of-the-linked-list/", platform: "LeetCode", difficulty: "Easy", desc: "Find the middle node of a linked list.", concepts: "Slow/Fast Pointer", why: "Tortoise and hare — basic pattern." },
    { title: "Remove Nth Node From End of List", link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/", platform: "LeetCode", difficulty: "Medium", desc: "Remove the nth node from the end in one pass.", concepts: "Two Pointer", why: "Two-pointer gap technique." },
    { title: "Add Two Numbers", link: "https://leetcode.com/problems/add-two-numbers/", platform: "LeetCode", difficulty: "Medium", desc: "Add two numbers represented as linked lists.", concepts: "Linked List, Math", why: "Carry propagation in linked list — very common." },
    { title: "Palindrome Linked List", link: "https://leetcode.com/problems/palindrome-linked-list/", platform: "LeetCode", difficulty: "Easy", desc: "Determine if a linked list is a palindrome.", concepts: "Linked List, Slow/Fast", why: "Combines reverse + middle finding." },
    { title: "Intersection of Two Linked Lists", link: "https://leetcode.com/problems/intersection-of-two-linked-lists/", platform: "LeetCode", difficulty: "Easy", desc: "Find the node where two singly linked lists intersect.", concepts: "Linked List, Two Pointer", why: "Two-pointer length difference technique." },
],

"09-Linked-List/02-Doubly-Linked-List": [
    { title: "Design Linked List", link: "https://leetcode.com/problems/design-linked-list/", platform: "LeetCode", difficulty: "Medium", desc: "Design a doubly linked list with add/delete operations.", concepts: "Doubly Linked List, Design", why: "Full DLL implementation from scratch." },
    { title: "Flatten a Multilevel Doubly Linked List", link: "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/", platform: "LeetCode", difficulty: "Medium", desc: "Flatten a DLL that has child pointers.", concepts: "DLL, Recursion", why: "Recursive flattening with pointer manipulation." },
    { title: "LRU Cache", link: "https://leetcode.com/problems/lru-cache/", platform: "LeetCode", difficulty: "Medium", desc: "Design a data structure that follows LRU eviction policy.", concepts: "DLL + HashMap", why: "Classic system design — HashMap + DLL = O(1) operations." },
    { title: "LFU Cache", link: "https://leetcode.com/problems/lfu-cache/", platform: "LeetCode", difficulty: "Hard", desc: "Design a data structure that follows LFU eviction policy.", concepts: "DLL + HashMap", why: "Advanced cache — multiple frequency buckets." },
    { title: "Design Browser History", link: "https://leetcode.com/problems/design-browser-history/", platform: "LeetCode", difficulty: "Medium", desc: "Design a browser history with visit, back, forward operations.", concepts: "DLL, Design", why: "Practical DLL application." },
],

"09-Linked-List/03-Cycle-Detection": [
    { title: "Linked List Cycle", link: "https://leetcode.com/problems/linked-list-cycle/", platform: "LeetCode", difficulty: "Easy", desc: "Determine if a linked list has a cycle.", concepts: "Floyd's Cycle Detection", why: "Tortoise and hare — O(1) space cycle detection." },
    { title: "Linked List Cycle II", link: "https://leetcode.com/problems/linked-list-cycle-ii/", platform: "LeetCode", difficulty: "Medium", desc: "Find the node where the cycle begins.", concepts: "Floyd's Cycle Detection", why: "Mathematical proof of cycle start detection." },
    { title: "Find the Duplicate Number", link: "https://leetcode.com/problems/find-the-duplicate-number/", platform: "LeetCode", difficulty: "Medium", desc: "Find the duplicate number in array [1,n] with n+1 elements.", concepts: "Floyd's Algorithm", why: "Cycle detection on array as implicit linked list." },
    { title: "Happy Number", link: "https://leetcode.com/problems/happy-number/", platform: "LeetCode", difficulty: "Easy", desc: "Determine if sum of squared digits eventually reaches 1.", concepts: "Cycle Detection", why: "Floyd's on number sequence." },
],

"09-Linked-List/04-Merge-Sort-Lists": [
    { title: "Merge Two Sorted Lists", link: "https://leetcode.com/problems/merge-two-sorted-lists/", platform: "LeetCode", difficulty: "Easy", desc: "Merge two sorted linked lists.", concepts: "Merge, Linked List", why: "Building block for merge sort on lists." },
    { title: "Merge k Sorted Lists", link: "https://leetcode.com/problems/merge-k-sorted-lists/", platform: "LeetCode", difficulty: "Hard", desc: "Merge k sorted linked lists into one sorted list.", concepts: "Heap, Divide and Conquer", why: "Top hard problem — min-heap or D&C approach." },
    { title: "Sort List", link: "https://leetcode.com/problems/sort-list/", platform: "LeetCode", difficulty: "Medium", desc: "Sort a linked list in O(n log n) time and O(1) space.", concepts: "Merge Sort, Linked List", why: "Bottom-up merge sort on linked list for O(1) space." },
    { title: "Insertion Sort List", link: "https://leetcode.com/problems/insertion-sort-list/", platform: "LeetCode", difficulty: "Medium", desc: "Sort a linked list using insertion sort.", concepts: "Insertion Sort, Linked List", why: "Linked list insertion sort implementation." },
    { title: "Partition List", link: "https://leetcode.com/problems/partition-list/", platform: "LeetCode", difficulty: "Medium", desc: "Partition list around a value x.", concepts: "Linked List", why: "Two-list partition and merge." },
],

"09-Linked-List/05-Flatten-Linked-List": [
    { title: "Flatten a Multilevel Doubly Linked List", link: "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/", platform: "LeetCode", difficulty: "Medium", desc: "Flatten a multilevel DLL.", concepts: "Recursion, DLL", why: "Recursive flattening with child pointers." },
    { title: "Flatten Binary Tree to Linked List", link: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/", platform: "LeetCode", difficulty: "Medium", desc: "Flatten a binary tree to a linked list in-place.", concepts: "Tree, Linked List", why: "Morris-like approach or reverse postorder." },
    { title: "Flattening a Linked List", link: "https://practice.geeksforgeeks.org/problems/flattening-a-linked-list/1", platform: "GFG", difficulty: "Medium", desc: "Flatten a linked list where each node has a next and down pointer.", concepts: "Merge, Linked List", why: "Merge sorted down-lists." },
    { title: "Convert Sorted List to BST", link: "https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/", platform: "LeetCode", difficulty: "Medium", desc: "Convert a sorted linked list to a height-balanced BST.", concepts: "Linked List, BST", why: "In-order simulation with slow/fast pointer." },
],

"09-Linked-List/06-LRU-Cache": [
    { title: "LRU Cache", link: "https://leetcode.com/problems/lru-cache/", platform: "LeetCode", difficulty: "Medium", desc: "Design a data structure that follows the LRU eviction policy.", concepts: "HashMap + DLL", why: "Top 5 most asked design problem — O(1) get and put." },
    { title: "LFU Cache", link: "https://leetcode.com/problems/lfu-cache/", platform: "LeetCode", difficulty: "Hard", desc: "Design LFU (Least Frequently Used) cache.", concepts: "HashMap + DLL + Frequency", why: "Advanced cache design with frequency tracking." },
    { title: "Design HashMap", link: "https://leetcode.com/problems/design-hashmap/", platform: "LeetCode", difficulty: "Easy", desc: "Design a HashMap without using built-in hash table libraries.", concepts: "Hashing, Linked List", why: "Build hash table from scratch — chaining with linked list." },
    { title: "All O'one Data Structure", link: "https://leetcode.com/problems/all-oone-data-structure/", platform: "LeetCode", difficulty: "Hard", desc: "Design a data structure with O(1) inc, dec, getMaxKey, getMinKey.", concepts: "DLL + HashMap", why: "Complex DLL manipulation for O(1) operations." },
],

"09-Linked-List/07-Reverse-In-Groups": [
    { title: "Reverse Nodes in k-Group", link: "https://leetcode.com/problems/reverse-nodes-in-k-group/", platform: "LeetCode", difficulty: "Hard", desc: "Reverse nodes of a linked list k at a time.", concepts: "Linked List, Recursion", why: "Top hard LL problem — iterative is cleaner." },
    { title: "Swap Nodes in Pairs", link: "https://leetcode.com/problems/swap-nodes-in-pairs/", platform: "LeetCode", difficulty: "Medium", desc: "Swap every two adjacent nodes.", concepts: "Linked List", why: "Special case of reverse-k-group with k=2." },
    { title: "Reverse Linked List II", link: "https://leetcode.com/problems/reverse-linked-list-ii/", platform: "LeetCode", difficulty: "Medium", desc: "Reverse a linked list from position left to position right.", concepts: "Linked List", why: "Partial reversal — tricky pointer management." },
    { title: "Odd Even Linked List", link: "https://leetcode.com/problems/odd-even-linked-list/", platform: "LeetCode", difficulty: "Medium", desc: "Group all odd-indexed nodes followed by even-indexed nodes.", concepts: "Linked List", why: "Rearrangement by index parity." },
],

// ──────────────────────────────────────────────────────────────────────────
// 10 — STACK, QUEUE, PRIORITY QUEUE
// ──────────────────────────────────────────────────────────────────────────
"10-Stack-Queue-PriorityQueue/01-Stack-Problems": [
    { title: "Valid Parentheses", link: "https://leetcode.com/problems/valid-parentheses/", platform: "LeetCode", difficulty: "Easy", desc: "Determine if the input string has valid bracket matching.", concepts: "Stack", why: "THE stack problem — matching brackets." },
    { title: "Min Stack", link: "https://leetcode.com/problems/min-stack/", platform: "LeetCode", difficulty: "Medium", desc: "Design a stack that supports push, pop, top, and getMin in O(1).", concepts: "Stack, Design", why: "Two-stack or encoded single-stack approach." },
    { title: "Largest Rectangle in Histogram", link: "https://leetcode.com/problems/largest-rectangle-in-histogram/", platform: "LeetCode", difficulty: "Hard", desc: "Find the largest rectangle in a histogram.", concepts: "Stack", why: "THE hard stack problem — monotonic stack application." },
    { title: "Daily Temperatures", link: "https://leetcode.com/problems/daily-temperatures/", platform: "LeetCode", difficulty: "Medium", desc: "Find days until a warmer temperature.", concepts: "Stack", why: "Next greater element variant." },
    { title: "Decode String", link: "https://leetcode.com/problems/decode-string/", platform: "LeetCode", difficulty: "Medium", desc: "Decode encoded string like '3[a2[c]]' → 'accaccacc'.", concepts: "Stack, Recursion", why: "Nested decoding using stack." },
    { title: "Remove All Adjacent Duplicates in String II", link: "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/", platform: "LeetCode", difficulty: "Medium", desc: "Remove k adjacent duplicate characters.", concepts: "Stack", why: "Stack with count tracking." },
],

"10-Stack-Queue-PriorityQueue/02-Monotonic-Stack": [
    { title: "Next Greater Element I", link: "https://leetcode.com/problems/next-greater-element-i/", platform: "LeetCode", difficulty: "Easy", desc: "Find the next greater element for each element.", concepts: "Monotonic Stack", why: "Foundation of monotonic stack." },
    { title: "Next Greater Element II", link: "https://leetcode.com/problems/next-greater-element-ii/", platform: "LeetCode", difficulty: "Medium", desc: "Next greater element in a circular array.", concepts: "Monotonic Stack, Circular", why: "Circular array trick — iterate twice." },
    { title: "Largest Rectangle in Histogram", link: "https://leetcode.com/problems/largest-rectangle-in-histogram/", platform: "LeetCode", difficulty: "Hard", desc: "Find the largest rectangle in a histogram.", concepts: "Monotonic Stack", why: "Classic monotonic stack application." },
    { title: "Maximal Rectangle", link: "https://leetcode.com/problems/maximal-rectangle/", platform: "LeetCode", difficulty: "Hard", desc: "Find the largest rectangle containing only 1s in a binary matrix.", concepts: "Monotonic Stack, Histogram", why: "Extend histogram approach to 2D." },
    { title: "Sum of Subarray Minimums", link: "https://leetcode.com/problems/sum-of-subarray-minimums/", platform: "LeetCode", difficulty: "Medium", desc: "Return the sum of min(b) for every subarray b.", concepts: "Monotonic Stack, Math", why: "Contribution technique with monotonic stack." },
    { title: "Trapping Rain Water", link: "https://leetcode.com/problems/trapping-rain-water/", platform: "LeetCode", difficulty: "Hard", desc: "Compute how much water can be trapped.", concepts: "Monotonic Stack", why: "Stack-based approach to trapping rain water." },
],

"10-Stack-Queue-PriorityQueue/03-Queue-Problems": [
    { title: "Implement Queue using Stacks", link: "https://leetcode.com/problems/implement-queue-using-stacks/", platform: "LeetCode", difficulty: "Easy", desc: "Implement a FIFO queue using only two stacks.", concepts: "Queue, Stack", why: "Amortized O(1) — lazy transfer technique." },
    { title: "Implement Stack using Queues", link: "https://leetcode.com/problems/implement-stack-using-queues/", platform: "LeetCode", difficulty: "Easy", desc: "Implement a LIFO stack using only two queues.", concepts: "Stack, Queue", why: "Queue rotation technique." },
    { title: "Design Circular Queue", link: "https://leetcode.com/problems/design-circular-queue/", platform: "LeetCode", difficulty: "Medium", desc: "Design a circular queue.", concepts: "Queue, Array", why: "Modular arithmetic for circular buffer." },
    { title: "Number of Recent Calls", link: "https://leetcode.com/problems/number-of-recent-calls/", platform: "LeetCode", difficulty: "Easy", desc: "Count requests in the last 3000 ms.", concepts: "Queue", why: "Simple queue usage with time window." },
    { title: "Dota2 Senate", link: "https://leetcode.com/problems/dota2-senate/", platform: "LeetCode", difficulty: "Medium", desc: "Determine which party wins the senate voting game.", concepts: "Queue, Greedy", why: "Circular queue simulation." },
],

"10-Stack-Queue-PriorityQueue/04-Priority-Queue-Heap": [
    { title: "Kth Largest Element in a Stream", link: "https://leetcode.com/problems/kth-largest-element-in-a-stream/", platform: "LeetCode", difficulty: "Easy", desc: "Design a class to find the kth largest element in a stream.", concepts: "Min-Heap", why: "Min-heap of size k — streaming kth largest." },
    { title: "Find Median from Data Stream", link: "https://leetcode.com/problems/find-median-from-data-stream/", platform: "LeetCode", difficulty: "Hard", desc: "Find median from a data stream.", concepts: "Two Heaps", why: "Two-heap technique — max-heap + min-heap." },
    { title: "Merge k Sorted Lists", link: "https://leetcode.com/problems/merge-k-sorted-lists/", platform: "LeetCode", difficulty: "Hard", desc: "Merge k sorted lists using a min-heap.", concepts: "Heap, Linked List", why: "Multi-way merge with min-heap." },
    { title: "Task Scheduler", link: "https://leetcode.com/problems/task-scheduler/", platform: "LeetCode", difficulty: "Medium", desc: "Schedule tasks with cooldown period.", concepts: "Heap, Greedy", why: "Greedy scheduling with max-heap." },
    { title: "Ugly Number II", link: "https://leetcode.com/problems/ugly-number-ii/", platform: "LeetCode", difficulty: "Medium", desc: "Find the n-th ugly number.", concepts: "Heap, DP", why: "Min-heap or triple-pointer approach." },
    { title: "Smallest Range Covering Elements from K Lists", link: "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/", platform: "LeetCode", difficulty: "Hard", desc: "Find the smallest range that includes at least one number from each list.", concepts: "Heap, Sliding Window", why: "Min-heap with range tracking." },
],

"10-Stack-Queue-PriorityQueue/05-Deque-Problems": [
    { title: "Sliding Window Maximum", link: "https://leetcode.com/problems/sliding-window-maximum/", platform: "LeetCode", difficulty: "Hard", desc: "Return max of each sliding window of size k.", concepts: "Deque, Monotonic", why: "Monotonic deque — THE deque problem." },
    { title: "Shortest Subarray with Sum at Least K", link: "https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/", platform: "LeetCode", difficulty: "Hard", desc: "Find shortest subarray with sum at least k.", concepts: "Deque, Prefix Sum", why: "Monotonic deque on prefix sums — handles negative numbers." },
    { title: "Maximum Sum of Subarrays of Size K", link: "https://practice.geeksforgeeks.org/problems/max-sum-subarray-of-size-k5313/1", platform: "GFG", difficulty: "Easy", desc: "Find maximum sum subarray of size k.", concepts: "Deque, Sliding Window", why: "Deque-based sliding window." },
    { title: "Design Front Middle Back Queue", link: "https://leetcode.com/problems/design-front-middle-back-queue/", platform: "LeetCode", difficulty: "Medium", desc: "Design a queue with front, middle, and back operations.", concepts: "Deque, Design", why: "Two-deque design for O(1) middle operations." },
],

"10-Stack-Queue-PriorityQueue/06-Circular-Queue": [
    { title: "Design Circular Queue", link: "https://leetcode.com/problems/design-circular-queue/", platform: "LeetCode", difficulty: "Medium", desc: "Design a circular queue.", concepts: "Circular Queue", why: "Ring buffer with modular arithmetic." },
    { title: "Design Circular Deque", link: "https://leetcode.com/problems/design-circular-deque/", platform: "LeetCode", difficulty: "Medium", desc: "Design a circular double-ended queue.", concepts: "Circular Deque", why: "Extension of circular queue with both ends." },
    { title: "Design Hit Counter", link: "https://leetcode.com/problems/design-hit-counter/", platform: "LeetCode", difficulty: "Medium", desc: "Design a hit counter that counts hits in past 5 minutes.", concepts: "Circular Buffer, Queue", why: "Circular buffer for time-windowed counting." },
    { title: "Moving Average from Data Stream", link: "https://leetcode.com/problems/moving-average-from-data-stream/", platform: "LeetCode", difficulty: "Easy", desc: "Calculate the moving average of a data stream.", concepts: "Circular Queue", why: "Fixed-size circular buffer." },
],

"10-Stack-Queue-PriorityQueue/07-Next-Greater-Element": [
    { title: "Next Greater Element I", link: "https://leetcode.com/problems/next-greater-element-i/", platform: "LeetCode", difficulty: "Easy", desc: "Find the next greater element for each query.", concepts: "Stack, HashMap", why: "Monotonic stack + map for queries." },
    { title: "Next Greater Element II", link: "https://leetcode.com/problems/next-greater-element-ii/", platform: "LeetCode", difficulty: "Medium", desc: "Next greater element in a circular array.", concepts: "Monotonic Stack", why: "Circular array — iterate 2n times." },
    { title: "Next Greater Node In Linked List", link: "https://leetcode.com/problems/next-greater-node-in-linked-list/", platform: "LeetCode", difficulty: "Medium", desc: "Find the next greater value for each node in a linked list.", concepts: "Stack, Linked List", why: "NGE on linked list — reverse or stack approach." },
    { title: "Next Greater Element III", link: "https://leetcode.com/problems/next-greater-element-iii/", platform: "LeetCode", difficulty: "Medium", desc: "Find the smallest integer greater than n with same digits.", concepts: "Next Permutation", why: "Same as next permutation problem." },
    { title: "Daily Temperatures", link: "https://leetcode.com/problems/daily-temperatures/", platform: "LeetCode", difficulty: "Medium", desc: "Days until a warmer temperature.", concepts: "Monotonic Stack", why: "Classic NGE variant." },
],

"10-Stack-Queue-PriorityQueue/08-Stock-Span": [
    { title: "Online Stock Span", link: "https://leetcode.com/problems/online-stock-span/", platform: "LeetCode", difficulty: "Medium", desc: "Find the stock span (consecutive days price <= today).", concepts: "Monotonic Stack", why: "THE stock span problem — monotonic stack." },
    { title: "Stock Price Fluctuation", link: "https://leetcode.com/problems/stock-price-fluctuation/", platform: "LeetCode", difficulty: "Medium", desc: "Design a stock price tracking system with corrections.", concepts: "HashMap, Heap", why: "Multiple data structures for efficient updates." },
    { title: "Best Time to Buy and Sell Stock", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", platform: "LeetCode", difficulty: "Easy", desc: "Find maximum profit from one buy-sell transaction.", concepts: "Greedy", why: "Track minimum and maximize profit." },
    { title: "Best Time to Buy and Sell Stock II", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/", platform: "LeetCode", difficulty: "Medium", desc: "Maximum profit with unlimited transactions.", concepts: "Greedy", why: "Buy at every valley, sell at every peak." },
],

// ──────────────────────────────────────────────────────────────────────────
// 11 — STRING ALGORITHMS
// ──────────────────────────────────────────────────────────────────────────
"11-String-Algorithms/01-KMP-Algorithm": [
    { title: "Find the Index of the First Occurrence", link: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/", platform: "LeetCode", difficulty: "Easy", desc: "Find the first occurrence of needle in haystack.", concepts: "KMP", why: "Direct KMP application." },
    { title: "Repeated Substring Pattern", link: "https://leetcode.com/problems/repeated-substring-pattern/", platform: "LeetCode", difficulty: "Easy", desc: "Check if string can be constructed by repeating a substring.", concepts: "KMP, Failure Function", why: "KMP failure function reveals the period." },
    { title: "Shortest Palindrome", link: "https://leetcode.com/problems/shortest-palindrome/", platform: "LeetCode", difficulty: "Hard", desc: "Find the shortest palindrome by adding characters in front.", concepts: "KMP", why: "KMP on s + '#' + reverse(s) — clever trick." },
    { title: "String Matching in a Text", link: "https://cses.fi/problemset/task/1753", platform: "CSES", difficulty: "Medium", desc: "Count occurrences of a pattern in a text.", concepts: "KMP", why: "Standard pattern matching." },
    { title: "Number of Subarrays That Match a Pattern", link: "https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-ii/", platform: "LeetCode", difficulty: "Hard", desc: "Count subarrays matching a comparison pattern.", concepts: "KMP", why: "KMP on transformed arrays." },
],

"11-String-Algorithms/02-Rabin-Karp": [
    { title: "Repeated DNA Sequences", link: "https://leetcode.com/problems/repeated-dna-sequences/", platform: "LeetCode", difficulty: "Medium", desc: "Find all 10-letter sequences that occur more than once.", concepts: "Rolling Hash, Rabin-Karp", why: "Rolling hash for fixed-length substring matching." },
    { title: "Longest Duplicate Substring", link: "https://leetcode.com/problems/longest-duplicate-substring/", platform: "LeetCode", difficulty: "Hard", desc: "Find the longest substring that occurs at least twice.", concepts: "Rabin-Karp, Binary Search", why: "Binary search + rolling hash — advanced technique." },
    { title: "Distinct Substrings", link: "https://www.spoj.com/problems/DISUBSTR/", platform: "SPOJ", difficulty: "Medium", desc: "Count the number of distinct substrings.", concepts: "Rabin-Karp, Suffix Array", why: "Multiple approaches: hashing or suffix array." },
    { title: "Longest Happy Prefix", link: "https://leetcode.com/problems/longest-happy-prefix/", platform: "LeetCode", difficulty: "Hard", desc: "Find the longest prefix that is also a suffix.", concepts: "Rabin-Karp, KMP", why: "Rolling hash or KMP failure function." },
],

"11-String-Algorithms/03-Z-Algorithm": [
    { title: "Z-Function", link: "https://cp-algorithms.com/string/z-function.html", platform: "CP-Algorithms", difficulty: "Medium", desc: "Compute Z-array for efficient string matching.", concepts: "Z-Algorithm", why: "Alternative to KMP with simpler implementation." },
    { title: "String Matching", link: "https://cses.fi/problemset/task/1753", platform: "CSES", difficulty: "Medium", desc: "Count pattern occurrences using Z-function.", concepts: "Z-Algorithm", why: "Direct Z-function application." },
    { title: "Longest Common Prefix", link: "https://leetcode.com/problems/longest-common-prefix/", platform: "LeetCode", difficulty: "Easy", desc: "Find the longest common prefix among an array of strings.", concepts: "Z-Algorithm, String", why: "Can be solved with Z-function approach." },
    { title: "Pattern Matching (Multiple)", link: "https://codeforces.com/problemset/problem/126/B", platform: "Codeforces", difficulty: "Medium", desc: "Find a string that is prefix, suffix, and occurs in the middle.", concepts: "Z-Algorithm, KMP", why: "Creative Z-function application." },
],

"11-String-Algorithms/04-Manacher-Algorithm": [
    { title: "Longest Palindromic Substring", link: "https://leetcode.com/problems/longest-palindromic-substring/", platform: "LeetCode", difficulty: "Medium", desc: "Find the longest palindromic substring.", concepts: "Manacher's, Expand Around Center", why: "Manacher's gives O(n) — but expand-around-center is also accepted." },
    { title: "Palindromic Substrings", link: "https://leetcode.com/problems/palindromic-substrings/", platform: "LeetCode", difficulty: "Medium", desc: "Count the number of palindromic substrings.", concepts: "Manacher's", why: "Counting version — Manacher's gives all palindrome radii." },
    { title: "Longest Palindromic Subsequence", link: "https://leetcode.com/problems/longest-palindromic-subsequence/", platform: "LeetCode", difficulty: "Medium", desc: "Find the longest palindromic subsequence.", concepts: "DP, LCS variant", why: "LCS(s, reverse(s)) — DP not Manacher's." },
    { title: "Shortest Palindrome", link: "https://leetcode.com/problems/shortest-palindrome/", platform: "LeetCode", difficulty: "Hard", desc: "Find shortest palindrome by adding characters in front.", concepts: "Manacher's, KMP", why: "Can use Manacher's to find longest prefix palindrome." },
],

"11-String-Algorithms/05-Suffix-Array": [
    { title: "Suffix Array Construction", link: "https://cp-algorithms.com/string/suffix-array.html", platform: "CP-Algorithms", difficulty: "Hard", desc: "Build suffix array in O(n log n) or O(n log² n).", concepts: "Suffix Array", why: "Foundation for many string problems." },
    { title: "Distinct Substrings", link: "https://www.spoj.com/problems/DISUBSTR/", platform: "SPOJ", difficulty: "Medium", desc: "Count distinct substrings using suffix array + LCP.", concepts: "Suffix Array, LCP", why: "n*(n+1)/2 - sum(LCP) gives distinct substring count." },
    { title: "Longest Common Substring", link: "https://www.spoj.com/problems/LCS/", platform: "SPOJ", difficulty: "Hard", desc: "Find the longest common substring of two strings.", concepts: "Suffix Array, LCP", why: "Concatenate strings and use SA + LCP." },
    { title: "String Period", link: "https://cses.fi/problemset/task/1733", platform: "CSES", difficulty: "Medium", desc: "Find all periods of a string.", concepts: "Suffix Array, Z-Function", why: "Period = n - Z[i] or n - failure[n]." },
],

"11-String-Algorithms/06-String-Hashing": [
    { title: "Group Anagrams", link: "https://leetcode.com/problems/group-anagrams/", platform: "LeetCode", difficulty: "Medium", desc: "Group strings that are anagrams.", concepts: "String Hashing", why: "Hash key design for anagram grouping." },
    { title: "Longest Duplicate Substring", link: "https://leetcode.com/problems/longest-duplicate-substring/", platform: "LeetCode", difficulty: "Hard", desc: "Find longest duplicate substring using rolling hash.", concepts: "Rolling Hash, Binary Search", why: "Rabin-Karp rolling hash for substring comparison." },
    { title: "Repeated DNA Sequences", link: "https://leetcode.com/problems/repeated-dna-sequences/", platform: "LeetCode", difficulty: "Medium", desc: "Find repeated 10-letter DNA sequences.", concepts: "Rolling Hash", why: "Rolling hash for fixed-length substrings." },
    { title: "Implement strStr()", link: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/", platform: "LeetCode", difficulty: "Easy", desc: "Pattern matching using string hashing.", concepts: "String Hashing", why: "Polynomial hashing for pattern matching." },
    { title: "Palindrome Pairs", link: "https://leetcode.com/problems/palindrome-pairs/", platform: "LeetCode", difficulty: "Hard", desc: "Find all pairs of indices (i,j) where words[i]+words[j] is palindrome.", concepts: "String Hashing, Trie", why: "Hash-based palindrome checking." },
],

"11-String-Algorithms/07-Palindrome-Partitioning": [
    { title: "Palindrome Partitioning", link: "https://leetcode.com/problems/palindrome-partitioning/", platform: "LeetCode", difficulty: "Medium", desc: "Return all possible palindrome partitioning of a string.", concepts: "Backtracking", why: "Backtracking with palindrome check." },
    { title: "Palindrome Partitioning II", link: "https://leetcode.com/problems/palindrome-partitioning-ii/", platform: "LeetCode", difficulty: "Hard", desc: "Find minimum cuts for palindrome partitioning.", concepts: "DP", why: "DP with precomputed palindrome table." },
    { title: "Palindrome Partitioning III", link: "https://leetcode.com/problems/palindrome-partitioning-iii/", platform: "LeetCode", difficulty: "Hard", desc: "Partition into k palindromic substrings with minimum character changes.", concepts: "DP", why: "2D DP with cost function." },
    { title: "Palindrome Partitioning IV", link: "https://leetcode.com/problems/palindrome-partitioning-iv/", platform: "LeetCode", difficulty: "Hard", desc: "Check if string can be split into three palindromes.", concepts: "DP, Manacher's", why: "Precompute palindrome status + enumerate splits." },
],

"11-String-Algorithms/08-Aho-Corasick": [
    { title: "Word Search II", link: "https://leetcode.com/problems/word-search-ii/", platform: "LeetCode", difficulty: "Hard", desc: "Find all words in the board from a dictionary.", concepts: "Trie, Aho-Corasick", why: "Multi-pattern matching on grid." },
    { title: "Stream of Characters", link: "https://leetcode.com/problems/stream-of-characters/", platform: "LeetCode", difficulty: "Hard", desc: "Design a class to check if a suffix of queried characters matches any word.", concepts: "Aho-Corasick, Trie", why: "Streaming multi-pattern matching." },
    { title: "Multi-Pattern Matching", link: "https://cp-algorithms.com/string/aho_corasick.html", platform: "CP-Algorithms", difficulty: "Hard", desc: "Find all occurrences of multiple patterns in a text simultaneously.", concepts: "Aho-Corasick", why: "THE multi-pattern matching algorithm." },
    { title: "DNA Sequence Analysis", link: "https://www.spoj.com/problems/AHOCUR/", platform: "SPOJ", difficulty: "Hard", desc: "Count strings of length n that don't contain any forbidden patterns.", concepts: "Aho-Corasick, DP", why: "Aho-Corasick automaton + DP on states." },
],

// ──────────────────────────────────────────────────────────────────────────
// 12 — TREES
// ──────────────────────────────────────────────────────────────────────────
"12-Trees/01-Binary-Tree-Traversals": [
    { title: "Binary Tree Inorder Traversal", link: "https://leetcode.com/problems/binary-tree-inorder-traversal/", platform: "LeetCode", difficulty: "Easy", desc: "Return the inorder traversal of a binary tree.", concepts: "DFS, Recursion", why: "Foundation — must know iterative too." },
    { title: "Binary Tree Level Order Traversal", link: "https://leetcode.com/problems/binary-tree-level-order-traversal/", platform: "LeetCode", difficulty: "Medium", desc: "Return level order traversal.", concepts: "BFS", why: "BFS on tree — queue-based." },
    { title: "Binary Tree Zigzag Level Order", link: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/", platform: "LeetCode", difficulty: "Medium", desc: "Return zigzag level order traversal.", concepts: "BFS", why: "Alternate direction per level." },
    { title: "Vertical Order Traversal", link: "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/", platform: "LeetCode", difficulty: "Hard", desc: "Return the vertical order traversal.", concepts: "BFS/DFS, TreeMap", why: "Column-based ordering with tie-breaking." },
    { title: "Boundary of Binary Tree", link: "https://leetcode.com/problems/boundary-of-binary-tree/", platform: "LeetCode", difficulty: "Medium", desc: "Return the boundary traversal of a binary tree.", concepts: "DFS", why: "Left boundary + leaves + right boundary." },
    { title: "Serialize and Deserialize Binary Tree", link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/", platform: "LeetCode", difficulty: "Hard", desc: "Serialize and deserialize a binary tree.", concepts: "BFS/DFS, Design", why: "Top design problem — preorder with nulls." },
],

"12-Trees/02-BST": [
    { title: "Validate Binary Search Tree", link: "https://leetcode.com/problems/validate-binary-search-tree/", platform: "LeetCode", difficulty: "Medium", desc: "Determine if a binary tree is a valid BST.", concepts: "BST, Inorder", why: "Range validation or inorder approach." },
    { title: "Kth Smallest Element in a BST", link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/", platform: "LeetCode", difficulty: "Medium", desc: "Return the kth smallest element in a BST.", concepts: "BST, Inorder", why: "Inorder traversal gives sorted order." },
    { title: "Lowest Common Ancestor of a BST", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/", platform: "LeetCode", difficulty: "Medium", desc: "Find the LCA of two nodes in a BST.", concepts: "BST", why: "Exploit BST property: go left/right based on values." },
    { title: "Delete Node in a BST", link: "https://leetcode.com/problems/delete-node-in-a-bst/", platform: "LeetCode", difficulty: "Medium", desc: "Delete a node in a BST and return the root.", concepts: "BST", why: "Three cases: leaf, one child, two children." },
    { title: "Convert Sorted Array to BST", link: "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/", platform: "LeetCode", difficulty: "Easy", desc: "Convert sorted array to height-balanced BST.", concepts: "BST, Recursion", why: "Divide and conquer — pick middle as root." },
],

"12-Trees/03-LCA": [
    { title: "LCA of a Binary Tree", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/", platform: "LeetCode", difficulty: "Medium", desc: "Find the lowest common ancestor of two nodes.", concepts: "LCA, DFS", why: "THE LCA problem — recursive DFS approach." },
    { title: "LCA of a BST", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/", platform: "LeetCode", difficulty: "Medium", desc: "Find LCA in a BST.", concepts: "LCA, BST", why: "Simpler than general — use BST property." },
    { title: "LCA of Deepest Leaves", link: "https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/", platform: "LeetCode", difficulty: "Medium", desc: "Find the LCA of the deepest leaves.", concepts: "LCA, DFS", why: "Depth-based LCA variant." },
    { title: "Company Queries II", link: "https://cses.fi/problemset/task/1688", platform: "CSES", difficulty: "Hard", desc: "Find LCA of two nodes in a tree using binary lifting.", concepts: "LCA, Binary Lifting", why: "O(log n) LCA using sparse table — fundamental CP technique." },
    { title: "Distance Queries", link: "https://cses.fi/problemset/task/1135", platform: "CSES", difficulty: "Hard", desc: "Find distance between two nodes using LCA.", concepts: "LCA, Tree", why: "dist(u,v) = depth[u] + depth[v] - 2*depth[lca(u,v)]." },
],

"12-Trees/04-Tree-DP": [
    { title: "Diameter of Binary Tree", link: "https://leetcode.com/problems/diameter-of-binary-tree/", platform: "LeetCode", difficulty: "Easy", desc: "Find the longest path between any two nodes.", concepts: "Tree DP", why: "Simplest tree DP — height-based." },
    { title: "Binary Tree Maximum Path Sum", link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/", platform: "LeetCode", difficulty: "Hard", desc: "Find the maximum path sum in a binary tree.", concepts: "Tree DP", why: "At each node: max of taking path through node or not." },
    { title: "House Robber III", link: "https://leetcode.com/problems/house-robber-iii/", platform: "LeetCode", difficulty: "Medium", desc: "Maximum amount robbing houses arranged in a binary tree.", concepts: "Tree DP", why: "Include/exclude DP on tree." },
    { title: "Tree Distances I", link: "https://cses.fi/problemset/task/1132", platform: "CSES", difficulty: "Hard", desc: "For each node, find the maximum distance to any other node.", concepts: "Tree DP, Rerooting", why: "Rerooting technique — compute answer for all roots." },
    { title: "Tree Distances II", link: "https://cses.fi/problemset/task/1133", platform: "CSES", difficulty: "Hard", desc: "For each node, find the sum of distances to all other nodes.", concepts: "Tree DP, Rerooting", why: "Classic rerooting DP." },
    { title: "Longest Path in Tree", link: "https://cses.fi/problemset/task/1132", platform: "CSES", difficulty: "Medium", desc: "Find the longest path (diameter) in a tree.", concepts: "Tree DP", why: "Two BFS or single DFS approach." },
],

"12-Trees/05-Euler-Tour": [
    { title: "Subtree Queries", link: "https://cses.fi/problemset/task/1137", platform: "CSES", difficulty: "Hard", desc: "Update node values and query subtree sums.", concepts: "Euler Tour, BIT/Seg Tree", why: "Flatten tree to array using Euler Tour + range queries." },
    { title: "Path Queries", link: "https://cses.fi/problemset/task/1138", platform: "CSES", difficulty: "Hard", desc: "Update node values and query path sums to root.", concepts: "Euler Tour, BIT", why: "Euler Tour + difference array technique." },
    { title: "Kth Ancestor", link: "https://leetcode.com/problems/kth-ancestor-of-a-tree-node/", platform: "LeetCode", difficulty: "Hard", desc: "Find the kth ancestor of a tree node.", concepts: "Binary Lifting, Euler Tour", why: "Binary lifting for O(log n) ancestor queries." },
    { title: "Count Nodes in Subtree", link: "https://practice.geeksforgeeks.org/problems/count-number-of-subtrees-having-given-sum/1", platform: "GFG", difficulty: "Medium", desc: "Count nodes in each subtree.", concepts: "Euler Tour", why: "In-time and out-time give subtree ranges." },
],

"12-Trees/06-Heavy-Light-Decomposition": [
    { title: "Path Queries II", link: "https://cses.fi/problemset/task/2134", platform: "CSES", difficulty: "Hard", desc: "Update node values and query max on paths.", concepts: "HLD, Segment Tree", why: "HLD decomposes tree paths into O(log n) chains." },
    { title: "QTREE - Query on a Tree", link: "https://www.spoj.com/problems/QTREE/", platform: "SPOJ", difficulty: "Hard", desc: "Answer max edge weight queries on tree paths.", concepts: "HLD, Segment Tree", why: "Classic HLD problem." },
    { title: "Ants", link: "https://www.spoj.com/problems/GRASSPLA/", platform: "SPOJ", difficulty: "Hard", desc: "Path update and query on tree.", concepts: "HLD", why: "HLD with lazy propagation." },
    { title: "Tree Path Queries", link: "https://cses.fi/problemset/task/2134", platform: "CSES", difficulty: "Hard", desc: "Answer path queries using HLD.", concepts: "HLD, Segment Tree", why: "Standard HLD application." },
],

"12-Trees/07-Morris-Traversal": [
    { title: "Binary Tree Inorder (Morris)", link: "https://leetcode.com/problems/binary-tree-inorder-traversal/", platform: "LeetCode", difficulty: "Easy", desc: "Inorder traversal using O(1) space with Morris traversal.", concepts: "Morris Traversal", why: "O(1) space traversal by threading." },
    { title: "Recover Binary Search Tree", link: "https://leetcode.com/problems/recover-binary-search-tree/", platform: "LeetCode", difficulty: "Medium", desc: "Two nodes of a BST are swapped. Recover the tree.", concepts: "Morris Traversal, BST", why: "O(1) space recovery using Morris inorder." },
    { title: "Flatten Binary Tree to Linked List", link: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/", platform: "LeetCode", difficulty: "Medium", desc: "Flatten binary tree to linked list in-place.", concepts: "Morris-like", why: "Morris-like threading for O(1) space." },
    { title: "Binary Tree Preorder (Morris)", link: "https://leetcode.com/problems/binary-tree-preorder-traversal/", platform: "LeetCode", difficulty: "Easy", desc: "Preorder traversal using Morris approach.", concepts: "Morris Traversal", why: "Variant: print when first visiting, not when returning." },
],

"12-Trees/08-Centroid-Decomposition": [
    { title: "Centroid Decomposition", link: "https://cp-algorithms.com/graph/centroid-decomposition.html", platform: "CP-Algorithms", difficulty: "Hard", desc: "Decompose tree using centroids for efficient path queries.", concepts: "Centroid Decomposition", why: "Fundamental technique for tree path problems." },
    { title: "Race (IOI 2011)", link: "https://oj.uz/problem/view/IOI11_race", platform: "OI", difficulty: "Hard", desc: "Find minimum edges path with given length.", concepts: "Centroid Decomposition", why: "Classic centroid decomposition application." },
    { title: "Xenia and Tree", link: "https://codeforces.com/problemset/problem/342/E", platform: "Codeforces", difficulty: "Hard", desc: "Paint nodes and query closest painted node.", concepts: "Centroid Decomposition", why: "Online closest node query on tree." },
    { title: "Finding Centroids", link: "https://cses.fi/problemset/task/2079", platform: "CSES", difficulty: "Medium", desc: "Find the centroid of a tree.", concepts: "Centroid", why: "Centroid finding is the first step." },
],

// ──────────────────────────────────────────────────────────────────────────
// 13 — GRAPH ALGORITHMS
// ──────────────────────────────────────────────────────────────────────────
"13-Graph-Algorithms/01-BFS-DFS": [
    { title: "Number of Islands", link: "https://leetcode.com/problems/number-of-islands/", platform: "LeetCode", difficulty: "Medium", desc: "Count the number of islands in a 2D grid.", concepts: "BFS/DFS, Grid", why: "THE graph traversal problem." },
    { title: "Clone Graph", link: "https://leetcode.com/problems/clone-graph/", platform: "LeetCode", difficulty: "Medium", desc: "Return a deep copy of the graph.", concepts: "BFS/DFS", why: "Deep copy with visited tracking." },
    { title: "Course Schedule", link: "https://leetcode.com/problems/course-schedule/", platform: "LeetCode", difficulty: "Medium", desc: "Determine if you can finish all courses (cycle detection).", concepts: "DFS, Topological Sort", why: "Cycle detection in directed graph." },
    { title: "Word Ladder", link: "https://leetcode.com/problems/word-ladder/", platform: "LeetCode", difficulty: "Hard", desc: "Find shortest transformation sequence from beginWord to endWord.", concepts: "BFS", why: "BFS for shortest path in implicit graph." },
    { title: "Surrounded Regions", link: "https://leetcode.com/problems/surrounded-regions/", platform: "LeetCode", difficulty: "Medium", desc: "Capture all surrounded regions.", concepts: "BFS/DFS", why: "Boundary DFS/BFS — reverse thinking." },
    { title: "Pacific Atlantic Water Flow", link: "https://leetcode.com/problems/pacific-atlantic-water-flow/", platform: "LeetCode", difficulty: "Medium", desc: "Find cells where water can flow to both oceans.", concepts: "BFS/DFS", why: "Reverse BFS from both oceans." },
],

"13-Graph-Algorithms/02-Topological-Sort": [
    { title: "Course Schedule II", link: "https://leetcode.com/problems/course-schedule-ii/", platform: "LeetCode", difficulty: "Medium", desc: "Return the ordering of courses (topological order).", concepts: "Topological Sort, BFS", why: "Kahn's algorithm (BFS-based topo sort)." },
    { title: "Alien Dictionary", link: "https://leetcode.com/problems/alien-dictionary/", platform: "LeetCode", difficulty: "Hard", desc: "Derive the order of letters in an alien language.", concepts: "Topological Sort", why: "Build DAG from word comparisons." },
    { title: "Parallel Courses", link: "https://leetcode.com/problems/parallel-courses/", platform: "LeetCode", difficulty: "Medium", desc: "Find minimum semesters to finish all courses.", concepts: "Topological Sort, BFS", why: "Longest path in DAG = topo sort with level counting." },
    { title: "Course Schedule IV", link: "https://leetcode.com/problems/course-schedule-iv/", platform: "LeetCode", difficulty: "Medium", desc: "Answer if course a is prerequisite of course b.", concepts: "Topological Sort, Floyd-Warshall", why: "Transitive closure of DAG." },
    { title: "Longest Path in DAG", link: "https://cses.fi/problemset/task/1680", platform: "CSES", difficulty: "Medium", desc: "Find the longest path in a DAG.", concepts: "Topological Sort, DP", why: "DP on topological order." },
],

"13-Graph-Algorithms/03-Shortest-Path-Dijkstra": [
    { title: "Network Delay Time", link: "https://leetcode.com/problems/network-delay-time/", platform: "LeetCode", difficulty: "Medium", desc: "Find the time for all nodes to receive a signal.", concepts: "Dijkstra", why: "Direct Dijkstra application." },
    { title: "Path with Maximum Probability", link: "https://leetcode.com/problems/path-with-maximum-probability/", platform: "LeetCode", difficulty: "Medium", desc: "Find the path with max probability between two nodes.", concepts: "Dijkstra Variant", why: "Modified Dijkstra — multiply instead of add." },
    { title: "Cheapest Flights Within K Stops", link: "https://leetcode.com/problems/cheapest-flights-within-k-stops/", platform: "LeetCode", difficulty: "Medium", desc: "Find cheapest price with at most k stops.", concepts: "Dijkstra, BFS, DP", why: "Modified Dijkstra with level constraint." },
    { title: "Shortest Path I", link: "https://cses.fi/problemset/task/1671", platform: "CSES", difficulty: "Medium", desc: "Find shortest paths from node 1 to all other nodes.", concepts: "Dijkstra", why: "Standard SSSP with Dijkstra." },
    { title: "Swim in Rising Water", link: "https://leetcode.com/problems/swim-in-rising-water/", platform: "LeetCode", difficulty: "Hard", desc: "Find minimum time to swim from top-left to bottom-right.", concepts: "Dijkstra, Binary Search", why: "Dijkstra on grid — minimizing maximum edge weight." },
],

"13-Graph-Algorithms/04-Bellman-Ford": [
    { title: "Cheapest Flights Within K Stops", link: "https://leetcode.com/problems/cheapest-flights-within-k-stops/", platform: "LeetCode", difficulty: "Medium", desc: "Find cheapest price with at most k stops.", concepts: "Bellman-Ford", why: "Run k iterations of Bellman-Ford." },
    { title: "Negative Cycle Detection", link: "https://cses.fi/problemset/task/1197", platform: "CSES", difficulty: "Medium", desc: "Detect and find a negative cycle in a graph.", concepts: "Bellman-Ford", why: "Standard negative cycle detection." },
    { title: "Shortest Path with Negative Weights", link: "https://cp-algorithms.com/graph/bellman_ford.html", platform: "CP-Algorithms", difficulty: "Medium", desc: "SSSP with negative edge weights.", concepts: "Bellman-Ford", why: "When Dijkstra can't handle negative weights." },
    { title: "High Score", link: "https://cses.fi/problemset/task/1202", platform: "CSES", difficulty: "Hard", desc: "Find longest path (or detect positive cycle on path to target).", concepts: "Bellman-Ford", why: "Detect if infinite score is possible via positive cycles." },
],

"13-Graph-Algorithms/05-Floyd-Warshall": [
    { title: "Shortest Paths II", link: "https://cses.fi/problemset/task/1672", platform: "CSES", difficulty: "Medium", desc: "Find shortest paths between all pairs of nodes.", concepts: "Floyd-Warshall", why: "All-pairs shortest path — O(n³)." },
    { title: "Find the City With the Smallest Number of Neighbors", link: "https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/", platform: "LeetCode", difficulty: "Medium", desc: "Find the city with fewest reachable cities within threshold.", concepts: "Floyd-Warshall", why: "All-pairs shortest path then count." },
    { title: "Course Schedule IV", link: "https://leetcode.com/problems/course-schedule-iv/", platform: "LeetCode", difficulty: "Medium", desc: "Answer prerequisite queries.", concepts: "Floyd-Warshall, Transitive Closure", why: "Transitive closure variant of Floyd-Warshall." },
    { title: "Shortest Path Visiting All Nodes", link: "https://leetcode.com/problems/shortest-path-visiting-all-nodes/", platform: "LeetCode", difficulty: "Hard", desc: "Find shortest path that visits all nodes.", concepts: "BFS, Bitmask", why: "BFS with bitmask state — TSP-like." },
],

"13-Graph-Algorithms/06-MST-Kruskal-Prim": [
    { title: "Min Cost to Connect All Points", link: "https://leetcode.com/problems/min-cost-to-connect-all-points/", platform: "LeetCode", difficulty: "Medium", desc: "Connect all points with minimum cost using Manhattan distance.", concepts: "MST, Prim's/Kruskal's", why: "Direct MST application." },
    { title: "Road Construction", link: "https://cses.fi/problemset/task/1676", platform: "CSES", difficulty: "Medium", desc: "Add edges and track components and largest component size.", concepts: "MST, DSU", why: "Kruskal's with DSU." },
    { title: "Connecting Cities With Minimum Cost", link: "https://leetcode.com/problems/connecting-cities-with-minimum-cost/", platform: "LeetCode", difficulty: "Medium", desc: "Find minimum cost to connect all cities.", concepts: "MST", why: "Standard MST problem." },
    { title: "Critical Connections in a Network", link: "https://leetcode.com/problems/critical-connections-in-a-network/", platform: "LeetCode", difficulty: "Hard", desc: "Find all bridges in the network.", concepts: "Bridges, Tarjan's", why: "Bridge finding using Tarjan's algorithm." },
    { title: "Minimum Spanning Tree", link: "https://cses.fi/problemset/task/1675", platform: "CSES", difficulty: "Medium", desc: "Find MST weight of a graph.", concepts: "MST, Kruskal", why: "Standard MST." },
],

"13-Graph-Algorithms/07-Strongly-Connected-Components": [
    { title: "Critical Connections in a Network", link: "https://leetcode.com/problems/critical-connections-in-a-network/", platform: "LeetCode", difficulty: "Hard", desc: "Find all bridges (critical connections).", concepts: "Tarjan's, SCC", why: "Tarjan's for bridges — related to SCC." },
    { title: "Kosaraju's Algorithm", link: "https://cses.fi/problemset/task/1682", platform: "CSES", difficulty: "Hard", desc: "Find all strongly connected components.", concepts: "SCC, Kosaraju", why: "Two-pass DFS — transpose graph approach." },
    { title: "Flight Routes Check", link: "https://cses.fi/problemset/task/1682", platform: "CSES", difficulty: "Hard", desc: "Check if you can travel between all city pairs.", concepts: "SCC", why: "Graph is strongly connected iff 1 SCC." },
    { title: "2-SAT", link: "https://cp-algorithms.com/graph/2SAT.html", platform: "CP-Algorithms", difficulty: "Hard", desc: "Solve a 2-SAT problem using SCC.", concepts: "SCC, 2-SAT", why: "SCC on implication graph." },
],

"13-Graph-Algorithms/08-Bridges-Articulation-Points": [
    { title: "Critical Connections in a Network", link: "https://leetcode.com/problems/critical-connections-in-a-network/", platform: "LeetCode", difficulty: "Hard", desc: "Find all bridges in an undirected graph.", concepts: "Bridges, Tarjan's", why: "Only LeetCode problem on bridges." },
    { title: "Articulation Points", link: "https://cp-algorithms.com/graph/cutpoints.html", platform: "CP-Algorithms", difficulty: "Hard", desc: "Find all articulation points (cut vertices).", concepts: "Articulation Points, DFS", why: "Modified DFS with low-link values." },
    { title: "Biconnected Components", link: "https://cp-algorithms.com/graph/bridge-searching.html", platform: "CP-Algorithms", difficulty: "Hard", desc: "Find all biconnected components.", concepts: "Bridges, Stack", why: "Extension of bridge finding." },
    { title: "Network Breakdown", link: "https://codeforces.com/problemset/problem/700/B", platform: "Codeforces", difficulty: "Hard", desc: "Detect critical edges in a network.", concepts: "Bridges", why: "Practical bridge application." },
],

"13-Graph-Algorithms/09-Graph-With-DP": [
    { title: "Longest Path in DAG", link: "https://cses.fi/problemset/task/1680", platform: "CSES", difficulty: "Medium", desc: "Find the longest path in a DAG.", concepts: "DP on DAG", why: "DP on topological order." },
    { title: "Number of Paths", link: "https://cses.fi/problemset/task/1202", platform: "CSES", difficulty: "Medium", desc: "Count shortest paths between two nodes.", concepts: "Dijkstra + DP", why: "Count paths during Dijkstra." },
    { title: "Shortest Path with Exactly K Edges", link: "https://cp-algorithms.com/graph/fixed_length_paths.html", platform: "CP-Algorithms", difficulty: "Hard", desc: "Find shortest path with exactly k edges.", concepts: "Matrix Exponentiation, DP", why: "Adjacency matrix exponentiation." },
    { title: "Minimum Cost to Reach Destination in Time", link: "https://leetcode.com/problems/minimum-cost-to-reach-destination-in-time/", platform: "LeetCode", difficulty: "Hard", desc: "Find min cost path with time constraint.", concepts: "Dijkstra, DP", why: "State: (node, time_remaining)." },
],

"13-Graph-Algorithms/10-Network-Flow": [
    { title: "Maximum Flow (Ford-Fulkerson)", link: "https://cp-algorithms.com/graph/edmonds_karp.html", platform: "CP-Algorithms", difficulty: "Hard", desc: "Find maximum flow using Edmonds-Karp (BFS-based Ford-Fulkerson).", concepts: "Network Flow", why: "Foundation of flow algorithms." },
    { title: "Download Speed", link: "https://cses.fi/problemset/task/1694", platform: "CSES", difficulty: "Hard", desc: "Find the maximum download speed (max flow).", concepts: "Max Flow", why: "Direct max flow application." },
    { title: "Maximum Bipartite Matching", link: "https://cp-algorithms.com/graph/kuhn_algorithm.html", platform: "CP-Algorithms", difficulty: "Hard", desc: "Find maximum matching in a bipartite graph.", concepts: "Hungarian/Kuhn's Algorithm", why: "Reduce to max flow or use augmenting paths." },
    { title: "Min Cut", link: "https://cp-algorithms.com/graph/edmonds_karp.html", platform: "CP-Algorithms", difficulty: "Hard", desc: "Find minimum cut (equals max flow by max-flow min-cut theorem).", concepts: "Max Flow Min Cut", why: "Max-flow min-cut duality." },
],

"13-Graph-Algorithms/11-Bipartite-Graph": [
    { title: "Is Graph Bipartite?", link: "https://leetcode.com/problems/is-graph-bipartite/", platform: "LeetCode", difficulty: "Medium", desc: "Determine if a graph is bipartite.", concepts: "BFS/DFS, Coloring", why: "Two-coloring test." },
    { title: "Possible Bipartition", link: "https://leetcode.com/problems/possible-bipartition/", platform: "LeetCode", difficulty: "Medium", desc: "Determine if people can be split into two groups with no dislikes within a group.", concepts: "Bipartite, BFS", why: "Bipartite check on dislike graph." },
    { title: "Building Teams", link: "https://cses.fi/problemset/task/1668", platform: "CSES", difficulty: "Medium", desc: "Divide students into two teams so no friends are on the same team.", concepts: "Bipartite", why: "Standard bipartite check." },
    { title: "Maximum Bipartite Matching", link: "https://cp-algorithms.com/graph/kuhn_algorithm.html", platform: "CP-Algorithms", difficulty: "Hard", desc: "Find maximum matching in bipartite graph.", concepts: "Hungarian Algorithm", why: "Foundation for assignment problems." },
],

"13-Graph-Algorithms/12-Euler-Path-Circuit": [
    { title: "Reconstruct Itinerary", link: "https://leetcode.com/problems/reconstruct-itinerary/", platform: "LeetCode", difficulty: "Hard", desc: "Reconstruct the itinerary using all tickets exactly once.", concepts: "Euler Path, DFS", why: "Hierholzer's algorithm for Eulerian path." },
    { title: "Valid Arrangement of Pairs", link: "https://leetcode.com/problems/valid-arrangement-of-pairs/", platform: "LeetCode", difficulty: "Hard", desc: "Find a valid arrangement where end[i] = start[i+1].", concepts: "Euler Path", why: "Euler path on directed graph." },
    { title: "Mail Delivery", link: "https://cses.fi/problemset/task/1691", platform: "CSES", difficulty: "Hard", desc: "Find an Euler circuit in a graph.", concepts: "Euler Circuit", why: "Standard Euler circuit implementation." },
    { title: "Teleporters Path", link: "https://cses.fi/problemset/task/1693", platform: "CSES", difficulty: "Hard", desc: "Find an Euler path from 1 to n.", concepts: "Euler Path", why: "Directed Euler path." },
],

"13-Graph-Algorithms/13-2-SAT": [
    { title: "2-SAT", link: "https://cp-algorithms.com/graph/2SAT.html", platform: "CP-Algorithms", difficulty: "Hard", desc: "Solve a 2-SAT boolean satisfiability problem using SCC.", concepts: "2-SAT, SCC", why: "Build implication graph → find SCCs → check satisfiability." },
    { title: "Strongly Connected Components", link: "https://cses.fi/problemset/task/1682", platform: "CSES", difficulty: "Hard", desc: "Find SCCs — prerequisite for 2-SAT.", concepts: "SCC", why: "SCC is the building block for 2-SAT." },
    { title: "Clause Satisfiability", link: "https://codeforces.com/problemset/problem/228/E", platform: "Codeforces", difficulty: "Hard", desc: "Determine satisfiability of 2-CNF formula.", concepts: "2-SAT", why: "Direct 2-SAT application." },
],

"13-Graph-Algorithms/14-Graph-Centroid-Decomposition": [
    { title: "Centroid Decomposition", link: "https://cp-algorithms.com/graph/centroid-decomposition.html", platform: "CP-Algorithms", difficulty: "Hard", desc: "Decompose tree by repeatedly finding and removing centroids.", concepts: "Centroid Decomposition", why: "Reduces tree path queries to O(n log n)." },
    { title: "Xenia and Tree", link: "https://codeforces.com/problemset/problem/342/E", platform: "Codeforces", difficulty: "Hard", desc: "Paint nodes and query closest painted node.", concepts: "Centroid Decomposition", why: "Online queries with centroid decomposition." },
    { title: "Race (IOI 2011)", link: "https://oj.uz/problem/view/IOI11_race", platform: "OI", difficulty: "Hard", desc: "Find minimum edges path with exact length k.", concepts: "Centroid Decomposition", why: "Classic CD problem from IOI." },
],

// ──────────────────────────────────────────────────────────────────────────
// 14 — DISJOINT SET UNION
// ──────────────────────────────────────────────────────────────────────────
"14-Disjoint-Set-Union/01-Union-Find": [
    { title: "Number of Provinces", link: "https://leetcode.com/problems/number-of-provinces/", platform: "LeetCode", difficulty: "Medium", desc: "Find the number of connected components.", concepts: "Union Find", why: "Basic DSU — count components." },
    { title: "Redundant Connection", link: "https://leetcode.com/problems/redundant-connection/", platform: "LeetCode", difficulty: "Medium", desc: "Find the edge that makes the graph cyclic.", concepts: "Union Find", why: "DSU for cycle detection." },
    { title: "Accounts Merge", link: "https://leetcode.com/problems/accounts-merge/", platform: "LeetCode", difficulty: "Medium", desc: "Merge accounts that belong to the same person.", concepts: "Union Find, HashMap", why: "DSU with string mapping." },
    { title: "Satisfiability of Equality Equations", link: "https://leetcode.com/problems/satisfiability-of-equality-equations/", platform: "LeetCode", difficulty: "Medium", desc: "Determine if a set of equations like a==b, a!=c is satisfiable.", concepts: "Union Find", why: "Union equals, then check not-equals." },
    { title: "Road Construction", link: "https://cses.fi/problemset/task/1676", platform: "CSES", difficulty: "Medium", desc: "Process edges and track components.", concepts: "Union Find", why: "Dynamic connectivity with DSU." },
],

"14-Disjoint-Set-Union/02-Path-Compression": [
    { title: "Longest Consecutive Sequence", link: "https://leetcode.com/problems/longest-consecutive-sequence/", platform: "LeetCode", difficulty: "Medium", desc: "Find longest consecutive sequence using DSU.", concepts: "DSU, Path Compression", why: "DSU approach — union consecutive numbers." },
    { title: "Number of Islands II", link: "https://leetcode.com/problems/number-of-islands-ii/", platform: "LeetCode", difficulty: "Hard", desc: "Count islands after each land addition.", concepts: "DSU, Path Compression", why: "Online DSU with grid coordinates." },
    { title: "Graph Connectivity", link: "https://cp-algorithms.com/data_structures/disjoint_set_union.html", platform: "CP-Algorithms", difficulty: "Medium", desc: "Efficient DSU with path compression and union by rank.", concepts: "DSU Optimization", why: "Understand inverse Ackermann amortized complexity." },
    { title: "Friends", link: "https://cses.fi/problemset/task/1668", platform: "CSES", difficulty: "Medium", desc: "Process friendship and check if two people are friends.", concepts: "DSU", why: "Standard DSU connectivity queries." },
],

"14-Disjoint-Set-Union/03-DSU-Problems": [
    { title: "Making a Large Island", link: "https://leetcode.com/problems/making-a-large-island/", platform: "LeetCode", difficulty: "Hard", desc: "Flip at most one 0 to 1 to get the largest island.", concepts: "DSU, Grid", why: "DSU with component size tracking." },
    { title: "Most Stones Removed with Same Row or Column", link: "https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/", platform: "LeetCode", difficulty: "Medium", desc: "Remove stones that share a row or column.", concepts: "DSU", why: "Count components — removed = total - components." },
    { title: "Swim in Rising Water", link: "https://leetcode.com/problems/swim-in-rising-water/", platform: "LeetCode", difficulty: "Hard", desc: "Find min time to swim from top-left to bottom-right.", concepts: "DSU, Binary Search", why: "Sort cells by elevation, union adjacent, check connectivity." },
    { title: "Regions Cut by Slashes", link: "https://leetcode.com/problems/regions-cut-by-slashes/", platform: "LeetCode", difficulty: "Medium", desc: "Count regions formed by slashes in a grid.", concepts: "DSU", why: "Upscale grid 3x and union or use triangle DSU." },
],

"14-Disjoint-Set-Union/04-Union-By-Rank": [
    { title: "DSU with Rank Optimization", link: "https://cp-algorithms.com/data_structures/disjoint_set_union.html", platform: "CP-Algorithms", difficulty: "Medium", desc: "Implement union by rank for balanced trees.", concepts: "DSU, Union by Rank", why: "Ensures O(log n) tree height." },
    { title: "Number of Provinces", link: "https://leetcode.com/problems/number-of-provinces/", platform: "LeetCode", difficulty: "Medium", desc: "Count connected components with rank-optimized DSU.", concepts: "DSU", why: "Practice union-by-rank implementation." },
    { title: "Earliest Moment When Everyone Become Friends", link: "https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends/", platform: "LeetCode", difficulty: "Medium", desc: "Find earliest time all people become friends.", concepts: "DSU, Sorting", why: "Sort by time, union, check single component." },
    { title: "Min Cost to Connect All Points", link: "https://leetcode.com/problems/min-cost-to-connect-all-points/", platform: "LeetCode", difficulty: "Medium", desc: "Kruskal's MST using DSU with rank.", concepts: "DSU, MST", why: "DSU in Kruskal's algorithm." },
],

"14-Disjoint-Set-Union/05-Weighted-DSU": [
    { title: "Evaluate Division", link: "https://leetcode.com/problems/evaluate-division/", platform: "LeetCode", difficulty: "Medium", desc: "Evaluate division queries a/b given equations.", concepts: "Weighted DSU, Graph", why: "DSU with edge weights for ratios." },
    { title: "Potential Weighted DSU", link: "https://cp-algorithms.com/data_structures/disjoint_set_union.html#toc-tgt-11", platform: "CP-Algorithms", difficulty: "Hard", desc: "DSU maintaining potential differences between elements.", concepts: "Weighted DSU", why: "Track relative offsets between elements." },
    { title: "Rank Transform of a Matrix", link: "https://leetcode.com/problems/rank-transform-of-a-matrix/", platform: "LeetCode", difficulty: "Hard", desc: "Assign ranks to matrix elements respecting row/column constraints.", concepts: "Weighted DSU, Topo Sort", why: "Complex DSU application with constraint satisfaction." },
],

"14-Disjoint-Set-Union/06-Offline-Queries-DSU": [
    { title: "Process Queries Offline with DSU", link: "https://cp-algorithms.com/data_structures/disjoint_set_union.html#toc-tgt-14", platform: "CP-Algorithms", difficulty: "Hard", desc: "Answer connectivity queries offline using DSU.", concepts: "Offline DSU", why: "Process edges in sorted order for offline answers." },
    { title: "Swim in Rising Water", link: "https://leetcode.com/problems/swim-in-rising-water/", platform: "LeetCode", difficulty: "Hard", desc: "Offline: sort cells by elevation, union, check connectivity.", concepts: "Offline DSU", why: "Offline approach using sorted elevations." },
    { title: "DSU with Rollback", link: "https://cp-algorithms.com/data_structures/disjoint_set_union.html#toc-tgt-13", platform: "CP-Algorithms", difficulty: "Hard", desc: "DSU supporting undo operations for divide-and-conquer.", concepts: "DSU Rollback", why: "Stack-based rollback for D&C on queries." },
],

// ──────────────────────────────────────────────────────────────────────────
// 15 — DYNAMIC PROGRAMMING
// ──────────────────────────────────────────────────────────────────────────
"15-Dynamic-Programming/01-1D-DP": [
    { title: "Climbing Stairs", link: "https://leetcode.com/problems/climbing-stairs/", platform: "LeetCode", difficulty: "Easy", desc: "Count distinct ways to climb n stairs.", concepts: "1D DP", why: "THE intro DP problem." },
    { title: "House Robber", link: "https://leetcode.com/problems/house-robber/", platform: "LeetCode", difficulty: "Medium", desc: "Maximum money robbing non-adjacent houses.", concepts: "1D DP", why: "Include/exclude DP pattern." },
    { title: "House Robber II", link: "https://leetcode.com/problems/house-robber-ii/", platform: "LeetCode", difficulty: "Medium", desc: "Houses in a circle — rob non-adjacent.", concepts: "1D DP, Circular", why: "Run twice: exclude first or exclude last." },
    { title: "Decode Ways", link: "https://leetcode.com/problems/decode-ways/", platform: "LeetCode", difficulty: "Medium", desc: "Count ways to decode a digit string.", concepts: "1D DP", why: "Fibonacci-like with conditions." },
    { title: "Coin Change", link: "https://leetcode.com/problems/coin-change/", platform: "LeetCode", difficulty: "Medium", desc: "Find minimum coins to make amount.", concepts: "1D DP", why: "Unbounded knapsack variant." },
    { title: "Jump Game II", link: "https://leetcode.com/problems/jump-game-ii/", platform: "LeetCode", difficulty: "Medium", desc: "Minimum jumps to reach the end.", concepts: "1D DP, Greedy", why: "DP or greedy approach." },
],

"15-Dynamic-Programming/02-2D-DP": [
    { title: "Unique Paths", link: "https://leetcode.com/problems/unique-paths/", platform: "LeetCode", difficulty: "Medium", desc: "Count paths from top-left to bottom-right.", concepts: "2D DP", why: "Foundation of grid DP." },
    { title: "Minimum Path Sum", link: "https://leetcode.com/problems/minimum-path-sum/", platform: "LeetCode", difficulty: "Medium", desc: "Find minimum sum path in a grid.", concepts: "2D DP", why: "Grid DP with optimization." },
    { title: "Maximal Square", link: "https://leetcode.com/problems/maximal-square/", platform: "LeetCode", difficulty: "Medium", desc: "Find the largest square containing only 1s.", concepts: "2D DP", why: "dp[i][j] = min of three neighbors + 1." },
    { title: "Interleaving String", link: "https://leetcode.com/problems/interleaving-string/", platform: "LeetCode", difficulty: "Medium", desc: "Check if s3 is interleaving of s1 and s2.", concepts: "2D DP", why: "Two-string DP with interleaving condition." },
    { title: "Dungeon Game", link: "https://leetcode.com/problems/dungeon-game/", platform: "LeetCode", difficulty: "Hard", desc: "Find min initial health to reach bottom-right.", concepts: "2D DP", why: "Reverse DP — solve from bottom-right." },
],

"15-Dynamic-Programming/03-DP-On-Strings": [
    { title: "Longest Common Subsequence", link: "https://leetcode.com/problems/longest-common-subsequence/", platform: "LeetCode", difficulty: "Medium", desc: "Find length of LCS of two strings.", concepts: "String DP", why: "THE string DP problem." },
    { title: "Edit Distance", link: "https://leetcode.com/problems/edit-distance/", platform: "LeetCode", difficulty: "Medium", desc: "Find minimum operations to convert word1 to word2.", concepts: "String DP", why: "Classic — insert, delete, replace." },
    { title: "Longest Palindromic Subsequence", link: "https://leetcode.com/problems/longest-palindromic-subsequence/", platform: "LeetCode", difficulty: "Medium", desc: "Find the longest palindromic subsequence.", concepts: "String DP", why: "LCS(s, reverse(s))." },
    { title: "Wildcard Matching", link: "https://leetcode.com/problems/wildcard-matching/", platform: "LeetCode", difficulty: "Hard", desc: "Implement wildcard pattern matching with ? and *.", concepts: "String DP", why: "2D DP on pattern and text." },
    { title: "Regular Expression Matching", link: "https://leetcode.com/problems/regular-expression-matching/", platform: "LeetCode", difficulty: "Hard", desc: "Implement regex matching with . and *.", concepts: "String DP", why: "Harder variant of wildcard matching." },
    { title: "Distinct Subsequences", link: "https://leetcode.com/problems/distinct-subsequences/", platform: "LeetCode", difficulty: "Hard", desc: "Count distinct subsequences of s that equal t.", concepts: "String DP", why: "Counting DP on two strings." },
],

"15-Dynamic-Programming/04-DP-On-Subsequences": [
    { title: "Longest Increasing Subsequence", link: "https://leetcode.com/problems/longest-increasing-subsequence/", platform: "LeetCode", difficulty: "Medium", desc: "Find length of LIS.", concepts: "DP, Binary Search", why: "O(n log n) with patience sorting." },
    { title: "Number of Longest Increasing Subsequence", link: "https://leetcode.com/problems/number-of-longest-increasing-subsequence/", platform: "LeetCode", difficulty: "Medium", desc: "Count the number of LIS.", concepts: "DP", why: "Track both length and count." },
    { title: "Russian Doll Envelopes", link: "https://leetcode.com/problems/russian-doll-envelopes/", platform: "LeetCode", difficulty: "Hard", desc: "Maximum number of envelopes that can be nested.", concepts: "LIS, Sorting", why: "Sort + LIS — 2D envelope problem." },
    { title: "Maximum Length of Pair Chain", link: "https://leetcode.com/problems/maximum-length-of-pair-chain/", platform: "LeetCode", difficulty: "Medium", desc: "Find longest chain of pairs (a,b) where a < previous b.", concepts: "DP, Greedy", why: "LIS variant or greedy solution." },
    { title: "Increasing Subsequences", link: "https://leetcode.com/problems/non-decreasing-subsequences/", platform: "LeetCode", difficulty: "Medium", desc: "Find all non-decreasing subsequences of length >= 2.", concepts: "Backtracking", why: "Generate all valid subsequences." },
],

"15-Dynamic-Programming/05-DP-On-Grids": [
    { title: "Unique Paths II", link: "https://leetcode.com/problems/unique-paths-ii/", platform: "LeetCode", difficulty: "Medium", desc: "Count paths with obstacles.", concepts: "Grid DP", why: "Grid DP with blocked cells." },
    { title: "Minimum Path Sum", link: "https://leetcode.com/problems/minimum-path-sum/", platform: "LeetCode", difficulty: "Medium", desc: "Find minimum sum path in a grid.", concepts: "Grid DP", why: "Standard grid DP." },
    { title: "Cherry Pickup", link: "https://leetcode.com/problems/cherry-pickup/", platform: "LeetCode", difficulty: "Hard", desc: "Collect maximum cherries going and returning.", concepts: "Grid DP, 3D DP", why: "Two simultaneous agents — 3D DP." },
    { title: "Cherry Pickup II", link: "https://leetcode.com/problems/cherry-pickup-ii/", platform: "LeetCode", difficulty: "Hard", desc: "Two robots collect maximum cherries moving downward.", concepts: "Grid DP, 3D DP", why: "Two-agent grid DP." },
    { title: "Maximal Rectangle", link: "https://leetcode.com/problems/maximal-rectangle/", platform: "LeetCode", difficulty: "Hard", desc: "Find largest rectangle of 1s in binary matrix.", concepts: "Grid DP, Stack", why: "Histogram approach row by row." },
],

"15-Dynamic-Programming/06-Knapsack-Variants": [
    { title: "0/1 Knapsack", link: "https://practice.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1", platform: "GFG", difficulty: "Medium", desc: "Maximize value with weight constraint.", concepts: "0/1 Knapsack", why: "THE classic DP problem." },
    { title: "Partition Equal Subset Sum", link: "https://leetcode.com/problems/partition-equal-subset-sum/", platform: "LeetCode", difficulty: "Medium", desc: "Can array be partitioned into two equal-sum subsets?", concepts: "0/1 Knapsack", why: "Subset sum = target/2." },
    { title: "Target Sum", link: "https://leetcode.com/problems/target-sum/", platform: "LeetCode", difficulty: "Medium", desc: "Count ways to assign +/- to reach target sum.", concepts: "Knapsack, Subset Sum", why: "Transform to subset sum problem." },
    { title: "Coin Change 2", link: "https://leetcode.com/problems/coin-change-ii/", platform: "LeetCode", difficulty: "Medium", desc: "Count combinations to make amount.", concepts: "Unbounded Knapsack", why: "Unbounded knapsack — order doesn't matter." },
    { title: "Last Stone Weight II", link: "https://leetcode.com/problems/last-stone-weight-ii/", platform: "LeetCode", difficulty: "Medium", desc: "Minimize the weight of the last stone.", concepts: "Knapsack", why: "Reduce to minimize |S1 - S2| = knapsack." },
    { title: "Ones and Zeroes", link: "https://leetcode.com/problems/ones-and-zeroes/", platform: "LeetCode", difficulty: "Medium", desc: "Maximum strings you can form with m zeros and n ones.", concepts: "2D Knapsack", why: "Knapsack with two constraints." },
],

"15-Dynamic-Programming/07-DP-With-Bitmask": [
    { title: "Travelling Salesman Problem", link: "https://cses.fi/problemset/task/1690", platform: "CSES", difficulty: "Hard", desc: "Find the minimum cost Hamiltonian circuit.", concepts: "Bitmask DP, TSP", why: "THE bitmask DP problem." },
    { title: "Partition to K Equal Sum Subsets", link: "https://leetcode.com/problems/partition-to-k-equal-sum-subsets/", platform: "LeetCode", difficulty: "Medium", desc: "Partition array into k equal-sum subsets.", concepts: "Bitmask DP, Backtracking", why: "Bitmask DP for subset assignment." },
    { title: "Shortest Superstring", link: "https://leetcode.com/problems/find-the-shortest-superstring/", platform: "LeetCode", difficulty: "Hard", desc: "Find shortest string containing all given strings.", concepts: "Bitmask DP, TSP", why: "TSP variant with string overlaps." },
    { title: "Maximum Students Taking Exam", link: "https://leetcode.com/problems/maximum-students-taking-exam/", platform: "LeetCode", difficulty: "Hard", desc: "Maximize students with no cheating possible.", concepts: "Bitmask DP, Profile", why: "Profile DP — bitmask per row." },
    { title: "Hamiltonian Flights", link: "https://cses.fi/problemset/task/1690", platform: "CSES", difficulty: "Hard", desc: "Count Hamiltonian paths from 1 to n.", concepts: "Bitmask DP", why: "Count-version of TSP." },
],

"15-Dynamic-Programming/08-Digit-DP": [
    { title: "Count Numbers with Unique Digits", link: "https://leetcode.com/problems/count-numbers-with-unique-digits/", platform: "LeetCode", difficulty: "Medium", desc: "Count numbers with unique digits in range [0, 10^n).", concepts: "Digit DP, Combinatorics", why: "Entry point for digit DP." },
    { title: "Numbers At Most N Given Digit Set", link: "https://leetcode.com/problems/numbers-at-most-n-given-digit-set/", platform: "LeetCode", difficulty: "Hard", desc: "Count positive integers ≤ n made from given digits.", concepts: "Digit DP", why: "Classic digit DP with restricted digit set." },
    { title: "Count of Integers", link: "https://leetcode.com/problems/count-of-integers/", platform: "LeetCode", difficulty: "Hard", desc: "Count integers in range with digit sum between min_sum and max_sum.", concepts: "Digit DP", why: "Digit DP with digit sum constraint." },
    { title: "Non-negative Integers without Consecutive Ones", link: "https://leetcode.com/problems/non-negative-integers-without-consecutive-ones/", platform: "LeetCode", difficulty: "Hard", desc: "Count non-negative integers ≤ n without consecutive 1s in binary.", concepts: "Digit DP, Binary", why: "Digit DP on binary representation." },
    { title: "Counting Digits", link: "https://cses.fi/problemset/task/2220", platform: "CSES", difficulty: "Medium", desc: "Count occurrences of each digit 0..9 in range 1..n.", concepts: "Digit DP", why: "Standard digit counting problem." },
],

"15-Dynamic-Programming/09-DP-On-Trees": [
    { title: "Diameter of Binary Tree", link: "https://leetcode.com/problems/diameter-of-binary-tree/", platform: "LeetCode", difficulty: "Easy", desc: "Find the diameter of a binary tree.", concepts: "Tree DP", why: "Simplest tree DP." },
    { title: "Binary Tree Maximum Path Sum", link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/", platform: "LeetCode", difficulty: "Hard", desc: "Find the maximum path sum.", concepts: "Tree DP", why: "At each node: max single path vs. through path." },
    { title: "House Robber III", link: "https://leetcode.com/problems/house-robber-iii/", platform: "LeetCode", difficulty: "Medium", desc: "Rob houses arranged in a binary tree.", concepts: "Tree DP", why: "Include/exclude on tree." },
    { title: "Tree Distances I", link: "https://cses.fi/problemset/task/1132", platform: "CSES", difficulty: "Hard", desc: "Maximum distance from each node.", concepts: "Tree DP, Rerooting", why: "Rerooting technique." },
    { title: "Tree Matching", link: "https://cses.fi/problemset/task/1130", platform: "CSES", difficulty: "Hard", desc: "Find maximum matching in a tree.", concepts: "Tree DP", why: "DP: match edge or not at each node." },
],

"15-Dynamic-Programming/10-Interval-DP": [
    { title: "Burst Balloons", link: "https://leetcode.com/problems/burst-balloons/", platform: "LeetCode", difficulty: "Hard", desc: "Maximize coins by bursting balloons.", concepts: "Interval DP", why: "THE interval DP problem — think of last balloon burst." },
    { title: "Minimum Cost Tree From Leaf Values", link: "https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/", platform: "LeetCode", difficulty: "Medium", desc: "Build a tree to minimize sum of non-leaf nodes.", concepts: "Interval DP, Stack", why: "Interval DP or greedy stack approach." },
    { title: "Strange Printer", link: "https://leetcode.com/problems/strange-printer/", platform: "LeetCode", difficulty: "Hard", desc: "Minimum turns to print a string.", concepts: "Interval DP", why: "dp[i][j] = min turns for substring i..j." },
    { title: "Palindrome Partitioning II", link: "https://leetcode.com/problems/palindrome-partitioning-ii/", platform: "LeetCode", difficulty: "Hard", desc: "Minimum cuts for palindrome partitioning.", concepts: "Interval DP", why: "DP with precomputed palindrome table." },
    { title: "Minimum Score Triangulation of Polygon", link: "https://leetcode.com/problems/minimum-score-triangulation-of-polygon/", platform: "LeetCode", difficulty: "Medium", desc: "Minimize total score of triangulation.", concepts: "Interval DP", why: "Similar to MCM — choose the triangle to form." },
],

"15-Dynamic-Programming/11-LIS-Variants": [
    { title: "Longest Increasing Subsequence", link: "https://leetcode.com/problems/longest-increasing-subsequence/", platform: "LeetCode", difficulty: "Medium", desc: "Find length of LIS.", concepts: "LIS", why: "O(n log n) with binary search." },
    { title: "Russian Doll Envelopes", link: "https://leetcode.com/problems/russian-doll-envelopes/", platform: "LeetCode", difficulty: "Hard", desc: "Maximum nesting envelopes.", concepts: "LIS", why: "Sort + LIS on second dimension." },
    { title: "Longest String Chain", link: "https://leetcode.com/problems/longest-string-chain/", platform: "LeetCode", difficulty: "Medium", desc: "Find longest word chain.", concepts: "LIS, HashMap DP", why: "LIS on words with predecessor relation." },
    { title: "Maximum Length of Pair Chain", link: "https://leetcode.com/problems/maximum-length-of-pair-chain/", platform: "LeetCode", difficulty: "Medium", desc: "Longest chain of pairs.", concepts: "LIS, Greedy", why: "LIS variant on intervals." },
    { title: "Delete and Earn", link: "https://leetcode.com/problems/delete-and-earn/", platform: "LeetCode", difficulty: "Medium", desc: "Delete elements to maximize earnings.", concepts: "DP", why: "House Robber on value frequency." },
],

"15-Dynamic-Programming/12-Matrix-Chain-Multiplication": [
    { title: "Burst Balloons", link: "https://leetcode.com/problems/burst-balloons/", platform: "LeetCode", difficulty: "Hard", desc: "Maximize coins by bursting balloons.", concepts: "MCM, Interval DP", why: "THE MCM pattern problem." },
    { title: "Minimum Cost to Merge Stones", link: "https://leetcode.com/problems/minimum-cost-to-merge-stones/", platform: "LeetCode", difficulty: "Hard", desc: "Merge k consecutive piles at minimum cost.", concepts: "MCM, Interval DP", why: "Generalized MCM with k-merge constraint." },
    { title: "Optimal BST", link: "https://practice.geeksforgeeks.org/problems/optimal-binary-search-tree2214/1", platform: "GFG", difficulty: "Hard", desc: "Find minimum cost BST for given search frequencies.", concepts: "MCM", why: "Knuth's optimization on MCM." },
    { title: "Boolean Parenthesization", link: "https://practice.geeksforgeeks.org/problems/boolean-parenthesization5610/1", platform: "GFG", difficulty: "Hard", desc: "Count ways to parenthesize boolean expression to evaluate to true.", concepts: "MCM", why: "MCM with boolean operations." },
],

"15-Dynamic-Programming/13-Monotone-Queue-DP": [
    { title: "Sliding Window Maximum", link: "https://leetcode.com/problems/sliding-window-maximum/", platform: "LeetCode", difficulty: "Hard", desc: "Max of each sliding window.", concepts: "Monotone Queue", why: "Foundation of monotone queue technique." },
    { title: "Shortest Subarray with Sum at Least K", link: "https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/", platform: "LeetCode", difficulty: "Hard", desc: "Shortest subarray with sum >= k.", concepts: "Monotone Queue, Prefix Sum", why: "Monotone queue on prefix sums." },
    { title: "Jump Game VI", link: "https://leetcode.com/problems/jump-game-vi/", platform: "LeetCode", difficulty: "Medium", desc: "Maximum score jumping at most k steps.", concepts: "DP, Monotone Queue", why: "DP with sliding window max optimization." },
    { title: "Constrained Subsequence Sum", link: "https://leetcode.com/problems/constrained-subsequence-sum/", platform: "LeetCode", difficulty: "Hard", desc: "Max sum subsequence with index gap ≤ k.", concepts: "DP, Monotone Queue", why: "Kadane's with window constraint + monotone queue." },
    { title: "Max Value of Equation", link: "https://leetcode.com/problems/max-value-of-equation/", platform: "LeetCode", difficulty: "Hard", desc: "Find max yi + yj + |xi - xj| where |xi - xj| <= k.", concepts: "Monotone Queue", why: "Transform equation + monotone queue." },
],

"15-Dynamic-Programming/14-Convex-Hull-Trick": [
    { title: "Convex Hull Trick", link: "https://cp-algorithms.com/geometry/convex_hull_trick.html", platform: "CP-Algorithms", difficulty: "Hard", desc: "Optimize DP transitions of form dp[i] = min(dp[j] + b[j]*a[i]).", concepts: "Convex Hull Trick", why: "Optimizes certain DP recurrences from O(n²) to O(n log n)." },
    { title: "Frog Jump II", link: "https://atcoder.jp/contests/dp/tasks/dp_z", platform: "AtCoder", difficulty: "Hard", desc: "Minimize cost to jump with quadratic penalty.", concepts: "Convex Hull Trick", why: "Classic CHT application." },
    { title: "Li Chao Tree", link: "https://cp-algorithms.com/geometry/convex_hull_trick.html#li-chao-tree", platform: "CP-Algorithms", difficulty: "Hard", desc: "Segment tree for line queries — alternative to CHT.", concepts: "Li Chao Tree", why: "More flexible than classic CHT." },
    { title: "APIO Commando", link: "https://oj.uz/problem/view/APIO10_commando", platform: "OI", difficulty: "Hard", desc: "Partition soldiers into groups to maximize total power.", concepts: "Convex Hull Trick, DP", why: "DP with CHT optimization." },
],

"15-Dynamic-Programming/15-SOS-DP": [
    { title: "Sum over Subsets (SOS) DP", link: "https://codeforces.com/blog/entry/45223", platform: "Codeforces", difficulty: "Hard", desc: "For each mask, compute sum of f(submask) over all submasks.", concepts: "SOS DP, Bitmask", why: "Optimizes O(3^n) to O(n * 2^n)." },
    { title: "Compatible Numbers", link: "https://codeforces.com/problemset/problem/165/E", platform: "Codeforces", difficulty: "Hard", desc: "Find compatible numbers using SOS DP.", concepts: "SOS DP", why: "Direct SOS DP application." },
    { title: "AND Convolution", link: "https://judge.yosupo.jp/problem/bitwise_and_convolution", platform: "Library Checker", difficulty: "Hard", desc: "Compute AND convolution of two arrays.", concepts: "SOS DP, Zeta/Mobius", why: "Foundation for bitwise convolutions." },
    { title: "Counting Bits", link: "https://codeforces.com/problemset/problem/449/D", platform: "Codeforces", difficulty: "Hard", desc: "Count subsets with AND equal to zero.", concepts: "SOS DP", why: "Inclusion-exclusion via SOS." },
],

"15-Dynamic-Programming/16-Broken-Profile-DP": [
    { title: "Domino and Tromino Tiling", link: "https://leetcode.com/problems/domino-and-tromino-tiling/", platform: "LeetCode", difficulty: "Medium", desc: "Count ways to tile a 2×n board with dominoes and trominoes.", concepts: "Profile DP", why: "Introduction to broken profile concept." },
    { title: "Mondriaan's Dream", link: "https://www.spoj.com/problems/MNTILE/", platform: "SPOJ", difficulty: "Hard", desc: "Count ways to tile an m×n rectangle with 1×2 dominoes.", concepts: "Profile DP, Bitmask", why: "Classic broken profile DP problem." },
    { title: "Tiling", link: "https://cses.fi/problemset/task/2181", platform: "CSES", difficulty: "Hard", desc: "Count ways to fill an n×m grid with 1×2 tiles.", concepts: "Profile DP", why: "CSES version of domino tiling." },
    { title: "Maximum Students Taking Exam", link: "https://leetcode.com/problems/maximum-students-taking-exam/", platform: "LeetCode", difficulty: "Hard", desc: "Maximize seated students with cheating constraints.", concepts: "Profile DP", why: "Row-by-row bitmask DP." },
],

"15-Dynamic-Programming/17-Probability-DP": [
    { title: "Knight Probability in Chessboard", link: "https://leetcode.com/problems/knight-probability-in-chessboard/", platform: "LeetCode", difficulty: "Medium", desc: "Probability knight stays on board after k moves.", concepts: "Probability DP", why: "2D probability DP." },
    { title: "Soup Servings", link: "https://leetcode.com/problems/soup-servings/", platform: "LeetCode", difficulty: "Medium", desc: "Probability soup A empties first.", concepts: "Probability DP", why: "DP with convergence optimization." },
    { title: "New 21 Game", link: "https://leetcode.com/problems/new-21-game/", platform: "LeetCode", difficulty: "Medium", desc: "Probability of scoring ≤ n.", concepts: "Probability DP, Sliding Window", why: "Sliding window probability DP." },
    { title: "Dice Probability", link: "https://cses.fi/problemset/task/1725", platform: "CSES", difficulty: "Medium", desc: "Probability of dice sum in range.", concepts: "Probability DP", why: "Fundamental probability DP." },
    { title: "Airplane Seat Assignment", link: "https://leetcode.com/problems/airplane-seat-assignment-probability/", platform: "LeetCode", difficulty: "Medium", desc: "Probability last person gets their own seat.", concepts: "Probability, Math", why: "Beautiful mathematical insight: always 1/2 for n>1." },
],

// ──────────────────────────────────────────────────────────────────────────
// 16 — TRIE
// ──────────────────────────────────────────────────────────────────────────
"16-Trie/01-Standard-Trie": [
    { title: "Implement Trie (Prefix Tree)", link: "https://leetcode.com/problems/implement-trie-prefix-tree/", platform: "LeetCode", difficulty: "Medium", desc: "Implement a trie with insert, search, and startsWith.", concepts: "Trie", why: "THE trie implementation problem." },
    { title: "Design Add and Search Words", link: "https://leetcode.com/problems/design-add-and-search-words-data-structure/", platform: "LeetCode", difficulty: "Medium", desc: "Design a trie that supports '.' wildcard search.", concepts: "Trie, DFS", why: "Trie + backtracking for wildcard." },
    { title: "Word Search II", link: "https://leetcode.com/problems/word-search-ii/", platform: "LeetCode", difficulty: "Hard", desc: "Find all words from dictionary in a board.", concepts: "Trie, Backtracking", why: "Trie optimization for multi-word search." },
    { title: "Map Sum Pairs", link: "https://leetcode.com/problems/map-sum-pairs/", platform: "LeetCode", difficulty: "Medium", desc: "Sum of values whose key starts with a given prefix.", concepts: "Trie", why: "Trie with value aggregation." },
    { title: "Replace Words", link: "https://leetcode.com/problems/replace-words/", platform: "LeetCode", difficulty: "Medium", desc: "Replace successors in sentence with shortest root word.", concepts: "Trie", why: "Trie prefix search application." },
],

"16-Trie/02-XOR-Trie": [
    { title: "Maximum XOR of Two Numbers", link: "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/", platform: "LeetCode", difficulty: "Medium", desc: "Find maximum XOR of any two numbers.", concepts: "XOR Trie", why: "Binary trie for greedy XOR maximization." },
    { title: "Maximum XOR With an Element From Array", link: "https://leetcode.com/problems/maximum-xor-with-an-element-from-array/", platform: "LeetCode", difficulty: "Hard", desc: "Answer XOR queries with value constraint.", concepts: "XOR Trie, Offline", why: "Offline sorting + XOR trie." },
    { title: "Count Pairs With XOR in a Range", link: "https://leetcode.com/problems/count-pairs-with-xor-in-a-range/", platform: "LeetCode", difficulty: "Hard", desc: "Count pairs with XOR in [low, high].", concepts: "XOR Trie", why: "Persistent-like trie for range XOR queries." },
    { title: "Maximum Genetic Difference Query", link: "https://leetcode.com/problems/maximum-genetic-difference-query/", platform: "LeetCode", difficulty: "Hard", desc: "Max XOR with any ancestor in a tree.", concepts: "XOR Trie, DFS", why: "Online XOR trie on tree DFS." },
],

"16-Trie/03-Trie-Problems": [
    { title: "Longest Word in Dictionary", link: "https://leetcode.com/problems/longest-word-in-dictionary/", platform: "LeetCode", difficulty: "Medium", desc: "Find the longest word where all prefixes exist.", concepts: "Trie, BFS/DFS", why: "Trie with prefix completeness check." },
    { title: "Stream of Characters", link: "https://leetcode.com/problems/stream-of-characters/", platform: "LeetCode", difficulty: "Hard", desc: "Check if suffix of queried chars matches any word.", concepts: "Trie", why: "Reverse trie for suffix matching." },
    { title: "Palindrome Pairs", link: "https://leetcode.com/problems/palindrome-pairs/", platform: "LeetCode", difficulty: "Hard", desc: "Find all pairs forming palindromes.", concepts: "Trie, String", why: "Reverse trie with palindrome checks." },
    { title: "Search Suggestions System", link: "https://leetcode.com/problems/search-suggestions-system/", platform: "LeetCode", difficulty: "Medium", desc: "Suggest products as user types each character.", concepts: "Trie, Binary Search", why: "Autocomplete system — trie or binary search." },
],

"16-Trie/04-Autocomplete-Trie": [
    { title: "Search Suggestions System", link: "https://leetcode.com/problems/search-suggestions-system/", platform: "LeetCode", difficulty: "Medium", desc: "Suggest products as user types.", concepts: "Trie, Autocomplete", why: "THE autocomplete problem." },
    { title: "Design Search Autocomplete System", link: "https://leetcode.com/problems/design-search-autocomplete-system/", platform: "LeetCode", difficulty: "Hard", desc: "Design an autocomplete system tracking frequency.", concepts: "Trie, Design, Heap", why: "Full autocomplete with ranking — system design." },
    { title: "Implement Trie", link: "https://leetcode.com/problems/implement-trie-prefix-tree/", platform: "LeetCode", difficulty: "Medium", desc: "Basic trie with prefix search.", concepts: "Trie", why: "Building block for autocomplete." },
    { title: "Replace Words", link: "https://leetcode.com/problems/replace-words/", platform: "LeetCode", difficulty: "Medium", desc: "Replace words with shortest root using trie.", concepts: "Trie", why: "Prefix replacement using trie." },
],

"16-Trie/05-Persistent-Trie": [
    { title: "Persistent Trie", link: "https://cp-algorithms.com/data_structures/persistent-trie.html", platform: "CP-Algorithms", difficulty: "Hard", desc: "Trie supporting versioned queries.", concepts: "Persistent Trie", why: "Versioned XOR queries." },
    { title: "Maximum XOR Subarray", link: "https://www.spoj.com/problems/XORX/", platform: "SPOJ", difficulty: "Hard", desc: "Find maximum XOR subarray using persistent trie.", concepts: "Persistent Trie, XOR", why: "Persistent trie on prefix XOR." },
    { title: "Count Pairs With XOR in Range", link: "https://leetcode.com/problems/count-pairs-with-xor-in-a-range/", platform: "LeetCode", difficulty: "Hard", desc: "Count pairs with XOR in [low, high].", concepts: "Persistent Trie", why: "Persistent trie for range queries." },
],

// ──────────────────────────────────────────────────────────────────────────
// 17 — SEGMENT TREE
// ──────────────────────────────────────────────────────────────────────────
"17-Segment-Tree/01-Basic-Segment-Tree": [
    { title: "Range Sum Query - Mutable", link: "https://leetcode.com/problems/range-sum-query-mutable/", platform: "LeetCode", difficulty: "Medium", desc: "Update elements and query range sums.", concepts: "Segment Tree", why: "THE basic segment tree problem." },
    { title: "Range Minimum Query", link: "https://cses.fi/problemset/task/1649", platform: "CSES", difficulty: "Medium", desc: "Point update and range minimum query.", concepts: "Segment Tree", why: "Standard RMQ with segment tree." },
    { title: "Dynamic Range Sum Queries", link: "https://cses.fi/problemset/task/1648", platform: "CSES", difficulty: "Medium", desc: "Point update and range sum query.", concepts: "Segment Tree", why: "Clean CSES segment tree." },
    { title: "Count of Smaller Numbers After Self", link: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/", platform: "LeetCode", difficulty: "Hard", desc: "Count smaller elements to the right.", concepts: "Segment Tree, BIT", why: "Coordinate compression + segment tree." },
    { title: "My Calendar I", link: "https://leetcode.com/problems/my-calendar-i/", platform: "LeetCode", difficulty: "Medium", desc: "Add events without double booking.", concepts: "Segment Tree", why: "Segment tree for interval management." },
],

"17-Segment-Tree/02-Lazy-Propagation": [
    { title: "Range Update Range Query", link: "https://cses.fi/problemset/task/1735", platform: "CSES", difficulty: "Hard", desc: "Range add/set and range sum queries.", concepts: "Lazy Segment Tree", why: "THE lazy propagation problem." },
    { title: "Range Update and Range Query", link: "https://www.spoj.com/problems/HORRIBLE/", platform: "SPOJ", difficulty: "Hard", desc: "Range add and range sum.", concepts: "Lazy Propagation", why: "Standard lazy propagation." },
    { title: "Falling Squares", link: "https://leetcode.com/problems/falling-squares/", platform: "LeetCode", difficulty: "Hard", desc: "Track heights as squares fall on a number line.", concepts: "Lazy Segment Tree, Coordinate Compression", why: "Range max update + range max query." },
    { title: "My Calendar III", link: "https://leetcode.com/problems/my-calendar-iii/", platform: "LeetCode", difficulty: "Hard", desc: "Return the maximum k-booking at any time.", concepts: "Lazy Segment Tree", why: "Range increment + global max." },
],

"17-Segment-Tree/03-Persistent-Segment-Tree": [
    { title: "Persistent Segment Tree", link: "https://cp-algorithms.com/data_structures/segment_tree.html#persistent-segment-tree", platform: "CP-Algorithms", difficulty: "Hard", desc: "Segment tree preserving all historical versions.", concepts: "Persistent Seg Tree", why: "Versioned range queries." },
    { title: "Kth Smallest in Range", link: "https://www.spoj.com/problems/MKTHNUM/", platform: "SPOJ", difficulty: "Hard", desc: "Find kth smallest element in a range using persistent seg tree.", concepts: "Persistent Seg Tree, Merge Sort Tree", why: "Classic persistent segment tree application." },
    { title: "Count of Range Sum", link: "https://leetcode.com/problems/count-of-range-sum/", platform: "LeetCode", difficulty: "Hard", desc: "Count range sums in [lower, upper].", concepts: "Merge Sort, Persistent Tree", why: "Multiple approaches including persistent tree." },
],

"17-Segment-Tree/04-Merge-Sort-Tree": [
    { title: "Merge Sort Tree", link: "https://cp-algorithms.com/data_structures/segment_tree.html#merge-sort-tree", platform: "CP-Algorithms", difficulty: "Hard", desc: "Segment tree with sorted lists in nodes for order statistics queries.", concepts: "Merge Sort Tree", why: "Count elements in range that are less than k." },
    { title: "Kth Smallest in Range", link: "https://www.spoj.com/problems/MKTHNUM/", platform: "SPOJ", difficulty: "Hard", desc: "Find kth smallest in a range.", concepts: "Merge Sort Tree", why: "Merge sort tree + binary search." },
    { title: "Count of Smaller Numbers After Self", link: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/", platform: "LeetCode", difficulty: "Hard", desc: "Count smaller elements to the right.", concepts: "Merge Sort Tree, BIT", why: "Multiple approaches including merge sort tree." },
],

"17-Segment-Tree/05-Iterative-Segment-Tree": [
    { title: "Iterative Segment Tree", link: "https://codeforces.com/blog/entry/18051", platform: "Codeforces", difficulty: "Medium", desc: "Bottom-up segment tree implementation.", concepts: "Iterative Seg Tree", why: "Faster and simpler than recursive — preferred in CP." },
    { title: "Range Sum Query - Mutable", link: "https://leetcode.com/problems/range-sum-query-mutable/", platform: "LeetCode", difficulty: "Medium", desc: "Implement with iterative segment tree.", concepts: "Iterative Seg Tree", why: "Practice iterative implementation." },
    { title: "Dynamic Range Sum", link: "https://cses.fi/problemset/task/1648", platform: "CSES", difficulty: "Medium", desc: "Point update and range sum.", concepts: "Iterative Seg Tree", why: "Efficient iterative approach." },
],

"17-Segment-Tree/06-2D-Segment-Tree": [
    { title: "2D Segment Tree", link: "https://cp-algorithms.com/data_structures/segment_tree.html#2d-segment-tree", platform: "CP-Algorithms", difficulty: "Hard", desc: "Segment tree for 2D range queries.", concepts: "2D Segment Tree", why: "Extension to 2D — tree of trees." },
    { title: "Range Sum Query 2D - Mutable", link: "https://leetcode.com/problems/range-sum-query-2d-mutable/", platform: "LeetCode", difficulty: "Hard", desc: "Update elements and query 2D range sums.", concepts: "2D BIT, 2D Seg Tree", why: "2D BIT is simpler, but 2D seg tree is more general." },
    { title: "2D Range Minimum Query", link: "https://cp-algorithms.com/data_structures/sparse-table.html", platform: "CP-Algorithms", difficulty: "Hard", desc: "Answer 2D range minimum queries.", concepts: "2D Sparse Table, 2D Seg Tree", why: "2D extension of RMQ." },
],

// ──────────────────────────────────────────────────────────────────────────
// 18 — FENWICK TREE (BIT)
// ──────────────────────────────────────────────────────────────────────────
"18-Fenwick-Tree-BIT/01-Basic-BIT": [
    { title: "Range Sum Query - Mutable", link: "https://leetcode.com/problems/range-sum-query-mutable/", platform: "LeetCode", difficulty: "Medium", desc: "Point update and range sum query using BIT.", concepts: "BIT", why: "Simpler than segment tree for sum queries." },
    { title: "Dynamic Range Sum Queries", link: "https://cses.fi/problemset/task/1648", platform: "CSES", difficulty: "Medium", desc: "Point update and range sum using BIT.", concepts: "BIT", why: "Standard BIT problem." },
    { title: "Count of Smaller Numbers After Self", link: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/", platform: "LeetCode", difficulty: "Hard", desc: "Count inversions using BIT.", concepts: "BIT, Coordinate Compression", why: "BIT for counting inversions." },
    { title: "Reverse Pairs", link: "https://leetcode.com/problems/reverse-pairs/", platform: "LeetCode", difficulty: "Hard", desc: "Count reverse pairs using BIT.", concepts: "BIT", why: "BIT-based approach to reverse pairs." },
    { title: "Create Sorted Array through Instructions", link: "https://leetcode.com/problems/create-sorted-array-through-instructions/", platform: "LeetCode", difficulty: "Hard", desc: "Minimize insertion cost using BIT.", concepts: "BIT", why: "Count elements less than / greater than." },
],

"18-Fenwick-Tree-BIT/02-2D-BIT": [
    { title: "Range Sum Query 2D - Mutable", link: "https://leetcode.com/problems/range-sum-query-2d-mutable/", platform: "LeetCode", difficulty: "Hard", desc: "Point update and 2D range sum using 2D BIT.", concepts: "2D BIT", why: "Extension of BIT to 2D." },
    { title: "2D BIT Implementation", link: "https://cp-algorithms.com/data_structures/fenwick.html#2d-fenwick-tree", platform: "CP-Algorithms", difficulty: "Hard", desc: "2D Fenwick tree for matrix range queries.", concepts: "2D BIT", why: "Efficient 2D range sum queries." },
    { title: "Forest Queries II", link: "https://cses.fi/problemset/task/1739", platform: "CSES", difficulty: "Hard", desc: "Toggle cells and count trees in rectangle.", concepts: "2D BIT", why: "2D BIT for online 2D range queries." },
],

"18-Fenwick-Tree-BIT/03-BIT-Problems": [
    { title: "Inversion Count", link: "https://www.spoj.com/problems/INVCNT/", platform: "SPOJ", difficulty: "Medium", desc: "Count inversions in an array.", concepts: "BIT", why: "Classic BIT application for inversions." },
    { title: "List Removals", link: "https://cses.fi/problemset/task/1749", platform: "CSES", difficulty: "Hard", desc: "Remove elements at given positions efficiently.", concepts: "BIT, Binary Search", why: "BIT for position tracking with deletions." },
    { title: "Nested Ranges Count", link: "https://cses.fi/problemset/task/2169", platform: "CSES", difficulty: "Hard", desc: "Count ranges that contain / are contained by each range.", concepts: "BIT, Sorting", why: "Sweep + BIT for counting." },
    { title: "Salary Queries", link: "https://cses.fi/problemset/task/1144", platform: "CSES", difficulty: "Hard", desc: "Range frequency queries with updates.", concepts: "BIT, Coordinate Compression", why: "BIT with coordinate compression." },
],

// ──────────────────────────────────────────────────────────────────────────
// 19 — SQRT DECOMPOSITION / MO's
// ──────────────────────────────────────────────────────────────────────────
"19-Sqrt-Decomposition-MOs/01-Sqrt-Decomposition": [
    { title: "Range Sum Queries (Sqrt)", link: "https://cses.fi/problemset/task/1648", platform: "CSES", difficulty: "Medium", desc: "Answer range sum queries with sqrt decomposition.", concepts: "Sqrt Decomposition", why: "Foundation: blocks of size √n." },
    { title: "Range Minimum Queries (Sqrt)", link: "https://cp-algorithms.com/data_structures/sqrt_decomposition.html", platform: "CP-Algorithms", difficulty: "Medium", desc: "Answer range minimum queries with sqrt decomposition.", concepts: "Sqrt Decomposition", why: "When segment tree is overkill." },
    { title: "Mos Algorithm Introduction", link: "https://cp-algorithms.com/data_structures/sqrt_decomposition.html#mos-algorithm", platform: "CP-Algorithms", difficulty: "Hard", desc: "Offline query processing with block decomposition.", concepts: "MO's Algorithm", why: "Foundation of MO's — sort queries by blocks." },
    { title: "Divisor Sum in Range", link: "https://codeforces.com/problemset/problem/13/E", platform: "Codeforces", difficulty: "Hard", desc: "Range queries using sqrt decomposition.", concepts: "Sqrt Decomposition", why: "When updates and queries need balancing." },
],

"19-Sqrt-Decomposition-MOs/02-MOs-Algorithm": [
    { title: "Distinct Values Queries", link: "https://cses.fi/problemset/task/1734", platform: "CSES", difficulty: "Hard", desc: "Count distinct values in range queries.", concepts: "MO's Algorithm", why: "THE MO's algorithm problem." },
    { title: "DQUERY", link: "https://www.spoj.com/problems/DQUERY/", platform: "SPOJ", difficulty: "Medium", desc: "Count distinct elements in range.", concepts: "MO's Algorithm", why: "Classic MO's problem." },
    { title: "Powerful Array", link: "https://codeforces.com/contest/86/problem/D", platform: "Codeforces", difficulty: "Hard", desc: "Sum of cnt(x)^2 * x for each query range.", concepts: "MO's Algorithm", why: "MO's with contribution updates." },
    { title: "XOR on Segment", link: "https://codeforces.com/problemset/problem/617/E", platform: "Codeforces", difficulty: "Hard", desc: "Count pairs with XOR equals k in range queries.", concepts: "MO's Algorithm, XOR", why: "MO's with XOR prefix sums." },
],

"19-Sqrt-Decomposition-MOs/03-MOs-On-Trees": [
    { title: "MO's on Trees", link: "https://cp-algorithms.com/data_structures/sqrt_decomposition.html#mos-algorithm-on-trees", platform: "CP-Algorithms", difficulty: "Hard", desc: "Extend MO's to tree paths using Euler Tour.", concepts: "MO's on Trees, Euler Tour", why: "Flatten tree + MO's for path queries." },
    { title: "Count on a Tree", link: "https://www.spoj.com/problems/COT2/", platform: "SPOJ", difficulty: "Hard", desc: "Count distinct values on tree path.", concepts: "MO's on Trees", why: "Classic MO's on tree problem." },
    { title: "Tree Path Queries", link: "https://codeforces.com/problemset/problem/852/I", platform: "Codeforces", difficulty: "Hard", desc: "Answer tree path queries offline.", concepts: "MO's on Trees", why: "MO's on Euler Tour of tree." },
],

"19-Sqrt-Decomposition-MOs/04-Block-Decomposition": [
    { title: "Block Decomposition", link: "https://cp-algorithms.com/data_structures/sqrt_decomposition.html", platform: "CP-Algorithms", difficulty: "Medium", desc: "Divide array into blocks of size √n.", concepts: "Block Decomposition", why: "Foundation for sqrt-based techniques." },
    { title: "Range Update Range Query (Sqrt)", link: "https://cp-algorithms.com/data_structures/sqrt_decomposition.html#range-updates", platform: "CP-Algorithms", difficulty: "Hard", desc: "Range updates with sqrt decomposition.", concepts: "Block Decomposition", why: "Alternative to lazy segment tree." },
    { title: "Baby-Step Giant-Step", link: "https://cp-algorithms.com/algebra/discrete-log.html", platform: "CP-Algorithms", difficulty: "Hard", desc: "Solve a^x ≡ b (mod m) using sqrt decomposition of search space.", concepts: "Block Decomposition, Number Theory", why: "Sqrt decomposition in number theory context." },
],

// ──────────────────────────────────────────────────────────────────────────
// 20 — MATRIX EXPONENTIATION
// ──────────────────────────────────────────────────────────────────────────
"20-Matrix-Exponentiation/01-Linear-Recurrence": [
    { title: "Fibonacci Number", link: "https://leetcode.com/problems/fibonacci-number/", platform: "LeetCode", difficulty: "Easy", desc: "Calculate F(n) in O(log n) using matrix exponentiation.", concepts: "Matrix Exponentiation", why: "THE matrix exponentiation intro problem." },
    { title: "Fibonacci (Large N)", link: "https://cses.fi/problemset/task/1722", platform: "CSES", difficulty: "Medium", desc: "Calculate F(n) mod 10^9+7 for n up to 10^18.", concepts: "Matrix Exponentiation", why: "Large N requires O(log n) approach." },
    { title: "Throwing Dice", link: "https://cses.fi/problemset/task/1096", platform: "CSES", difficulty: "Medium", desc: "Count ways to get sum n throwing dice.", concepts: "Matrix Exponentiation, DP", why: "Linear recurrence with k=6 states." },
    { title: "Linear Recurrence", link: "https://cses.fi/problemset/task/1722", platform: "CSES", difficulty: "Hard", desc: "Solve general linear recurrence using matrix power.", concepts: "Matrix Exponentiation", why: "Generalized approach to any linear recurrence." },
    { title: "Tribonacci Number", link: "https://leetcode.com/problems/n-th-tribonacci-number/", platform: "LeetCode", difficulty: "Easy", desc: "Calculate T(n) — 3-term recurrence.", concepts: "Matrix Exponentiation", why: "3×3 matrix for tribonacci." },
],

"20-Matrix-Exponentiation/02-Fibonacci-Variants": [
    { title: "Fibonacci Number", link: "https://leetcode.com/problems/fibonacci-number/", platform: "LeetCode", difficulty: "Easy", desc: "Basic Fibonacci calculation.", concepts: "DP, Matrix Exponentiation", why: "Foundation — multiple approaches." },
    { title: "Length of Longest Fibonacci Subsequence", link: "https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/", platform: "LeetCode", difficulty: "Medium", desc: "Find longest Fibonacci-like subsequence.", concepts: "DP, HashMap", why: "2D DP with hash-based lookup." },
    { title: "Fibonacci Sum", link: "https://cses.fi/problemset/task/1722", platform: "CSES", difficulty: "Hard", desc: "Sum of first n Fibonacci numbers mod M.", concepts: "Matrix Exponentiation", why: "Augment Fibonacci matrix to include sum." },
    { title: "Pisano Period", link: "https://cp-algorithms.com/algebra/fibonacci-numbers.html#pisano-period", platform: "CP-Algorithms", difficulty: "Hard", desc: "Find the period of Fibonacci sequence modulo m.", concepts: "Fibonacci, Number Theory", why: "Important for Fibonacci under arbitrary modulus." },
],

"20-Matrix-Exponentiation/03-Graph-Powers": [
    { title: "Graph Paths I", link: "https://cses.fi/problemset/task/1723", platform: "CSES", difficulty: "Hard", desc: "Count paths of exactly k edges using matrix exponentiation.", concepts: "Matrix Exponentiation, Graph", why: "Adjacency matrix^k gives path counts." },
    { title: "Graph Paths II", link: "https://cses.fi/problemset/task/1724", platform: "CSES", difficulty: "Hard", desc: "Find shortest path of exactly k edges.", concepts: "Matrix Exponentiation, Min-Plus", why: "Min-plus matrix multiplication." },
    { title: "Knight Distance", link: "https://cp-algorithms.com/algebra/binary-exp.html#effective-computation-of-large-exponents-modulo-a-number", platform: "CP-Algorithms", difficulty: "Hard", desc: "Count knight paths of length k using matrix exponentiation.", concepts: "Matrix Exponentiation", why: "State = position, transition = knight moves." },
],

// ──────────────────────────────────────────────────────────────────────────
// 21 — GREEDY ALGORITHMS
// ──────────────────────────────────────────────────────────────────────────
"21-Greedy-Algorithms/01-Activity-Selection": [
    { title: "Non-overlapping Intervals", link: "https://leetcode.com/problems/non-overlapping-intervals/", platform: "LeetCode", difficulty: "Medium", desc: "Minimum intervals to remove to avoid overlap.", concepts: "Greedy, Activity Selection", why: "Classic activity selection / interval scheduling." },
    { title: "Minimum Number of Arrows to Burst Balloons", link: "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/", platform: "LeetCode", difficulty: "Medium", desc: "Minimum arrows to burst all balloons.", concepts: "Greedy, Intervals", why: "Equivalent to max non-overlapping intervals." },
    { title: "Video Stitching", link: "https://leetcode.com/problems/video-stitching/", platform: "LeetCode", difficulty: "Medium", desc: "Minimum clips to cover [0, time].", concepts: "Greedy, Intervals", why: "Greedy interval covering." },
    { title: "Maximum Length of a Concatenated String with Unique Characters", link: "https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/", platform: "LeetCode", difficulty: "Medium", desc: "Max concatenation length with all unique chars.", concepts: "Backtracking, Bitmask", why: "Bitmask-based selection." },
],

"21-Greedy-Algorithms/02-Interval-Scheduling": [
    { title: "Meeting Rooms II", link: "https://leetcode.com/problems/meeting-rooms-ii/", platform: "LeetCode", difficulty: "Medium", desc: "Minimum conference rooms needed.", concepts: "Greedy, Heap", why: "Sweep line or min-heap." },
    { title: "Car Pooling", link: "https://leetcode.com/problems/car-pooling/", platform: "LeetCode", difficulty: "Medium", desc: "Can we carpool with given capacity?", concepts: "Greedy, Sweep Line", why: "Sweep line on events." },
    { title: "My Calendar II", link: "https://leetcode.com/problems/my-calendar-ii/", platform: "LeetCode", difficulty: "Medium", desc: "Avoid triple booking.", concepts: "Intervals, Sweep Line", why: "Sweep line for overlap counting." },
    { title: "Interval Scheduling Maximization", link: "https://cp-algorithms.com/schedules/schedule_one_machine.html", platform: "CP-Algorithms", difficulty: "Medium", desc: "Maximum number of non-overlapping intervals.", concepts: "Greedy", why: "Sort by end time, greedily select." },
],

"21-Greedy-Algorithms/03-Huffman-Coding": [
    { title: "Huffman Encoding", link: "https://practice.geeksforgeeks.org/problems/huffman-encoding3345/1", platform: "GFG", difficulty: "Medium", desc: "Build Huffman tree and find codes.", concepts: "Huffman, Heap", why: "Classic greedy algorithm." },
    { title: "Minimum Cost to Merge Stones", link: "https://leetcode.com/problems/minimum-cost-to-merge-stones/", platform: "LeetCode", difficulty: "Hard", desc: "Minimum cost to merge k consecutive piles.", concepts: "Greedy, DP", why: "Generalized Huffman-like merging." },
    { title: "Connect Ropes", link: "https://practice.geeksforgeeks.org/problems/minimum-cost-of-ropes-1587115620/1", platform: "GFG", difficulty: "Easy", desc: "Minimum cost to connect n ropes.", concepts: "Greedy, Heap", why: "Direct Huffman application — always merge smallest." },
    { title: "Reorganize String", link: "https://leetcode.com/problems/reorganize-string/", platform: "LeetCode", difficulty: "Medium", desc: "Rearrange so no two adjacent are the same.", concepts: "Greedy, Heap", why: "Max-heap greedy — similar spirit to Huffman." },
],

"21-Greedy-Algorithms/04-Fractional-Knapsack": [
    { title: "Fractional Knapsack", link: "https://practice.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1", platform: "GFG", difficulty: "Medium", desc: "Maximize value with fractional items allowed.", concepts: "Greedy, Knapsack", why: "Sort by value/weight ratio — take greedily." },
    { title: "Maximum Units on a Truck", link: "https://leetcode.com/problems/maximum-units-on-a-truck/", platform: "LeetCode", difficulty: "Easy", desc: "Maximize total units loaded onto a truck.", concepts: "Greedy, Sorting", why: "Greedy by units per box." },
    { title: "Boats to Save People", link: "https://leetcode.com/problems/boats-to-save-people/", platform: "LeetCode", difficulty: "Medium", desc: "Minimum boats to save people with weight limit.", concepts: "Greedy, Two Pointer", why: "Pair heaviest with lightest." },
    { title: "Assign Cookies", link: "https://leetcode.com/problems/assign-cookies/", platform: "LeetCode", difficulty: "Easy", desc: "Maximize number of content children.", concepts: "Greedy, Sorting", why: "Sort and greedily assign." },
],

"21-Greedy-Algorithms/05-Job-Scheduling": [
    { title: "Job Sequencing Problem", link: "https://practice.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1", platform: "GFG", difficulty: "Medium", desc: "Maximize profit by scheduling jobs with deadlines.", concepts: "Greedy, DSU", why: "Sort by profit, use DSU for slot finding." },
    { title: "Task Scheduler", link: "https://leetcode.com/problems/task-scheduler/", platform: "LeetCode", difficulty: "Medium", desc: "Schedule tasks with cooldown constraint.", concepts: "Greedy, Heap", why: "Greedy scheduling with idle optimization." },
    { title: "Course Schedule III", link: "https://leetcode.com/problems/course-schedule-iii/", platform: "LeetCode", difficulty: "Hard", desc: "Maximum number of courses taken with deadlines.", concepts: "Greedy, Heap", why: "Sort by deadline, use max-heap for swap." },
    { title: "Single-Threaded CPU", link: "https://leetcode.com/problems/single-threaded-cpu/", platform: "LeetCode", difficulty: "Medium", desc: "Process tasks on a single CPU.", concepts: "Greedy, Heap, Simulation", why: "Priority queue simulation." },
],

"21-Greedy-Algorithms/06-Minimum-Platforms": [
    { title: "Minimum Platforms", link: "https://practice.geeksforgeeks.org/problems/minimum-platforms-1587115620/1", platform: "GFG", difficulty: "Medium", desc: "Minimum platforms needed at a railway station.", concepts: "Greedy, Sweep Line", why: "Sort events and sweep — classic." },
    { title: "Meeting Rooms II", link: "https://leetcode.com/problems/meeting-rooms-ii/", platform: "LeetCode", difficulty: "Medium", desc: "Minimum conference rooms needed.", concepts: "Greedy, Sweep Line", why: "Same as minimum platforms." },
    { title: "Car Pooling", link: "https://leetcode.com/problems/car-pooling/", platform: "LeetCode", difficulty: "Medium", desc: "Can a car carry all passengers?", concepts: "Sweep Line", why: "Sweep line variant." },
    { title: "My Calendar I", link: "https://leetcode.com/problems/my-calendar-i/", platform: "LeetCode", difficulty: "Medium", desc: "Online interval insertion without overlap.", concepts: "Intervals", why: "Online platform allocation." },
],

"21-Greedy-Algorithms/07-Gas-Station": [
    { title: "Gas Station", link: "https://leetcode.com/problems/gas-station/", platform: "LeetCode", difficulty: "Medium", desc: "Find the starting gas station to complete the circuit.", concepts: "Greedy", why: "Greedy with surplus tracking — one-pass solution." },
    { title: "Lemonade Change", link: "https://leetcode.com/problems/lemonade-change/", platform: "LeetCode", difficulty: "Easy", desc: "Can you provide change for all customers?", concepts: "Greedy", why: "Greedy change-making." },
    { title: "Jump Game", link: "https://leetcode.com/problems/jump-game/", platform: "LeetCode", difficulty: "Medium", desc: "Can you reach the last index?", concepts: "Greedy", why: "Track maximum reachable position." },
    { title: "Jump Game II", link: "https://leetcode.com/problems/jump-game-ii/", platform: "LeetCode", difficulty: "Medium", desc: "Minimum jumps to reach the end.", concepts: "Greedy", why: "BFS-like greedy — expand the furthest reachable." },
    { title: "Candy", link: "https://leetcode.com/problems/candy/", platform: "LeetCode", difficulty: "Hard", desc: "Minimum candies distributed with rating constraints.", concepts: "Greedy", why: "Two-pass greedy — left to right and right to left." },
],

// ──────────────────────────────────────────────────────────────────────────
// 22 — GAME THEORY
// ──────────────────────────────────────────────────────────────────────────
"22-Game-Theory/01-Nim-Game": [
    { title: "Nim Game", link: "https://leetcode.com/problems/nim-game/", platform: "LeetCode", difficulty: "Easy", desc: "Remove 1-3 stones. Person taking last stone wins.", concepts: "Nim Game", why: "n % 4 != 0 → you win." },
    { title: "Stone Game", link: "https://leetcode.com/problems/stone-game/", platform: "LeetCode", difficulty: "Medium", desc: "Predict if player 1 wins picking from ends.", concepts: "Game Theory, DP", why: "Minimax DP or math insight." },
    { title: "Stone Game II", link: "https://leetcode.com/problems/stone-game-ii/", platform: "LeetCode", difficulty: "Medium", desc: "Take piles with increasing M parameter.", concepts: "Game Theory, DP", why: "Minimax DP with M parameter." },
    { title: "Nim Game (CSES)", link: "https://cses.fi/problemset/task/1730", platform: "CSES", difficulty: "Medium", desc: "Standard multi-pile Nim.", concepts: "Nim, XOR", why: "XOR of pile sizes = 0 → losing position." },
    { title: "Sticks Game", link: "https://cses.fi/problemset/task/1729", platform: "CSES", difficulty: "Medium", desc: "Remove sticks from a set — compute Grundy values.", concepts: "Nim, Grundy", why: "Introduction to Sprague-Grundy." },
],

"22-Game-Theory/02-Sprague-Grundy": [
    { title: "Sprague-Grundy Theorem", link: "https://cp-algorithms.com/game_theory/sprague-grundy-nim.html", platform: "CP-Algorithms", difficulty: "Hard", desc: "Compute Grundy numbers for combinatorial games.", concepts: "Sprague-Grundy", why: "Foundation for all impartial game theory." },
    { title: "Grundy's Game", link: "https://cses.fi/problemset/task/2207", platform: "CSES", difficulty: "Hard", desc: "Compute Grundy values for a game.", concepts: "Sprague-Grundy", why: "Direct Grundy computation." },
    { title: "Stone Game III", link: "https://leetcode.com/problems/stone-game-iii/", platform: "LeetCode", difficulty: "Hard", desc: "Three-pile stone game with optimal play.", concepts: "Game Theory, DP", why: "Minimax with 3 choices." },
    { title: "Nim with Multiple Piles", link: "https://cses.fi/problemset/task/1730", platform: "CSES", difficulty: "Medium", desc: "Multi-pile Nim using XOR.", concepts: "Nim, Sprague-Grundy", why: "XOR of Grundy values." },
],

"22-Game-Theory/03-Combinatorial-Games": [
    { title: "Can I Win", link: "https://leetcode.com/problems/can-i-win/", platform: "LeetCode", difficulty: "Medium", desc: "Determine if first player can force a win.", concepts: "Game Theory, Bitmask DP", why: "State-space search with memoization." },
    { title: "Predict the Winner", link: "https://leetcode.com/problems/predict-the-winner/", platform: "LeetCode", difficulty: "Medium", desc: "Can player 1 guarantee a win?", concepts: "Game Theory, DP", why: "Minimax on interval." },
    { title: "Flip Game II", link: "https://leetcode.com/problems/flip-game-ii/", platform: "LeetCode", difficulty: "Medium", desc: "Can the starting player guarantee a win?", concepts: "Game Theory, Backtracking", why: "Sprague-Grundy or brute force." },
    { title: "Cat and Mouse", link: "https://leetcode.com/problems/cat-and-mouse/", platform: "LeetCode", difficulty: "Hard", desc: "Determine the outcome of cat-and-mouse game on a graph.", concepts: "Game Theory, BFS", why: "Backward induction on game states." },
],

"22-Game-Theory/04-Minimax": [
    { title: "Predict the Winner", link: "https://leetcode.com/problems/predict-the-winner/", platform: "LeetCode", difficulty: "Medium", desc: "Can player 1 guarantee a win?", concepts: "Minimax", why: "Classic minimax problem." },
    { title: "Stone Game IV", link: "https://leetcode.com/problems/stone-game-iv/", platform: "LeetCode", difficulty: "Hard", desc: "Remove perfect squares — determine winner.", concepts: "Minimax, DP", why: "Minimax with perfect square moves." },
    { title: "Tic-Tac-Toe (Optimal Play)", link: "https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/", platform: "LeetCode", difficulty: "Easy", desc: "Determine the winner of a tic-tac-toe game.", concepts: "Minimax", why: "Minimax on small game tree." },
    { title: "Guess the Word", link: "https://leetcode.com/problems/guess-the-word/", platform: "LeetCode", difficulty: "Hard", desc: "Guess a word with feedback — minimax strategy.", concepts: "Minimax, Information Theory", why: "Minimize worst case — minimax on information gain." },
],

"22-Game-Theory/05-Alpha-Beta-Pruning": [
    { title: "Alpha-Beta Pruning", link: "https://cp-algorithms.com/game_theory/alpha-beta-pruning.html", platform: "CP-Algorithms", difficulty: "Hard", desc: "Optimize minimax with alpha-beta pruning.", concepts: "Alpha-Beta Pruning", why: "Prunes minimax tree — essential for real game AI." },
    { title: "Connect Four AI", link: "https://en.wikipedia.org/wiki/Alpha%E2%80%93beta_pruning", platform: "Theory", difficulty: "Hard", desc: "Build a Connect Four AI with alpha-beta pruning.", concepts: "Alpha-Beta, Game AI", why: "Practical application of alpha-beta." },
    { title: "Chess Engine Basics", link: "https://cp-algorithms.com/game_theory/alpha-beta-pruning.html", platform: "CP-Algorithms", difficulty: "Hard", desc: "Use alpha-beta pruning in a chess engine.", concepts: "Alpha-Beta, Game AI", why: "Understanding evaluation + pruning." },
],

// ──────────────────────────────────────────────────────────────────────────
// 23 — GEOMETRY
// ──────────────────────────────────────────────────────────────────────────
"23-Geometry/01-Convex-Hull": [
    { title: "Erect the Fence", link: "https://leetcode.com/problems/erect-the-fence/", platform: "LeetCode", difficulty: "Hard", desc: "Find the convex hull of a set of trees.", concepts: "Convex Hull", why: "THE convex hull problem on LeetCode." },
    { title: "Convex Hull", link: "https://cses.fi/problemset/task/2195", platform: "CSES", difficulty: "Hard", desc: "Find the convex hull of a point set.", concepts: "Convex Hull, Graham Scan", why: "Standard convex hull implementation." },
    { title: "Maximum Area Triangle", link: "https://cp-algorithms.com/geometry/convex-hull.html", platform: "CP-Algorithms", difficulty: "Hard", desc: "Find triangle with maximum area from convex hull.", concepts: "Convex Hull, Rotating Calipers", why: "Rotating calipers on convex hull." },
    { title: "Convex Hull Trick", link: "https://cp-algorithms.com/geometry/convex_hull_trick.html", platform: "CP-Algorithms", difficulty: "Hard", desc: "DP optimization using convex hull of lines.", concepts: "Convex Hull Trick", why: "Connection between geometry and DP optimization." },
],

"23-Geometry/02-Line-Intersection": [
    { title: "Line Segment Intersection", link: "https://cp-algorithms.com/geometry/check-segments-intersection.html", platform: "CP-Algorithms", difficulty: "Medium", desc: "Check if two line segments intersect.", concepts: "Geometry, Cross Product", why: "Foundation of computational geometry." },
    { title: "Intersection of Two Lines", link: "https://cp-algorithms.com/geometry/lines-intersection.html", platform: "CP-Algorithms", difficulty: "Medium", desc: "Find the intersection point of two lines.", concepts: "Geometry", why: "Basic line intersection formula." },
    { title: "Max Points on a Line", link: "https://leetcode.com/problems/max-points-on-a-line/", platform: "LeetCode", difficulty: "Hard", desc: "Find maximum points on a single line.", concepts: "Geometry, HashMap", why: "Slope-based grouping with edge cases." },
    { title: "Check if Point Lies on Segment", link: "https://cp-algorithms.com/geometry/check-segments-intersection.html", platform: "CP-Algorithms", difficulty: "Easy", desc: "Determine if a point lies on a line segment.", concepts: "Geometry", why: "Cross product + bounding box check." },
],

"23-Geometry/03-Sweep-Line": [
    { title: "Rectangle Area II", link: "https://leetcode.com/problems/rectangle-area-ii/", platform: "LeetCode", difficulty: "Hard", desc: "Find the total area covered by rectangles.", concepts: "Sweep Line, Segment Tree", why: "Sweep line with active interval tracking." },
    { title: "The Skyline Problem", link: "https://leetcode.com/problems/the-skyline-problem/", platform: "LeetCode", difficulty: "Hard", desc: "Compute the skyline silhouette.", concepts: "Sweep Line, Heap", why: "THE sweep line problem." },
    { title: "Meeting Rooms II", link: "https://leetcode.com/problems/meeting-rooms-ii/", platform: "LeetCode", difficulty: "Medium", desc: "Minimum rooms needed.", concepts: "Sweep Line", why: "Event-based sweep line." },
    { title: "Closest Pair of Points", link: "https://cp-algorithms.com/geometry/nearest_points.html", platform: "CP-Algorithms", difficulty: "Hard", desc: "Find closest pair using sweep line.", concepts: "Sweep Line, Geometry", why: "Sweep line alternative to D&C approach." },
    { title: "Line Sweep for Intersections", link: "https://cp-algorithms.com/geometry/intersecting_segments.html", platform: "CP-Algorithms", difficulty: "Hard", desc: "Find all segment intersections using sweep line.", concepts: "Sweep Line", why: "Bentley-Ottmann algorithm." },
],

"23-Geometry/04-Closest-Pair": [
    { title: "Closest Pair of Points", link: "https://cp-algorithms.com/geometry/nearest_points.html", platform: "CP-Algorithms", difficulty: "Hard", desc: "Find the closest pair of points in O(n log n).", concepts: "Divide and Conquer, Geometry", why: "Classic D&C geometry problem." },
    { title: "Closest Pair (Practice)", link: "https://practice.geeksforgeeks.org/problems/closest-pair-of-points/0", platform: "GFG", difficulty: "Hard", desc: "Find closest pair of points.", concepts: "Closest Pair", why: "Implementation practice." },
    { title: "K Closest Points to Origin", link: "https://leetcode.com/problems/k-closest-points-to-origin/", platform: "LeetCode", difficulty: "Medium", desc: "Find k closest points to origin.", concepts: "Geometry, Heap", why: "Distance-based selection — heap or quickselect." },
],

"23-Geometry/05-Point-In-Polygon": [
    { title: "Point in Polygon", link: "https://cp-algorithms.com/geometry/point-in-convex-polygon.html", platform: "CP-Algorithms", difficulty: "Hard", desc: "Determine if a point lies inside a convex polygon.", concepts: "Geometry, Cross Product", why: "Ray casting or cross product approach." },
    { title: "Point in Non-Convex Polygon", link: "https://cp-algorithms.com/geometry/point-in-non-convex-polygon.html", platform: "CP-Algorithms", difficulty: "Hard", desc: "Point-in-polygon for non-convex polygons using winding number.", concepts: "Winding Number", why: "Winding number algorithm." },
    { title: "Check if Points Form a Straight Line", link: "https://leetcode.com/problems/check-if-it-is-a-straight-line/", platform: "LeetCode", difficulty: "Easy", desc: "Check if all points lie on a straight line.", concepts: "Geometry, Cross Product", why: "Cross product of consecutive vectors." },
    { title: "Minimum Area Rectangle", link: "https://leetcode.com/problems/minimum-area-rectangle/", platform: "LeetCode", difficulty: "Medium", desc: "Find minimum area rectangle from given points.", concepts: "Geometry, HashSet", why: "Enumerate diagonal pairs." },
],

"23-Geometry/06-Polygon-Area": [
    { title: "Polygon Area (Shoelace)", link: "https://cp-algorithms.com/geometry/area-of-simple-polygon.html", platform: "CP-Algorithms", difficulty: "Medium", desc: "Compute area of polygon using shoelace formula.", concepts: "Geometry, Shoelace", why: "Fundamental polygon area computation." },
    { title: "Polygon Area", link: "https://cses.fi/problemset/task/2191", platform: "CSES", difficulty: "Medium", desc: "Calculate area of a polygon.", concepts: "Shoelace Formula", why: "Standard CSES geometry problem." },
    { title: "Largest Triangle Area", link: "https://leetcode.com/problems/largest-triangle-area/", platform: "LeetCode", difficulty: "Easy", desc: "Find the largest triangle area from given points.", concepts: "Geometry, Cross Product", why: "Triangle area via cross product." },
    { title: "Minimum Area Rectangle II", link: "https://leetcode.com/problems/minimum-area-rectangle-ii/", platform: "LeetCode", difficulty: "Medium", desc: "Find minimum area rectangle (any orientation).", concepts: "Geometry", why: "Enumerate center + diagonal length." },
],

};

// ============================================================================
// GENERATOR LOGIC
// ============================================================================

function generateMarkdown(topicName, questions) {
    let md = `# 🔥 Interview & CP Questions — ${topicName}\n\n`;
    questions.forEach((q, i) => {
        if (filterDiff && q.difficulty.toLowerCase() !== filterDiff.toLowerCase()) return;
        md += `## Question ${i + 1}: ${q.title}\n`;
        md += `- **Platform:** ${q.platform}\n`;
        md += `- **Link:** ${q.link}\n`;
        md += `- **Difficulty:** ${q.difficulty}\n`;
        md += `- **Description:** ${q.desc}\n`;
        md += `- **Key Concepts:** ${q.concepts}\n`;
        md += `- **Why Interview-Worthy:** ${q.why}\n\n---\n\n`;
    });
    return md;
}

let generated = 0;
let skipped = 0;
let totalProblems = 0;

for (const [relPath, questions] of Object.entries(PROBLEMS)) {
    if (filterTopic) {
        const topicLower = relPath.toLowerCase();
        if (!topicLower.includes(filterTopic)) continue;
    }

    const fullPath = path.join(baseDir, relPath, 'questions.md');
    const topicName = relPath.split('/').pop().replace(/^\d+-/, '').replace(/-/g, ' ');

    if (fs.existsSync(fullPath) && !force) {
        skipped++;
        if (dryRun) console.log(`  SKIP (exists): ${relPath}`);
        continue;
    }

    const content = generateMarkdown(topicName, questions);
    totalProblems += questions.length;

    if (dryRun) {
        console.log(`  DRY-RUN: ${relPath} (${questions.length} problems)`);
        generated++;
        continue;
    }

    // Ensure directory exists
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    fs.writeFileSync(fullPath, content, 'utf-8');
    generated++;
    console.log(`  GENERATED: ${relPath} (${questions.length} problems)`);
}

console.log(`\n========================================`);
console.log(`Generated: ${generated} files`);
console.log(`Skipped: ${skipped} files (use --force to overwrite)`);
console.log(`Total problems: ${totalProblems}`);
console.log(`========================================`);

if (dryRun) {
    console.log('\n⚠️  Dry run mode — no files were written.');
    console.log('   Remove --dry-run to generate files.');
}
