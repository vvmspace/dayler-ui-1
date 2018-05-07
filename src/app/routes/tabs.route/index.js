import React, { Component } from 'react';
import { TabsRouter } from 'ui';

import styles from '../../styles.styl';
import TabInitial from './tab.initial';
import TabUsage from './tab.usage';

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
                    <div className={styles.routeTitle}>Tabs</div>
                </div>
                <div className={styles.routeBody}>
                    <TabsRouter routes={this.routes} />
                </div>
            </div>
        );
    }
}
