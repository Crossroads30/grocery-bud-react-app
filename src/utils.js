export const getLocalStorage = () => {
	let list = localStorage.getItem('list')
	if (list) {
		return JSON.parse(localStorage.getItem('list'))
	} else {
		return []
	}
}

export const showAlert = (show = false, msg = '', type = '') => {
	setAlert({ show, msg, type }) //(ES6 feature) if value is equal to param we just can skip this construction: 'show: show, msg: msg, type: type', and pass only one word
}

export const clearList = () => {
	showAlert(true, 'список очищен!', 'danger')
	setList([])
}

export const removeItem = id => {
	const newList = list.filter(item => item.id !== id)
	showAlert(true, 'продукт удален!', 'danger')
	// setList(list.filter(item => item.id !== id))
	setList(newList)
}

export const editItem = id => {
	const editingItem = list.find(item => item.id === id)
	setIsEditing(true)
	setEditId(id)
	setName(editingItem.title)
}
