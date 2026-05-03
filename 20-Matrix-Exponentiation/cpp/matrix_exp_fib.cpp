/* Fibonacci using Matrix Exponentiation | Time: O(log n) */
#include <bits/stdc++.h>
using namespace std;
typedef long long ll;
typedef vector<vector<ll>> Matrix;
const ll MOD=1e9+7;
Matrix multiply(Matrix& A,Matrix& B){int n=A.size();Matrix C(n,vector<ll>(n,0));
for(int i=0;i<n;i++)for(int k=0;k<n;k++)for(int j=0;j<n;j++)C[i][j]=(C[i][j]+A[i][k]*B[k][j])%MOD;return C;}
Matrix matPow(Matrix A,ll p){int n=A.size();Matrix R(n,vector<ll>(n,0));for(int i=0;i<n;i++)R[i][i]=1;
while(p>0){if(p&1)R=multiply(R,A);A=multiply(A,A);p>>=1;}return R;}
ll fib(ll n){if(n<=1)return n;Matrix M={{1,1},{1,0}};auto R=matPow(M,n-1);return R[0][0];}
int main(){cout<<"fib(10)="<<fib(10)<<endl;cout<<"fib(50)="<<fib(50)<<endl;}
