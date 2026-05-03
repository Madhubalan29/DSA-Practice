import java.util.*;
public class LIS { public static int lengthOfLIS(int[] nums){List<Integer> tails=new ArrayList<>();for(int x:nums){int pos=Collections.binarySearch(tails,x);if(pos<0)pos=-(pos+1);if(pos==tails.size())tails.add(x);else tails.set(pos,x);}return tails.size();}
    public static void main(String[] args){System.out.println(lengthOfLIS(new int[]{10,9,2,5,3,7,101,18}));}}
