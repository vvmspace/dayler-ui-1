import React, { Component } from 'react';

import style from './style.styl';

export default class FeatherIconsRoute extends Component {
    render() {
        return <div className={style.container}>
            <div className={style.header}>
                <span className={style.title}>Feather Icons</span>
                <span className={style.description}>Icons set description and usage overview</span>
            </div>
        </div>;
    }
}
