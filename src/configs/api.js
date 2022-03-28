const URL = 'https://nftinfinity.world:34825' // nips1.net:34815'

const API = {
  API_TXS_STAKE: URL + '/queries/rows/transactions/typestr/STAKE', // /:offset/:limit/:orderkey/:orderval
  API_USERS: URL + '/queries/rows/users/active/1', // /:offset/:limit/:orderkey/:orderval
  API_COMMONITEMS: URL + '/queries/rows',
  API_COUNT: URL + '/queries/count',
  API_BALLOT: URL + '/queries/rows/jsonobject/settings/key_/value_',
  API_PUTTIME: URL + '/queries/update-or-create-rows/settings',
  API_RECEIVABLES: `${URL}/queries/rows/receivables/active/1`,
  API_LOGSALES: `${URL}/queries/rows/logsales/active/1`,
  API_DELINQUENCIES: `${URL}/queries/rows/delinquencies/active/1`,
  API_LOGDELINQUENTS: `${URL}/queries/rows/logdelinquents/active/1`,
}

export { API }

// const URL='http://nip s1.net:348 15'
// const URL='http://3.35. 117.87:34 815'
/**  const API={
		API_MAX	: URL + `/queries/max` // /:tablename/:fieldname
	, API_TXS	: URL + '/transactions' // /:txhash
	, API_TICKERS : URL + '/tickers'
	, API_USERINFO : URL + '/users/info'
	, API_TOGGLE_FAVORITE : URL + '/favorites/toggle'
	, API_LOGIN : URL + '/users/login'

	, API_EMAIL_REQUEST : URL + '/signup/email/request'
	, API_SIGNUP : URL + '/signup/signup'
	, API_QUERY_REFERER : URL + '/queries/singlerow' // /:tablename/:fieldname/:fieldval
	, API_QUERY_USERADDRESS : URL + '/queries/singlerow' 
	, API_PREMIUMITEMS : URL + '/queries/rows'
	, API_COMMONITEMS  : URL + '/queries/rows'
	, API_ITEMDETAIL : URL + '/items/item' // /:itemid
}
export { 
	API
}
*/
