import React, { Fragment, useState, useCallback, useEffect, useRef } from 'react'
import classnames from 'classnames'
import { AnimatedIcon } from 'dayler-ui'

import cdn from 'app/cdn.json'
import { Navigation, Search } from 'app/components'

import classes from './classes.styl'

export const Header = ({ ...props }) => {
    const css = {
        menuIcon: classnames(classes.menuIcon, {
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

    const handleClose = useCallback(() => {
        setOpenValue(false)
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

    return <Fragment>
        <Navigation filter={searchValue} open={isOpen} onClick={handleClose} />
        <div {...props} className={classes.container}>
            <div className={classes.content}>
                <div className={classes.actions}>
                    <span className={css.menuIcon} onClick={handleOpen}>
                        <AnimatedIcon state={isOpen} />
                    </span>

                    <Search active={isOpen}
                        value={searchValue}
                        onChange={handleSearch}
                        ref={searchRef} />
                </div>
                <img className={classes.logo} src={cdn.logo_dark} alt="Dayler.io" />
            </div>
        </div>
    </Fragment>
}
