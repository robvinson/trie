// Ref: http://codetype.wordpress.com/2012/09/01/cracking-the-coding-interview-javascript-trie/
function BinTrie() {
	this.root = new BinTrieNode();
};

/*
 * Add a binary string to the trie
 * 
 * binstr: a string composed of 0s and 1s
 */
BinTrie.prototype.add = function(binstr) {
	var current = this.root;

	// for each item in the binstr check if it's
	// already in the trie.  If it's not add it.
	for(var i=0; i<binstr.length; i++) {
		var strValue = parseInt(binstr[i]);
		if (current.children[strValue] === undefined) {
			current.children[strValue] = new BinTrieNode();
		}
		current = current.children[strValue];
	}
	current.isReal = 1; //set end of entry
	current.value = binstr;
};


/* 
 * pre-order traversal printing out values
 */
BinTrie.prototype.preOrderDump = function(node, str) {
	if (node.isReal === 1) { console.log(str); }
	if ((node.children[0] === undefined) && (node.children[1] === undefined)) {
		return; //we reached a leaf node
	}
	if (node.children[0]) { this.preOrderDump(node.children[0], str + "0"); }
	if (node.children[1]) { this.preOrderDump(node.children[1], str + "1"); }
};

BinTrie.prototype.dump = function() {
	this.preOrderDump(this.root, "");
};

/* 
 * pre-order traversal printing out values
 */
BinTrie.prototype.preOrderDump2 = function(node) {
	if (node.isReal === 1) { console.log(node.value); }
	if ((node.children[0] === undefined) && (node.children[1] === undefined)) {
		return; //we reached a leaf node
	}
	if (node.children[0]) { this.preOrderDump(node.children[0]); }
	if (node.children[1]) { this.preOrderDump(node.children[1]); }
};


function BinTrieNode() {
	this.children = new Array(2);
	this.isReal = 0; //set to false by default
}
