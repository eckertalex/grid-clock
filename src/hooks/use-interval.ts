import {useCallback, useEffect, useRef} from 'react'
import {useLatest} from './use-latest'

const isNumber = (value: unknown): value is number => typeof value === 'number'

export function useInterval(
	fn: () => void,
	delay: number | undefined,
	options?: {
		immediate?: boolean
	}
) {
	const immediate = options?.immediate

	const fnRef = useLatest(fn)
	const timerRef = useRef<number | NodeJS.Timer>()

	useEffect(() => {
		if (!isNumber(delay) || delay < 0) return

		if (immediate) {
			fnRef.current()
		}
		timerRef.current = setInterval(() => {
			fnRef.current()
		}, delay)
		return () => {
			if (timerRef.current) {
				clearInterval(timerRef.current as NodeJS.Timer)
			}
		}
	}, [delay, immediate, fnRef])

	const clear = useCallback(() => {
		if (timerRef.current) {
			clearInterval(timerRef.current as NodeJS.Timer)
		}
	}, [])

	return clear
}
