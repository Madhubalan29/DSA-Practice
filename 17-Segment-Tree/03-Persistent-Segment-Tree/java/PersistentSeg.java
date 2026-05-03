public class SegmentTree { static int[] tree; static int n;
    static void build(int[] a,int v,int l,int r){if(l==r){tree[v]=a[l];return;}int m=(l+r)/2;build(a,2*v,l,m);build(a,2*v+1,m+1,r);tree[v]=tree[2*v]+tree[2*v+1];}
    static int query(int v,int l,int r,int ql,int qr){if(ql>r||qr<l)return 0;if(ql<=l&&r<=qr)return tree[v];int m=(l+r)/2;return query(2*v,l,m,ql,qr)+query(2*v+1,m+1,r,ql,qr);}
    public static void main(String[] args){int[] a={1,3,5,7,9,11};n=a.length;tree=new int[4*n];build(a,1,0,n-1);System.out.println("Sum[1,3]: "+query(1,0,n-1,1,3));}}
