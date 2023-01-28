import axios from 'axios';
import { addFirestoreData, getFirestoreData } from './firebase';

export async function getNftStats(contracts: NftPortsContract[]) {
	console.log('contracts', contracts);

	const statistics_array = await Promise.all(
		contracts.map(async (contract: NftPortsContract) => {
			setTimeout(() => {
				console.log('waited 100ms');
			}, 500);

			const options = {
				method: 'GET',
				url: `https://api.nftport.xyz/v0/transactions/stats/${contract.contract_address}`,
				params: { chain: 'ethereum' },
				headers: {
					accept: 'application/json',
					Authorization: '2e36ca91-4bbf-4e01-be1c-fe179a65a4c3'
				}
			};

			console.log('options', options);
			try {
				const response = await axios.request(options);
				if (response.status === 429) {
					//
					return {
						...contract,
						stats: {}
					};
				} else {
					const res_data = response.data;
					return {
						...contract,
						stats: res_data?.statistics
					};
				}
			} catch (error: any) {
				console.log('stats error', JSON.stringify(error));
				if (error.status === '429') console.log('stats error', JSON.stringify(error));
				return {
					...contract,
					stats: {}
				};
			}
		})
	).then((dataArray) => {
		return dataArray;
	});
	console.log('the stats data', statistics_array);
	return statistics_array;
}
export async function getTopNFTContracts(
	page_size = 10,
	page_number = 1,
	period = '24h',
	order_by = 'volume',
	chain = 'ethereum'
): Promise<any> {
	const options = {
		method: 'GET',
		url: 'https://api.nftport.xyz/v0/contracts/top',
		params: {
			page_size,
			page_number,
			period,
			order_by,
			chain: [chain]
		},
		headers: {
			accept: 'application/json',
			Authorization: '3bd2d1ae-705e-44cc-8154-9ffc1d7d8bff'
		}
	};

	const res = await axios
		.request(options)
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			console.error(error);
		});

	const contracts: Array<NftPortsContract> = res.contracts;

	const firestore_data = await getFirestoreData();

	// check if stats_data object is empty
	// get the hours difference between current time and  stats_data[0].data.created_at (milliseconds)
	console.log('firestore_data', firestore_data);
	const stats_data = firestore_data;
	let data = {};
	if (firestore_data.length > 0) {
		const created_hours = Math.floor(
			(new Date().getTime() - parseInt(firestore_data[0].data.created_at)) / 1000 / 60 / 60
		);
		console.log('created_hours', created_hours, 'stats_data', stats_data);
		if (created_hours > 3) {
			const _data = await getNftStats(contracts);
			console.log('created_hours _data', _data);
			addFirestoreData(_data);
			data = {
				_data
			};
		}
		data = {
			stats_data
		};
	} else {
		const _data = await getNftStats(contracts);
		console.log('_data', JSON.stringify(_data));
		addFirestoreData(_data);
		data = _data;
	}
	console.log('the firestore stats data', data);

	return {
		data
	};
}
