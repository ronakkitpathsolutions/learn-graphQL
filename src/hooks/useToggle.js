import { useState, useCallback } from 'react'

const useToggle = (initialValue) => {
    const [toggle, setToggleState] = useState(false || initialValue)

    const setToggle = useCallback(() => {
        setToggleState(prevState => !prevState)
    },[])

    return [toggle, setToggle]
}

export default useToggle