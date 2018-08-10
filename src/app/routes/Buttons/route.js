import React, { Component } from 'react';

import style from './style.styl';

export default class ButtonsRoute extends Component {
    render() {
        return <div className={style.container}>
            <div className={style.header}>
                <span className={style.title}>Buttons</span>
                <span className={style.description}>
                    Buttons overview
                </span>
            </div>
        </div>;
    }
}
