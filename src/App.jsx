import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
	const [name, setName] = useState('')
	const [list, setList] = useState([])
	const [isEditing, setIsEditing] = useState(false)
	const [editId, setEditId] = useState(null)
	const [alert, setAlert] = useState({
		show: false,
		msg: '',
		type: '',
	})

	const handleSubmit = e => {
		e.preventDefault()
		if (!name) {
			// show alert
			showAlert(true, 'Пожалуйста добавьте продукт', 'danger')
		} else if (name && isEditing) {
			// deal with edit
		} else {
			showAlert(true, 'Продукт добавлен!', 'success')
			const newItem = { id: new Date().getTime().toString(), title: name }
			setList([...list, newItem])
		}
		setName('')
	}
	// console.log(list)

	const showAlert = (show = false, msg = '', type = '') => {
		setAlert({ show, msg, type }) //(ES6 feature) if value is equal to param we just can skip this construction: 'show: show, msg: msg, type: type', and pass only one word
	}

	const removeItem = id => {
		const newList = list.filter(item => item.id !== id)
		setList(newList)
	}

	return (
		<section className='section-center'>
			<form className='grocery-form' onSubmit={handleSubmit}>
				{alert.show && <Alert {...alert} removeAlert={showAlert} />}
				<h3>список продуктов</h3>
				<div className='form-control'>
					<input
						placeholder='Добавьте продукты'
						type='text'
						className='grocery'
						value={name}
						onChange={e => setName(e.target.value)}
					/>
					<button className='submit-btn' type='submit'>
						{isEditing ? 'исправить' : 'добавить'}
					</button>
				</div>
			</form>
			{list.length > 0 && (
				<div className='grocery-container'>
					<List list={list} removeItem={removeItem} />
					<button
						onClick={() => setList([])}
						type='button'
						className='clear-btn'
					>
						очистить список
					</button>
				</div>
			)}
		</section>
	)
}

export default App
