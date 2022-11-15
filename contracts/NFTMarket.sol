//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/utils/Counters.sol';
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
//prevents re-entrancy attacks
import '@openzeppelin/contracts/security/ReentrancyGuard.sol';

contract NFTMarket is ReentrancyGuard {
	using Counters for Counters.Counter;
	Counters.Counter private _market_items; //total number of items ever created
	Counters.Counter private _items_sold; //total number of items sold
	// listing price
	uint256 listing_price = 0.025 ether;
	// market_item
	struct MarketItem {
		uint256 itemId;
		address contract_address;
		uint256 tokenId;
		address payable seller;
		address payable owner;
		uint256 price;
		bool sold;
		bool present;
	}

//
	event MarketItemCreated(
		uint256 indexed itemId,
		address indexed contract_address,
		uint256 indexed tokenId,
		address seller,
		address owner,
		uint256 price,
		bool sold,
		bool present
	);

	mapping(uint256 => MarketItem) private market_item_id;

	function createItem(
		address contract_address,
		uint256 token_id,
		uint256 price
	) public payable nonReentrant {
		// check if the price is greater than 0
		require(price > 0, 'Price must be greater than 0');
		require(msg.value == listing_price, 'Price must be equal to 0.0025');
		require(ERC721(contract_address).ownerOf(token_id) == msg.sender, 'You must own the token');

		_market_items.increment();
		uint256 item_id = _market_items.current();

		market_item_id[token_id] = MarketItem(
			item_id,
			contract_address,
			token_id,
			payable(msg.sender),
			payable(address(0)),
			price,
			false,
			true
		);
		// transfer the ownership of the nft to the contract itself
		ERC721(contract_address).transferFrom(msg.sender, address(this), token_id);

		// log the transaction
		emit MarketItemCreated(
			_market_items.current(),
			contract_address,
			token_id,
			msg.sender,
			address(0),
			price,
			false,
			true
		);
	}
}
