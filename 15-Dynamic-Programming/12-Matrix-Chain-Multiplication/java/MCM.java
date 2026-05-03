public class MCM { public static int mcm(int[] d){int n=d.length-1;int[][] dp=new int[n][n];
    for(int len=2;len<=n;len++)for(int i=0;i<=n-len;i++){int j=i+len-1;dp[i][j]=Integer.MAX_VALUE;
    for(int k=i;k<j;k++)dp[i][j]=Math.min(dp[i][j],dp[i][k]+dp[k+1][j]+d[i]*d[k+1]*d[j+1]);}return dp[0][n-1];}
    public static void main(String[] args){System.out.println(mcm(new int[]{40,20,30,10,30}));}}
