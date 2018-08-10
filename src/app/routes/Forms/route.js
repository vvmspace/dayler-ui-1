import React, { Component } from 'react';

import style from './style.styl';

export default class FormsRoute extends Component {
    render() {
        return <div className={style.container}>
            <div className={style.header}>
                <span className={style.title}>Forms</span>
                <span className={style.description}>
                    Form elements overview
                </span>
            </div>
        </div>;
    }
}
