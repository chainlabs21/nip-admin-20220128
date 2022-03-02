
const LOGGER=console.log
const strDot = (str, startNum, endNum = 0) => {
  if (!str) return ''
  return `${str.substr(0, startNum)}...${str.substr(str.length - endNum)}`;
};

export { LOGGER 
	, strDot
}
