import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
	const [name, setName] = useState('')
	const [list, setList] = useState([])
	const [isEditing, setIsEditing] = useState(false)
	const [editId, setEditId] = useState(null)
	const [alert, setAlert] = useState({ show: false, msg: '', type: '' })

	const handleSubmit = e => {
		e.preventDefault()
		if (!name) {
			// show alert
		} else if (name && isEditing) {
			// deal with edit
		} else {
			const newItem = { id: new Date().getTime().toString(), title: name }
			setList([...list, newItem])
		}
		setName('')
	}
	console.log(list)

	return (
		<section className='section-center'>
			<form className='grocery-form' onSubmit={handleSubmit}>
				{alert.show && <Alert />}
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
					<List list={list} />
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
