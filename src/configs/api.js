
const URL='https://nftinfinity.world:34825' // nips1.net:34815'

const API={
	API_TXS_STAKE : URL + '/queries/rows/transactions/typestr/STAKE' // /:offset/:limit/:orderkey/:orderval
		, API_USERS : URL + '/queries/rows/users/active/1' // /:offset/:limit/:orderkey/:orderval

}

export {
	API
}
