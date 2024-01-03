import GroceryItem from './GroceryItem'

const List = ({ list, removeItem, editItem }) => {
	return (
		<div className='grocery-list'>
			{list.map(item => {
				const { id, title } = item
				return (
					<GroceryItem key={id} id={id} title={title} editItem={editItem} removeItem={removeItem}  />
				)
			})}
		</div>
	)
}

export default List
