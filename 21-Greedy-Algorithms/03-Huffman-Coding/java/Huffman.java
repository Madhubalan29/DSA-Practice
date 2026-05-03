public class JumpGame { public static int jump(int[] nums){int jumps=0,curEnd=0,far=0;
    for(int i=0;i<nums.length-1;i++){far=Math.max(far,i+nums[i]);if(i==curEnd){jumps++;curEnd=far;}}return jumps;}
    public static void main(String[] args){System.out.println(jump(new int[]{2,3,1,1,4}));}}
