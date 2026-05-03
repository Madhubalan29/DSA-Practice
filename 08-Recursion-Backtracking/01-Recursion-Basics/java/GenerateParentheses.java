import java.util.*;
public class GenerateParentheses {
    public static List<String> generateParenthesis(int n) {
        List<String> result = new ArrayList<>();
        backtrack(new StringBuilder(), 0, 0, n, result);
        return result;
    }
    static void backtrack(StringBuilder cur, int open, int close, int n, List<String> result) {
        if (cur.length() == 2 * n) { result.add(cur.toString()); return; }
        if (open < n) { cur.append('('); backtrack(cur, open + 1, close, n, result); cur.deleteCharAt(cur.length() - 1); }
        if (close < open) { cur.append(')'); backtrack(cur, open, close + 1, n, result); cur.deleteCharAt(cur.length() - 1); }
    }
    public static void main(String[] args) {
        System.out.println(generateParenthesis(3));
    }
}
