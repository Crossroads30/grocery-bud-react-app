import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'
import { clearList, editItem, getLocalStorage, removeItem } from './utils'

function App() {
	const [name, setName] = useState('')
	const [list, setList] = useState(getLocalStorage())
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
			showAlert(true, 'пожалуйста добавьте продукт', 'danger')
		} else if (name && isEditing) {
			// deal with edit
			setList(
        list.map(item => {
          if (item.id === editId) {
            return { ...item, title: name }
					}
					return item
				})
        )
      setName('')
      setEditId(null)
			setIsEditing(false)
      showAlert(true, 'исправлено!', 'success')
		} else {
			showAlert(true, 'продукт добавлен!', 'success')
			const newItem = { id: new Date().getTime().toString(), title: name }
			setList([...list, newItem])
		}
		setName('')
	}

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify([
		{id: 1, title: 'батон'},
		{id: 2, title: 'пол-хлеба'},
		{id: 3, title: 'сметана'},
		{id: 4, title: 'молоко'},
	]))
  }, [list])

	return (
		<section className='section-center'>
			<form className='grocery-form' onSubmit={handleSubmit}>
				{alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
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
					<List list={list} removeItem={removeItem} editItem={editItem} />
					<button onClick={clearList} type='button' className='clear-btn'>
						очистить список
					</button>
				</div>
			)}
		</section>
	)
}

export default App
