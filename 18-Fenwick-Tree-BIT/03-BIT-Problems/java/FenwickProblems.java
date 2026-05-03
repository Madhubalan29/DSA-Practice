public class FenwickTree { static int[] bit; static int n;
    static void update(int i,int d){for(;i<=n;i+=i&(-i))bit[i]+=d;}
    static int query(int i){int s=0;for(;i>0;i-=i&(-i))s+=bit[i];return s;}
    static int rangeQuery(int l,int r){return query(r)-query(l-1);}
    public static void main(String[] args){n=6;bit=new int[n+1];int[] a={1,3,5,7,9,11};for(int i=0;i<n;i++)update(i+1,a[i]);System.out.println("Sum[2,4]: "+rangeQuery(2,4));}}
