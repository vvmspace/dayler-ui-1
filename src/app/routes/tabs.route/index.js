import React, { Component } from 'react';
import { TabsRouter } from 'ui';

import TabInitial from './tab.initial';
import TabUsage from './tab.usage';
import styles from '../../styles.styl';

export default class Tabs extends Component {
    routes = [{
        component: TabInitial,
        exact: true,
        path: '',
        title: 'Initial Tab',
    }, {
        component: TabUsage,
        exact: true,
        path: '/usage',
        title: 'Usage',
    }];

    render() {
        return (
            <div className={styles.route}>
                <div className={styles.routeHeader}>
                    <div className={styles.routeTitle}>
                        <h3>Tabs</h3>
                    </div>
                </div>
                <div className={styles.routeBody}>
                    <TabsRouter routes={this.routes} />
                </div>
            </div>
        );
    }
}
