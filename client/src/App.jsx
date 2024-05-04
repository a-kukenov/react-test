import cn from 'classnames'
import { useState } from 'react'
import styles from './App.module.css'
import Button from './components/Button/Button'
import List from './components/List/List'
import getData from './utils/getData'

function App() {
	const [l1, setL1] = useState([])

	const resetLists = () => {
		setL1([])
	}

	const getDataFromDB = async () => {
		try {
			const usersObj = await getData(
				'https://react-test-w1c1.onrender.com/getUsers'
			)
			const data = usersObj.users
			setL1(data.map(el => el.name))
		} catch (err) {
			console.error(err)
		}
	}

	const addNewItem = () => {
		let item = prompt('Введите название')
		setL1([...l1, item])
	}

	return (
		<div className={styles['container']}>
			<h1>Hello World</h1>
			<div className={styles['list-container']}>
				<List title='Список #1' bgColor='red' listItems={l1} />
			</div>
			<div className={cn(styles['button-container'])}>
				<Button onClick={resetLists} title='Очистить #1 и #2' />
				<Button onClick={getDataFromDB} title='Получить данные для #3' />
				<Button onClick={addNewItem} title='Добавить новый элемент в #4' />
			</div>
		</div>
	)
}

export default App
