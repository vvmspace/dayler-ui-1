import React, { PureComponent } from 'react'

import __CDN__ from 'app/cdn.json'

import css from './css.styl'

export class Navigation extends PureComponent {
    render() {
        return <div className={css.container}>
            <div className={css.header}>
                <img src={__CDN__.logo_green} alt="Dayler UI" />
            </div>
            <div className={css.body}>
                ...
            </div>
        </div>
    }
}
