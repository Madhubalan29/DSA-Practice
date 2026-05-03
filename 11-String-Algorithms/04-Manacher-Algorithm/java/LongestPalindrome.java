public class LongestPalindrome {
    static int start = 0, maxLen = 1;
    static void expand(String s, int l, int r) {
        while (l >= 0 && r < s.length() && s.charAt(l) == s.charAt(r)) { l--; r++; }
        if (r - l - 1 > maxLen) { start = l + 1; maxLen = r - l - 1; }
    }
    public static String longestPalindrome(String s) {
        start = 0; maxLen = 1;
        for (int i = 0; i < s.length(); i++) { expand(s, i, i); expand(s, i, i + 1); }
        return s.substring(start, start + maxLen);
    }
    public static void main(String[] args) {
        System.out.println(longestPalindrome("babad"));   // bab or aba
        System.out.println(longestPalindrome("racecar")); // racecar
    }
}
