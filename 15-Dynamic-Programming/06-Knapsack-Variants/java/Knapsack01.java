public class Knapsack01 { public static int knapsack(int W,int[] wt,int[] val){int n=wt.length;int[] dp=new int[W+1];
    for(int i=0;i<n;i++)for(int w=W;w>=wt[i];w--)dp[w]=Math.max(dp[w],dp[w-wt[i]]+val[i]);return dp[W];}
    public static void main(String[] args){System.out.println(knapsack(7,new int[]{1,3,4,5},new int[]{1,4,5,7}));}}
