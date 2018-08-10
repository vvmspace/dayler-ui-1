import React, { Component } from 'react';

import style from './style.styl';

export default class SnakbarRoute extends Component {
    render() {
        return <div className={style.container}>
            <div className={style.header}>
                <span className={style.title}>Snackbar</span>
                <span className={style.description}>
                    Snackbar component overview
                </span>
            </div>
        </div>;
    }
}
