import java.util.*;
public class ConvexHull { static long cross(long[] O,long[] A,long[] B){return(A[0]-O[0])*(B[1]-O[1])-(A[1]-O[1])*(B[0]-O[0]);}
    public static void main(String[] args){long[][] pts={{0,0},{1,1},{2,2},{2,0},{0,2},{1,0}};Arrays.sort(pts,(a,b)->a[0]!=b[0]?Long.compare(a[0],b[0]):Long.compare(a[1],b[1]));
    int n=pts.length,k=0;long[][] hull=new long[2*n][];for(int i=0;i<n;i++){while(k>=2&&cross(hull[k-2],hull[k-1],pts[i])<=0)k--;hull[k++]=pts[i];}
    for(int i=n-2,t=k+1;i>=0;i--){while(k>=t&&cross(hull[k-2],hull[k-1],pts[i])<=0)k--;hull[k++]=pts[i];}
    for(int i=0;i<k-1;i++)System.out.print("("+hull[i][0]+","+hull[i][1]+") ");}}
