import cn from 'classnames'
import { useState } from 'react'
import styles from './App.module.css'
import Button from './components/Button/Button'
import List from './components/List/List'
import getData from './utils/getData'
import postData from './utils/postData'

function App() {
	const [l1, setL1] = useState([])

	const getDataFromDB = async () => {
		try {
			const usersObj = await getData(
				'https://react-test-w1c1.onrender.com/getUsers'
			)
			const data = usersObj.users
			setL1(
				data.map(elem => {
					return elem
				})
			)
		} catch (err) {
			console.error(err)
		}
	}

	const addNewItem = async () => {
		let name = prompt('Введите имя')
		let gender = prompt('Введите пол')
		let email = prompt('Введите эл.почту')
		let id = l1.length + 1
		let user = {
			id: id,
			name: name,
			gender: gender,
			email: email
		}
		let info = await postData(
			'https://react-test-w1c1.onrender.com/addUser',
			user
		)
		console.log(info)
		user = setL1([...l1, user])
	}
	console.log(l1)
	return (
		<div className={styles['container']}>
			<div className={styles['list-container']}>
				<List listItems={l1} l1={l1} setL1={setL1} />
			</div>
			<div className={cn(styles['button-container'])}>
				<Button onClick={getDataFromDB} title='Получить данные' />
				<Button onClick={addNewItem} title='Добавить новый элемент' />
			</div>
		</div>
	)
}

export default App
