const LOGGER = console.log
const strDot = (str, startNum, endNum = 0) => {
  if (!str) return ''
  return `${str.substr(0, startNum)}...${str.substr(str.length - endNum)}`
}

const getmyaddress = (_) => {
  /**  const walletConnector = new NodeWalletConnect(
    {
      bridge: "https://bridge.walletconnect.org", // Required
    },
    {
      clientMeta: {
        description: "WalletConnect NodeJS Client",
        url: "https://nodejs.org/en/",
        icons: ["https://nodejs.org/static/images/logo.svg"],
        name: "WalletConnect",
      },
    }
  );

  if (walletConnector.connected) {
    return walletConnector._accounts[0];
  } else { */
  window.ethereum &&
    window.ethereum.selectedAddress &&
    LOGGER(window.ethereum.selectedAddress)
  return window.ethereum ? window.ethereum.selectedAddress : null
  //  }
}

export { LOGGER, strDot, getmyaddress }
