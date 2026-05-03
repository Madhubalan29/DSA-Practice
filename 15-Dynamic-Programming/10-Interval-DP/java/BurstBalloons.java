import java.util.*;
public class BurstBalloons { public static int maxCoins(int[] nums){int n=nums.length+2;int[] a=new int[n];a[0]=a[n-1]=1;System.arraycopy(nums,0,a,1,nums.length);
    int[][] dp=new int[n][n];for(int len=2;len<n;len++)for(int i=0;i+len<n;i++){int j=i+len;for(int k=i+1;k<j;k++)dp[i][j]=Math.max(dp[i][j],dp[i][k]+dp[k][j]+a[i]*a[k]*a[j]);}return dp[0][n-1];}
    public static void main(String[] args){System.out.println(maxCoins(new int[]{3,1,5,8}));}}
