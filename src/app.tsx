import {useState} from 'react'
import {GridClock} from './grid-clock'
import {getGridClockData} from './grid-clock-utils'
import {useInterval} from './hooks/use-interval'

export function App() {
	const [date, setDate] = useState(new Date())

	useInterval(() => {
		setDate(new Date())
	}, 1)

	const grid = getGridClockData(date)

	return (
		<main className="flex h-full w-full flex-col items-center justify-center">
			<GridClock grid={grid} />
		</main>
	)
}
