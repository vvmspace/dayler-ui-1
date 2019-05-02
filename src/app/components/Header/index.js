import React, { useState, useCallback, useEffect, useRef } from 'react'
import classnames from 'classnames'
import { AnimatedIcon } from 'dayler-ui'

import { Search } from 'app/components'
import CDN from 'app/cdn.json'

import classes from './classes.styl'

export const Header = ({ ...props }) => {
    const css = {
        menu: classnames(classes.menu, {
            [classes.menuOpen]: isOpen,
        }),
    }

    const searchRef = useRef(null)

    const [isOpen, setOpenValue] = useState(false)
    const [searchValue, setSearchValue] = useState('')

    const handleOpen = useCallback(() => {
        setOpenValue(!isOpen)
        setSearchValue('')

    }, [isOpen])

    const handleSearch = useCallback(value => {
        setSearchValue(value)
    }, [searchValue])

    function handleKeyPress({ key }) {
        if (key === 'Escape') {
            setOpenValue(false)
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress, false)

        if (isOpen) {
            searchRef.current.focus()
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

                <Search active={isOpen}
                    value={searchValue}
                    onChange={handleSearch}
                    ref={searchRef} />
            </div>
            <img className={classes.logo} src={CDN.logo_dark} alt="Dayler.io" />
        </div>
    </div>
}
