/* Implement Trie | LeetCode 208 | Tags: trie */
#include <bits/stdc++.h>
using namespace std;
struct TrieNode{TrieNode*ch[26]={};bool end=false;};
class Trie{TrieNode*root;public:Trie(){root=new TrieNode();}
void insert(string w){auto n=root;for(char c:w){if(!n->ch[c-'a'])n->ch[c-'a']=new TrieNode();n=n->ch[c-'a'];}n->end=true;}
bool search(string w){auto n=root;for(char c:w){if(!n->ch[c-'a'])return false;n=n->ch[c-'a'];}return n->end;}
bool startsWith(string p){auto n=root;for(char c:p){if(!n->ch[c-'a'])return false;n=n->ch[c-'a'];}return true;}};
int main(){Trie t;t.insert("apple");cout<<boolalpha<<t.search("apple")<<endl<<t.startsWith("app")<<endl<<t.search("app")<<endl;}
