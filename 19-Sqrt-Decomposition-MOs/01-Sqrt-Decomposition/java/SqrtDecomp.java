public class SqrtDecomp { public static void main(String[] args){int n=9;int[] a={1,2,3,4,5,6,7,8,9};int block=(int)Math.sqrt(n);
    int[] blocks=new int[(n+block-1)/block];for(int i=0;i<n;i++)blocks[i/block]+=a[i];
    int l=2,r=7,sum=0;for(int i=l;i<=r;){if(i%block==0&&i+block-1<=r){sum+=blocks[i/block];i+=block;}else{sum+=a[i];i++;}}
    System.out.println("Sum["+l+","+r+"]: "+sum);}}
