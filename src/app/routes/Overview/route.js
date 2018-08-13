import React, { Component } from 'react';
import { Section } from 'dayler-ui';

import style from './style.styl';

export default class OverviewRoute extends Component {
    render() {
        return <div className={style.container}>
            <div className={style.header}>
                <span className={style.title}>Overview</span>
                <span className={style.description}>
                    Components usage overview
                </span>
            </div>

            <Section title="Colors" styles={{ body: style.colors }}>
                <div className={`${style.color} ${style.dark}`}>
                    <span className={style.colorTitle}>$dark</span>
                    <span className={style.colorValue}>#585c67</span>
                </div>

                <div className={`${style.color} ${style.gray}`}>
                    <span className={style.colorTitle}>$gray</span>
                    <span className={style.colorValue}>#777f83</span>
                </div>

                <div className={`${style.color} ${style.red}`}>
                    <span className={style.colorTitle}>$red</span>
                    <span className={style.colorValue}>#e14839</span>
                </div>

                <div className={`${style.color} ${style.green}`}>
                    <span className={style.colorTitle}>$green</span>
                    <span className={style.colorValue}>#66c85f</span>
                </div>

                <div className={`${style.color} ${style.yellow}`}>
                    <span className={style.colorTitle}>$yellow</span>
                    <span className={style.colorValue}>#f0b458</span>
                </div>
            </Section>
        </div>;
    }
}
