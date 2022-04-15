# Blockchain from Scratch

I have implemented the blockchain environment from scratch using javascript.

## Installation
Required packages & dependencies to install before starting the project
1. Crypto-js
  - CryptoJS is a growing collection of standard and secure cryptographic algorithms implemented in JavaScript using best practices and patterns. 
```bash
npm install crypto-js
```

## Code Implementation
1. Importing installed packages
```javascript
 const hash = require("crypto-js/sha256");
```

2. Create block class
 - Block class contains all the necessary attributes and methods:
  1. Attributes(variable)
     - index =  id of block in numerical format
     - timestamp = current time
     - data = message or data
     - previousHash = hash code of previous block node
     - nextHash = hash code of next block node
  2. Methods (Function)
     - generateHash() =  generate random hash code based on given index, timestamp and data
```javascript

 class Block {
 constructor(index, timestamp, data, previousHash = '') {
  this.index = index;
  this.timestamp = timestamp;
  this.data = data;
  this.previousHash = previousHash;
  this.nextHash = this.generateHash();
 }
 
 //generate random sha256 hashing
 generateHash() {
  return hash(this.index + this.timestamp + JSON.stringify(this.data)).toString();
 }
}
```

## Create BlockChain class
- The blockChain class represents the sequential interconnected block node when each node contains the hash code of the previous and next node. So, it helps to enhance the immutability of data. 
1. Attributes
   - chain = it is a 1D array that stores the list of the node object
2. Methods
   - getPrevBlock() = returns previous node object
   - getLatestBlock() = returns last node object
   - addNewBlock(data) = append new node to list (chain)
   - isChainValid() = check if each node is interconnected to each other

``` javascript
class BlockChain {

 constructor() {
  this.chain = [];
 }

 //create a new block
 defaultBlock() {}

 //get previous block
 getPrevBlock() {}

 //get latest block
 getLatestBlock() {}

 //add new block
 addNewBlock(data) {}

 //chain validation
 isChainValid() {}

}
```

## Proof-of-Work (Secure our blockchain against spammers)
- Before diving into Proof-of-Work, we must know the reason and important of it. 
- Proof-of-work is one such method that makes it too resource-intensive to try to overtake the network.
- It is decentralized and peer-to-peer by design, blockchains such as cryptocurrency networks require some way of achieving both consensus and security. 
- It enables Bitcoin transactions to to be confirmed and recorded without a central authority.
...


## License 
[Parbat Lama](https://parbat-5db79.web.app/)
