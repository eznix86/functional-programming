//help into creating an object YAY  

module.exports = function countWords (inputWords){
	
	return inputWords.reduce((acc, cur) =>{
		acc[cur] = (acc[cur] == null)? 1 : acc[cur] + 1; // can use ++countMap[word] || 1 
  		return acc;
}, {});
}