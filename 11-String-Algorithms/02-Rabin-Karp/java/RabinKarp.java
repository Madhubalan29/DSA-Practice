public class RabinKarp {
    static final long MOD = (long)1e9 + 7, BASE = 31;
    public static int search(String text, String pattern) {
        int n = text.length(), m = pattern.length();
        if (m > n) return -1;
        long patHash = 0, txtHash = 0, power = 1;
        for (int i = 0; i < m; i++) {
            patHash = (patHash + (pattern.charAt(i) - 'a' + 1) * power) % MOD;
            txtHash = (txtHash + (text.charAt(i) - 'a' + 1) * power) % MOD;
            if (i < m - 1) power = power * BASE % MOD;
        }
        for (int i = 0; i <= n - m; i++) {
            if (patHash == txtHash && text.substring(i, i + m).equals(pattern)) return i;
            if (i < n - m) {
                txtHash = ((txtHash - (text.charAt(i) - 'a' + 1)) % MOD + MOD) % MOD;
                // simplified: recalculate for next window
                txtHash = 0; long p = 1;
                for (int j = 0; j < m; j++) { txtHash = (txtHash + (text.charAt(i+1+j)-'a'+1)*p) % MOD; p = p*BASE%MOD; }
            }
        }
        return -1;
    }
    public static void main(String[] args) { System.out.println("Found at: " + search("hello world", "world")); }
}
