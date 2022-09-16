import {getDate, getHours, getMinutes, getMonth, getSeconds, getYear, getMilliseconds} from 'date-fns'

function toBinary(decimal: number) {
	return [...decimal.toString(2).padStart(4, '0')].map((c) => Number(c))
}

function toBinaryArray(str: string) {
	let arr = []
	for (let i = 0; i < str.length; i++) {
		arr.push(toBinary(Number(str[i])))
	}

	return arr
}

export function getGridClockData(date: Date) {
	const year = toBinaryArray(getYear(date).toString().padStart(4, '0'))
	const month = toBinaryArray((getMonth(date) + 1).toString().padStart(2, '0'))
	const day = toBinaryArray(getDate(date).toString().padStart(2, '0'))
	const hours = toBinaryArray(getHours(date).toString().padStart(2, '0'))
	const minutes = toBinaryArray(getMinutes(date).toString().padStart(2, '0'))
	const seconds = toBinaryArray(getSeconds(date).toString().padStart(2, '0'))
	const milliseconds = toBinaryArray(getMilliseconds(date).toString().padStart(3, '0'))

	return year.concat(month, day, hours, minutes, seconds, milliseconds)
}
