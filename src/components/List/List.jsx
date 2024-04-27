import styles from './List.module.css'

function List() {
	return (
		<div className={styles['container']}>
			<ol>
				<li className={styles['li1']}>элемент списка</li>
				<li className={styles['li2']}>элемент списка</li>
				<li className={styles['li3']}>элемент списка</li>
			</ol>
		</div>
	)
}

export default List
