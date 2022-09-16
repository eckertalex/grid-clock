import {dequal as deepEqual} from 'dequal/lite'
import {memo} from 'react'
import clsx from 'clsx'

type GridClockItemProps = {
	item: number
}

function GridClockItem(props: GridClockItemProps) {
	const {item} = props
	return <div className={clsx('h-4 w-4 border border-solid border-black', item ? 'bg-black' : 'bg-white')} />
}
//@ts-ignore
// eslint-disable-next-line no-func-assign
GridClockItem = memo(GridClockItem, (prev, next) => prev.item === next.item)

type GridClockColumnProps = {
	column: number[]
}

function GridClockColumn(props: GridClockColumnProps) {
	const {column} = props
	return (
		<div className="flex flex-col gap-px">
			{column.map((item, j) => (
				<GridClockItem key={j} item={item} />
			))}
		</div>
	)
}
//@ts-ignore
// eslint-disable-next-line no-func-assign
GridClockColumn = memo(GridClockColumn, deepEqual)

type GridClockProps = {
	grid: number[][]
}

export function GridClock(props: GridClockProps) {
	const {grid} = props
	return (
		<div className="flex gap-px border border-solid border-black p-px">
			{grid.map((column, i) => (
				<GridClockColumn key={i} column={column} />
			))}
		</div>
	)
}
