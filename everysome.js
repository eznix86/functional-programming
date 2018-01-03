//this check if EVERY content in the array is true to the condition, and if SOME Is true to the condition
//respectively if EVERY returns true means that all array values respects the composition condition, if return true in case of SOME
// this means it has SOME values which is valid

function checkUsersValid(goodUsers){
	return function allUsersValid(submittedUsers){
		return submittedUsers.every(s =>
			goodUsers.some(g => g.id === s.id)
	)}
}

module.exports = checkUsersValid