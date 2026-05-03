public class KMP {
    static int[] buildLPS(String pattern) {
        int m = pattern.length();
        int[] lps = new int[m];
        int len = 0, i = 1;
        while (i < m) {
            if (pattern.charAt(i) == pattern.charAt(len)) lps[i++] = ++len;
            else if (len > 0) len = lps[len - 1];
            else lps[i++] = 0;
        }
        return lps;
    }
    public static int search(String text, String pattern) {
        int[] lps = buildLPS(pattern);
        int i = 0, j = 0;
        while (i < text.length()) {
            if (text.charAt(i) == pattern.charAt(j)) { i++; j++; }
            if (j == pattern.length()) return i - j;
            else if (i < text.length() && text.charAt(i) != pattern.charAt(j)) {
                if (j > 0) j = lps[j - 1]; else i++;
            }
        }
        return -1;
    }
    public static void main(String[] args) {
        System.out.println("Found at: " + search("aaaxaaaa", "aaaa")); // 4
    }
}
