import React, { useState } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { FcCheckmark } from 'react-icons/fc'
import { GiCircle } from 'react-icons/gi'
import { ImCheckmark } from 'react-icons/im'

function GroceryItem({ id, title, editItem, removeItem }) {
	const [isMark, setIsMark] = useState(null)
	const [showMarks, setShowMarks] = useState(false)
	return (
		<article className='grocery-item'>
			<div className='title-container'>
				<button
					onClick={() => {
						setShowMarks(!showMarks)
					}}
					className='mark-btn'
					type='button'
				>
					{showMarks ? (
						<ImCheckmark style={{ color: '#3d9e3d' }} />
					) : (
						<GiCircle />
					)}
				</button>
				<p className={showMarks ? 'title complete' : 'title'}>{title}</p>
			</div>
			<div className='btn-container'>
				<button onClick={() => editItem(id)} className='edit-btn' type='button'>
					<FaEdit />
				</button>
				<button
					onClick={() => removeItem(id)}
					className='delete-btn'
					type='button'
				>
					<FaTrash />
				</button>
			</div>
		</article>
	)
}

export default GroceryItem
