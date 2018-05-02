import React, { Component } from 'react';

import styles from '../styles.styl';

export default class Chart extends Component {
    render() {
        return (
            <div className={styles.route}>
                <div className={styles.routeHeader}>
                    <div className={styles.routeTitle}>Chart</div>
                </div>
                <div className={styles.routeBody}>
                    ...
                </div>
            </div>
        );
    }
}
