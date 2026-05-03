public class MatrixExpFib { static final long MOD=(long)1e9+7;
    static long[][] multiply(long[][] A,long[][] B){int n=A.length;long[][] C=new long[n][n];
    for(int i=0;i<n;i++)for(int k=0;k<n;k++)for(int j=0;j<n;j++)C[i][j]=(C[i][j]+A[i][k]*B[k][j])%MOD;return C;}
    static long[][] matPow(long[][] A,long p){int n=A.length;long[][] R=new long[n][n];for(int i=0;i<n;i++)R[i][i]=1;
    while(p>0){if((p&1)==1)R=multiply(R,A);A=multiply(A,A);p>>=1;}return R;}
    static long fib(long n){if(n<=1)return n;long[][] M={{1,1},{1,0}};return matPow(M,n-1)[0][0];}
    public static void main(String[] args){System.out.println("fib(10)="+fib(10));System.out.println("fib(50)="+fib(50));}}
