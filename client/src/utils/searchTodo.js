export const searchTodoAndSetComplete = (todoList, id, isComplete) => {
	let indexl = 0
	let indexr = todoList.length - 1
	let currentlyindex = Math.floor((indexr + indexl) / 2)
	while (indexl < indexr) {
		if (todoList[currentlyindex].Id === id){
			todoList[currentlyindex].IsComplete = isComplete
			break
		}else if (todoList[currentlyindex].Id < id){
			indexr = currentlyindex - 1
		}else{
			indexl = currentlyindex + 1
		}
		currentlyindex = Math.floor((indexr + indexl) / 2)
	}
	if (todoList[currentlyindex].Id === id) {
		todoList[currentlyindex].IsComplete = isComplete
	}
	return todoList
}