public class LineIntersection { static double cross(double[] O,double[] A,double[] B){return(A[0]-O[0])*(B[1]-O[1])-(A[1]-O[1])*(B[0]-O[0]);}
    static boolean intersects(double[] p1,double[] q1,double[] p2,double[] q2){
    double d1=cross(p2,q2,p1),d2=cross(p2,q2,q1),d3=cross(p1,q1,p2),d4=cross(p1,q1,q2);
    return((d1>0&&d2<0)||(d1<0&&d2>0))&&((d3>0&&d4<0)||(d3<0&&d4>0));}
    public static void main(String[] args){System.out.println(intersects(new double[]{0,0},new double[]{5,5},new double[]{0,5},new double[]{5,0}));}}
