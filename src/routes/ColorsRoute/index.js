import React, { PureComponent } from 'react';
import { H5 } from 'dayler-ui';
import classes from 'classnames';

import style from './style';

export class ColorsRoute extends PureComponent {
    render() {
        return <div className={style.container}>
            <H5 className={style.title}>Colors</H5>
            <div className={style.colors}>
                <div className={classes(style.item, style['g100'])}>#CACACD</div>
                <div className={classes(style.item, style['g200'])}>#A7A7AC</div>
                <div className={classes(style.item, style['g300'])}>#84848B</div>
                <div className={classes(style.item, style['g400'])}>#61616A</div>
                <div className={classes(style.item, style['g500'])}>#3E3E49</div>
                <div className={classes(style.item, style['g600'])}>#33333C</div>
                <div className={classes(style.item, style['g700'])}>#28282F</div>
                <div className={classes(style.item, style['g800'])}>#1D1D22</div>
                <div className={classes(style.item, style['g900'])}>#111114</div>
            </div>
        </div>;
    }
}
