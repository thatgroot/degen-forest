// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';
import '@openzeppelin/contracts/utils/Counters.sol';

contract NFT is ERC721URIStorage {
	using Counters for Counters.Counter;
	Counters.Counter private _tokenIds;

	address contract_address;

	// @param owner: is the address of the contract that is deployed
	/**
	 *
	 * the constructor is called when the contract is deployed and called by
	 * the owner of the contract e.g
	 * NFT nft = new NFT();
	 * the owner of the contract is the address of the account that deployed the contract
	 */
	constructor(address mem_contract_address) ERC721('Being Fire', 'BFR') {
		contract_address = mem_contract_address;
	}

	// function to createToken
	// @param to: is the address of the user who is going to receive the token i.e
	// @param tokenURI: is the link to the metadata of the token
	function createToken(string memory tokenURI) public returns (uint256) {
		// increment the token id ie
		_tokenIds.increment();
		// get the current token id
		uint256 new_token_id = _tokenIds.current();
		// mint the token to the user means: create the token, assign the token to the user
		_mint(msg.sender, new_token_id);
		// set the tokenURI ie  set the metadata of the token
		// meta data includes:  name, description, image
		_setTokenURI(new_token_id, tokenURI);
		setApprovalForAll(contract_address, true);
		return new_token_id;
	}
}
