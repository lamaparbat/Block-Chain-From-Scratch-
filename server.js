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
  this.miningIterationCount = 0;
 }
 
 //generate random sha256 hashing
 generateHash() {
  return hash(this.index + this.timestamp + JSON.stringify(this.data) + this.miningIterationCount).toString();
 }

 //mining
 mineBlock(difficultyLevel) {
  while (this.nextHash.substring(0, difficultyLevel) != Array(difficultyLevel + 1).join("0")) {
   //count the no of mining iteration
   this.miningIterationCount++;
   
   //generate new hash code base on given difficulty level
   this.nextHash = this.generateHash();
  }
 }
 
}


//main block -> chain
class BlockChain {
 constructor() {
  this.chain = [this.defaultBlock()];
  this.difficultyLevel = 3;
 }

 //create a new block
 defaultBlock() {
  return new Block(0, new Date().toLocaleDateString(), { name: "parbat" });
 }

 //get previous block
 getPrevBlock() {
  return this.chain.length > 1 ? this.chain[this.chain.length-2] : this.chain[0];
 }

 //get latest block
 getLatestBlock() {
  return this.chain[this.chain.length - 1];
 }

 //add new block
 addNewBlock(block) {
  block.previousHash = this.getPrevBlock().nextHash;
  block.mineBlock(this.difficultyLevel);
  
  //append the block to the chain
  this.chain.push(block);
 }

 //chain validation
 isChainValid() {
  //iterate each block node & compare
  for (let i = 1; i < this.chain.length; i++) {
   let prevBlock = this.chain[i-1];
   let curBlock = this.chain[i];
   
   if (curBlock.previousHash != prevBlock.nextHash)
    return false;
  }

  //otherwise
  return true;
 }

}

//create instance of BlockChain
const Chain = new BlockChain();

// mining block1
console.log("Mining block 1.....");
Chain.addNewBlock(new Block(1, "jan 12 2021", { name: "ram" }))
console.log("Mining 1 succesfull !! " )
console.log(Chain.getLatestBlock())

// mining block1
console.log("Mining block 2.....");
Chain.addNewBlock(new Block(2, "jan 13 2022", { name: "muskan" }))
console.log(Chain.getLatestBlock())