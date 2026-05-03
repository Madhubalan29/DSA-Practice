import java.util.*;
public class SuffixArray {
    public static Integer[] build(String s) {
        int n = s.length();
        Integer[] sa = new Integer[n];
        for (int i = 0; i < n; i++) sa[i] = i;
        Arrays.sort(sa, (a, b) -> s.substring(a).compareTo(s.substring(b)));
        return sa;
    }
    public static void main(String[] args) {
        String s = "banana";
        Integer[] sa = build(s);
        System.out.println("Suffix Array of '" + s + "':");
        for (int i : sa) System.out.println(i + ": " + s.substring(i));
    }
}
