/* eslint-disable react/prop-types */
import cn from 'classnames'
import styles from './List.module.css'
// import uuid
import { v4 as uuid } from 'uuid'

const List = ({ listItems, l1, setL1 }) => {
	const deleteElement = index => {
		setL1(l1.filter((el, i) => i != index))
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
							<div className={cn(styles['pic'])}></div>
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
