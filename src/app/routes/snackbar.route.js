import React, { Component } from 'react';

import styles from '../styles.styl';

export default class Snackbar extends Component {
    render() {
        return (
            <div className={styles.route}>
                <div className={styles.routeHeader}>
                    <div className={styles.routeTitle}>Snackbar</div>
                </div>
                <div className={styles.routeBody}>
                    ...
                </div>
            </div>
        )
    }
}
