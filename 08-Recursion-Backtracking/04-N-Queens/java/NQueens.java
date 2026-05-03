import java.util.*;
public class NQueens {
    static List<List<String>> result = new ArrayList<>();
    public static List<List<String>> solveNQueens(int n) {
        result.clear();
        char[][] board = new char[n][n];
        for (char[] row : board) Arrays.fill(row, '.');
        solve(0, n, board, new boolean[n], new boolean[2 * n], new boolean[2 * n]);
        return result;
    }
    static void solve(int row, int n, char[][] board, boolean[] col, boolean[] d1, boolean[] d2) {
        if (row == n) { List<String> sol = new ArrayList<>(); for (char[] r : board) sol.add(new String(r)); result.add(sol); return; }
        for (int c = 0; c < n; c++) {
            if (col[c] || d1[row - c + n - 1] || d2[row + c]) continue;
            board[row][c] = 'Q'; col[c] = d1[row - c + n - 1] = d2[row + c] = true;
            solve(row + 1, n, board, col, d1, d2);
            board[row][c] = '.'; col[c] = d1[row - c + n - 1] = d2[row + c] = false;
        }
    }
    public static void main(String[] args) { System.out.println("4-Queens: " + solveNQueens(4).size() + " solutions"); }
}
