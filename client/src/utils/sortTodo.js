export const compareTodo = (a, b) => {
	if (a.isComplete > b.isComplete){
		return 1
	}else if (a.isComplete < b.isComplete){
		return -1
	}
	return 0
}