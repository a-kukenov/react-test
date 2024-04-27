import styles from './App.module.css'
import List from './components/List/List'

function App() {
	return (
		<div className={styles['container']}>
			<div className={styles['top-box']}>
				<h1>Заголовок</h1>
			</div>
			<div className={styles['bot-box']}>
				<div className={styles['l-field']}>
					<List />
				</div>
				<div className={styles['r-field']}>
					<div className={styles['top-row']}>
						<div className={styles['top-img']}></div>
					</div>
					<div className={styles['mid-row']}>
						<div className={styles['mid-img']}></div>
					</div>
					<div className={styles['bot-row']}>
						<div className={styles['bot-img']}></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
