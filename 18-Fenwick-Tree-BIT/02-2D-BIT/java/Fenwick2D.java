public class Fenwick2D { static int[][] bit; static int N,M;
    static void update(int x,int y,int v){for(int i=x;i<=N;i+=i&(-i))for(int j=y;j<=M;j+=j&(-j))bit[i][j]+=v;}
    static int query(int x,int y){int s=0;for(int i=x;i>0;i-=i&(-i))for(int j=y;j>0;j-=j&(-j))s+=bit[i][j];return s;}
    public static void main(String[] args){N=M=3;bit=new int[N+1][M+1];update(1,1,1);update(2,2,2);update(3,3,3);System.out.println(query(3,3));}}
