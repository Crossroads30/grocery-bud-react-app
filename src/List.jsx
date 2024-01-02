import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({ list }) => {
	return (
		<div className='grocery-list'>
			{list.map((item) => {
        const {id, title} = item
				return (
					<article key={id} className='grocery-item'>
						<p className='title'>{title}</p>
						<div className='btn-container'>
							<button className='edit-btn' type='button'>
								<FaEdit />
							</button>
							<button className='delete-btn' type='button'>
								<FaTrash />
							</button>
						</div>
					</article>
				)
			})}
		</div>
	)
}

export default List
