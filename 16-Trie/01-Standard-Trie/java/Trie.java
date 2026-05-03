public class Trie { int[][] ch; boolean[] end; int cnt=0;
    Trie(){ch=new int[200005][26];end=new boolean[200005];cnt=0;java.util.Arrays.fill(ch[0],-1);}
    void insert(String w){int n=0;for(char c:w.toCharArray()){int i=c-'a';if(ch[n][i]==-1){ch[n][i]=++cnt;java.util.Arrays.fill(ch[cnt],-1);}n=ch[n][i];}end[n]=true;}
    boolean search(String w){int n=0;for(char c:w.toCharArray()){int i=c-'a';if(ch[n][i]==-1)return false;n=ch[n][i];}return end[n];}
    public static void main(String[] args){Trie t=new Trie();t.insert("apple");System.out.println(t.search("apple"));}}
