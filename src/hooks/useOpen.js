import { useState, useCallback } from 'react'

export const useOpen = initialState => {
    const [isOpened, setState] = useState(initialState || false)

    const open = useCallback(() => {
        setState(true)
    }, [])

    const close = useCallback(() => {
        setState(false)
    }, [])

    const toogle = useCallback(() => {
        setState(prevState => !prevState)
    }, [])

    return { isOpened, open, close, toogle }
}
