/* Maximum XOR using Trie | LeetCode 421 | Tags: xor-trie, bit-trie */
#include <bits/stdc++.h>
using namespace std;
struct TrieNode{TrieNode*ch[2]={};};
class XorTrie{TrieNode*root;public:XorTrie(){root=new TrieNode();}
void insert(int n){auto node=root;for(int i=31;i>=0;i--){int bit=(n>>i)&1;if(!node->ch[bit])node->ch[bit]=new TrieNode();node=node->ch[bit];}}
int maxXor(int n){auto node=root;int res=0;for(int i=31;i>=0;i--){int bit=(n>>i)&1;if(node->ch[1-bit]){res|=(1<<i);node=node->ch[1-bit];}else node=node->ch[bit];}return res;}};
int main(){XorTrie t;vector<int>nums={3,10,5,25,2,8};for(int x:nums)t.insert(x);
int ans=0;for(int x:nums)ans=max(ans,t.maxXor(x));cout<<"Max XOR: "<<ans<<endl;} // 28
