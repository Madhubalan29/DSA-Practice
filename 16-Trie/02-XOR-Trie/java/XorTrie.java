public class XorTrie { int[][] ch; int cnt=0;
    XorTrie(){ch=new int[3200005][2];java.util.Arrays.fill(ch[0],-1);}
    void insert(int n){int node=0;for(int i=31;i>=0;i--){int bit=(n>>i)&1;if(ch[node][bit]==-1){ch[node][bit]=++cnt;java.util.Arrays.fill(ch[cnt],-1);}node=ch[node][bit];}}
    int maxXor(int n){int node=0,res=0;for(int i=31;i>=0;i--){int bit=(n>>i)&1;if(ch[node][1-bit]!=-1){res|=(1<<i);node=ch[node][1-bit];}else node=ch[node][bit];}return res;}
    public static void main(String[] args){XorTrie t=new XorTrie();int[] nums={3,10,5,25,2,8};for(int x:nums)t.insert(x);int ans=0;for(int x:nums)ans=Math.max(ans,t.maxXor(x));System.out.println("Max XOR: "+ans);}}
