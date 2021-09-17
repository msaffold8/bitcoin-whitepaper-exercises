"use strict";

var crypto = require("crypto"); //npm install

// The Power of a Smile
// by Tupac Shakur
var poem = [
	"The power of a gun can kill",
	"and the power of fire can burn",
	"the power of wind can chill",
	"and the power of a mind can learn",
	"the power of anger can rage",
	"inside until it tears u apart",
	"but the power of a smile",
	"especially yours can heal a frozen heart",
];

//blockchain object witch has blocks 
var Blockchain = {
	blocks: [],
};

// Genesis block
Blockchain.blocks.push({
	index: 0,
	hash: "000000",
	data: "",
	timestamp: Date.now(),
});

// TODO: insert each line into blockchain

//use block to spit out data 
for (let line of poem) { // poem array of strings
	
	createBlock(line) // line is the data


}

//create a function called createBlock() which inclues:
//`index``prevHash``data``timestamp``hash`

//create the block then hash it 
function createBlock(data) {
	let block = {
		index: Blockchain.blocks.length,
		prevhash: Blockchain.blocks[Blockchain.blocks.length -1].hash, 
		data: data,
		timestamp: Date.now()
		//hash represents this data in the block 
	}
	// once block is created, take elements and hash 
	block.hash = blockHash(block)  
	//This block's hash is equal to block {} above
	//provides the seal  

	// put block on the blockchain 
	Blockchain.blocks.push(block) // push in newly created block 
	console.log(block)
	return block
}
//create a block for each line of poem 




function verifyChain(data) {
	let block = {
		index: Blockchain.blocks.length,
		prevhash: Blockchain.blocks[Blockchain.blocks.length -1].hash, 
		data: data,
		timestamp: Date.now()
		//hash represents this data in the block 
	}
	// once block is created, take elements and hash 
	block.hash = blockHash(block)  
	//This block's hash is equal to block {} above
	//provides the seal  

	// put block on the blockchain 
	Blockchain.blocks.push(block) // push in newly created block 
	console.log(block)
	return block
}

//series of verifying blocks after printing 
console.log(`Blockchain is valid: ${verifyChain(Blockchain)}`);
if(data === "000000") {
	return true 
}

// **********************************

//Grabbing info from block(bl) and returning the Hash  
function blockHash(bl) {

	let block = JSON.stringify(bl) // convert data into string 
	return crypto.createHash("sha256").update(
		// TODO: use block data to calculate hash
		// Build program that can work with whatever it is given 
		//bl represents block 
		//(`index`,`prevHash`,`data`,`timestamp`)
		// `${bl.index};${bl.prevHash};${bl.data};${bl.timestamp};` - this is another way to convert the data into a string. 
		block
	).digest("hex");
}



// crypto is a library. native to node.
