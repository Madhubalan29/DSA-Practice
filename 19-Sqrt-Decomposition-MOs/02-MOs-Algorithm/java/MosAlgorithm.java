import java.util.*;
public class MosAlgorithm { static int[] cnt=new int[1000005]; static int curAns=0;
    static void add(int x){if(cnt[x]++==0)curAns++;}
    static void rem(int x){if(--cnt[x]==0)curAns--;}
    public static void main(String[] args){int n=7;int[] a={1,2,1,3,1,2,1};int block=(int)Math.sqrt(n);
    int[][] queries={{1,5,0},{0,3,1},{2,6,2}};
    Arrays.sort(queries,(x,y)->x[0]/block!=y[0]/block?x[0]/block-y[0]/block:x[1]-y[1]);
    int cl=0,cr=-1;int[] ans=new int[3];
    for(int[] q:queries){while(cr<q[1])add(a[++cr]);while(cl>q[0])add(a[--cl]);while(cr>q[1])rem(a[cr--]);while(cl<q[0])rem(a[cl++]);ans[q[2]]=curAns;}
    for(int i=0;i<3;i++)System.out.println("Query "+i+": "+ans[i]);}}
