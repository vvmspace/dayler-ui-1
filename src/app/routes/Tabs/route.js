import React, { Component } from 'react';

import style from './style.styl';

export default class TabsRoute extends Component {
    render() {
        return <div className={style.container}>
            <div className={style.header}>
                <span className={style.title}>Tabs</span>
                <span className={style.description}>
                    Routing based tabs component example
                </span>
            </div>
        </div>;
    }
}
