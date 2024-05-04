/* eslint-disable react/prop-types */
import cn from 'classnames'
import styles from './List.module.css'
// import uuid
import { v4 as uuid } from 'uuid'
import deleteData from '../../utils/deleteData'
const prefix = 'http://localhost:3002'

const List = ({ listItems, l1, setL1, links }) => {
	const deleteElement = async (elem, index) => {
		setL1(
			await l1.filter((el, i) => {
				elem = el
				return i != index
			})
		)
		try {
			let id = elem._id
			let info = await deleteData(`http://localhost:3002/deleteUser/${id}`)
			console.log(info)
		} catch (err) {
			console.error('Произошла ошибка при удалении пользователя', err)
		}
	}

	return (
		<div className={cn(styles['container'])}>
			{listItems.map((el, index) => {
				return (
					<div
						className={cn(styles['slot'])}
						onClick={() => {
							deleteElement(index)
						}}
						key={uuid()}
					>
						<div className={cn(styles['l-box'])}>
							<img className={cn(styles['pic'])} src={links[index]}></img>
						</div>
						<div className={cn(styles['r-box'])}>
							<div className={cn(styles['id'])}>ID: {el.id}</div>
							<div className={cn(styles['name'])}>{el.name}</div>
							<div className={cn(styles['gender'])}>{el.gender}</div>
							<div className={cn(styles['email'])}>{el.email}</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default List
