public class DigitDP { public static int findIntegers(int n){if(n==0)return 1;int[] fib=new int[32];fib[0]=1;fib[1]=2;for(int i=2;i<32;i++)fib[i]=fib[i-1]+fib[i-2];
    int res=0,prev=0;for(int i=30;i>=0;i--){if((n&(1<<i))!=0){res+=fib[i];if(prev==1){res--;break;}prev=1;}else prev=0;if(i==0)res++;}return res;}
    public static void main(String[] args){System.out.println(findIntegers(5));}}
