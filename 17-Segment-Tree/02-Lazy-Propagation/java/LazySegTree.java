public class LazySegTree { static long[] tree, lazy; static int n;
    static void push(int v,int l,int r){if(lazy[v]!=0){int m=(l+r)/2;tree[2*v]+=lazy[v]*(m-l+1);tree[2*v+1]+=lazy[v]*(r-m);lazy[2*v]+=lazy[v];lazy[2*v+1]+=lazy[v];lazy[v]=0;}}
    static void update(int v,int l,int r,int ql,int qr,long val){if(ql>r||qr<l)return;if(ql<=l&&r<=qr){tree[v]+=val*(r-l+1);lazy[v]+=val;return;}push(v,l,r);int m=(l+r)/2;update(2*v,l,m,ql,qr,val);update(2*v+1,m+1,r,ql,qr,val);tree[v]=tree[2*v]+tree[2*v+1];}
    static long query(int v,int l,int r,int ql,int qr){if(ql>r||qr<l)return 0;if(ql<=l&&r<=qr)return tree[v];push(v,l,r);int m=(l+r)/2;return query(2*v,l,m,ql,qr)+query(2*v+1,m+1,r,ql,qr);}
    public static void main(String[] args){n=5;tree=new long[4*n];lazy=new long[4*n];update(1,0,n-1,0,4,1);System.out.println(query(1,0,n-1,0,4));}}
