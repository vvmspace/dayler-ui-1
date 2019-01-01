import React, { PureComponent } from 'react';

import style from './style';

export class RootContainer extends PureComponent {
    render() {
        return <div className={style.container}>
            ... route ...
        </div>;
    }
}
