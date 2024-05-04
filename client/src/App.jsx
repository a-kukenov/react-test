import cn from 'classnames'
import { useState } from 'react'
import styles from './App.module.css'
import Button from './components/Button/Button'
import List from './components/List/List'
import getData from './utils/getData'
import postData from './utils/postData'
const prefix = 'http://localhost:3002'
let links = []

function App() {
	const [l1, setL1] = useState([])

	const getDataFromDB = async () => {
		try {
			const usersObj = await getData(`${prefix}/getUsers`)
			const data = usersObj.users
			setL1(
				data.map(elem => {
					links.push(elem.img)
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
		let img = prompt('Введите ссылку на изображение')
		let id = l1.length + 1
		let user = {
			id: id,
			name: name,
			gender: gender,
			email: email,
			img: img
		}
		let info = await postData(`${prefix}/addUser`, user)
		console.log(info)
		user = setL1([...l1, user])
	}
	console.log(l1)
	return (
		<div className={styles['container']}>
			<div className={styles['list-container']}>
				<List listItems={l1} l1={l1} setL1={setL1} links={links} />
			</div>
			<div className={cn(styles['button-container'])}>
				<Button onClick={getDataFromDB} title='Получить данные' />
				<Button onClick={addNewItem} title='Добавить новый элемент' />
			</div>
		</div>
	)
}

export default App
