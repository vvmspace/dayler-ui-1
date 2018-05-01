import React, { Component } from 'react';
import { Panel } from 'ui'

export default class Colors extends Component {
    render() {
        return (
            <div className="route">
                <div className="route__title">Colors</div>
                <div className="route__body">
                    <div style={{ marginBottom: 20 }}>
                        <Panel style={{ backgroundColor: '#EEEEEE', color: '#333' }}>#585C67 (DEFAULT)</Panel>
                    </div>

                    <div style={{ marginBottom: 20 }}>
                        <Panel style={{ backgroundColor: '#585C67', color: '#FFF' }}>#585C67 (DARK)</Panel>
                    </div>

                    <div style={{ marginBottom: 20 }}>
                        <Panel style={{ backgroundColor: '#777F83', color: '#FFF' }}>#777F83 (GRAY)</Panel>
                    </div>

                    <div style={{ marginBottom: 20 }}>
                        <Panel style={{ backgroundColor: '#66C85F', color: '#FFF' }}>#66C85F (GREEN)</Panel>
                    </div>

                    <div style={{ marginBottom: 20 }}>
                        <Panel style={{ backgroundColor: '#E14839', color: '#FFF' }}>#E14839 (RED)</Panel>
                    </div>

                    <div style={{ marginBottom: 20 }}>
                        <Panel style={{ backgroundColor: '#F0B458', color: '#FFF' }}>#F0B458 (YELLOW)</Panel>
                    </div>
                </div>
            </div>
        );
    }
}
