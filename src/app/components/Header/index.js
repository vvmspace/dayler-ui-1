import React, { useState, useCallback, useEffect } from 'react'
import classnames from 'classnames'
import { AnimatedIcon } from 'dayler-ui'

import classes from './classes.styl'

const src = {
    logo: 'https://cdn.dayler.io/images/logo_dark.svg',
}

export const Header = ({ ...props }) => {
    let input

    const [isOpen, setOpen] = useState(false)
    const [searchString, setSearch] = useState('')

    const handleOpen = useCallback(() => {
        setOpen(!isOpen)
        setSearch('')
    }, [isOpen])

    const handleSearch = useCallback(({ target: { value }}) => {
        setSearch(value)
    }, [isOpen])

    const css = {
        menu: classnames(classes.menu, {
            [classes.menuOpen]: isOpen,
        }),
        input: classnames(classes.input, {
            [classes.inputOpen]: isOpen,
        }),
    }

    function handleKeyPress({ key }) {
        if (key === 'Escape') {
            setOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress, false)

        if (isOpen) {
            input.focus()
        }

        return () => {
            document.removeEventListener('keydown', handleKeyPress, false)
        }
    })

    return <div {...props} className={classes.container}>
        <div className={classes.content}>
            <div className={classes.actions}>
                <span className={css.menu} onClick={handleOpen}>
                    <AnimatedIcon state={isOpen} />
                </span>

                <input className={css.input}
                    type="text"
                    placeholder="Search ..."
                    value={searchString}
                    onChange={handleSearch}
                    ref={_ => input = _} />
            </div>
            <img className={classes.logo} src={src.logo} alt="Dayler.io" />
        </div>
    </div>
}
