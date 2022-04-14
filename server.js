//import packages
const hash = require("crypto-js/sha256");

//block structure
class Block {
 constructor(index, timestamp, data, previousHash = '') {
  this.index = index;
  this.timestamp = timestamp;
  this.data = data;
  this.previousHash = previousHash;
  this.nextHash = this.generateHash();
 }

 generateHash() {
  return hash(this.index + this.timestamp + JSON.stringify(this.data)).toString();
 }
}


//main block -> chain
class BlockChain {
 constructor() {
  this.chain = [this.defaultBlock()];
 }

 //create a new block
 defaultBlock() {
  return new Block(0, new Date().toLocaleDateString(), { name: "parbat" });
 }

 //get previous block
 getPrevBlock() {
  return this.chain[this.chain.length - 2];
 }

 //get latest block
 getLatestBlock() {
  return this.chain[this.chain.length - 1];
 }

 //add new block
 addNewBlock(data) {
  this.previousHash = this.getLatestBlock().nextHash;
  this.index = this.getLatestBlock().index + 1
  this.chain.push(new Block(this.index, new Date().toLocaleDateString(), data, this.previousHash));
 }

 //chain validation
 isChainValid(ownerBlock) {
  this.ownerBlock = ownerBlock;

  //iterate each block node & compare
  for (let i = 0; i < this.chain.length; i++) {
   let curBlock = this.chain[i];
   if (curBlock.previousHash === this.ownerBlock.nextHash)
    return true;
  }

  //otherwise
  return false;
 }

}

//create instance of BlockChain
const node = new BlockChain();

//add new node to chain
node.addNewBlock({ name: "hari" });
node.addNewBlock({ name: "sita" });
node.addNewBlock({ name: "maya" });

//check if a certain block node is valid ?
console.log(node.isChainValid(node.chain[1]));

