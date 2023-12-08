export const compareTodo = (a, b) => {
	if (a.IsComplete > b.IsComplete){
		return 1
	}else if (a.IsComplete < b.IsComplete){
		return -1
	}
	return 0
}