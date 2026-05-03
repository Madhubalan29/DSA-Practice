import java.util.*;
public class NonOverlapping { public static int eraseOverlapIntervals(int[][] intervals){Arrays.sort(intervals,(a,b)->a[1]-b[1]);
    int cnt=0,end=Integer.MIN_VALUE;for(int[] i:intervals){if(i[0]>=end)end=i[1];else cnt++;}return cnt;}
    public static void main(String[] args){System.out.println(eraseOverlapIntervals(new int[][]{{1,2},{2,3},{3,4},{1,3}}));}}
