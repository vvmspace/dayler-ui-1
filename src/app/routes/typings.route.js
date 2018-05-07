import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { coy } from 'react-syntax-highlighter/styles/prism';
import { Panel } from 'ui';

import styles from '../styles.styl';

export default class TypingsRoute extends Component {
    render() {
        return (
            <div className={styles.route}>
                <div className={styles.routeHeader}>
                    <div className={styles.routeTitle}>Typings</div>
                </div>
                <div className={styles.routeBody}>
                    <Panel title="headings" icon="code" outerStyle={{ marginBottom: 20 }}>
                        <h1>Heading 1</h1>
                        <h2>Heading 2</h2>
                        <h3>Heading 3</h3>
                        <h4>Heading 4</h4>
                        <h5>Heading 5</h5>
                        <hr style={{ margin: '20px 0' }} />
                        <SyntaxHighlighter language='html' style={coy} wrapLines={true}>
                            {`<h1>Heading 1</h1>\n<h2>Heading 2</h2>\n<h3>Heading 3</h3>\n<h4>Heading 4</h4>\n<h5>Heading 5</h5>`}
                        </SyntaxHighlighter>
                    </Panel>

                    <Panel title="paragraph" icon="code">
                        <p>
                            Lorem ipsum dolor sit amet, qualisque efficiendi ea est, an cetero perfecto sea. Eos perfecto scribentur ei. His verear feugait pertinax te, nec te argumentum comprehensam. Mea justo voluptua te, augue choro expetenda no est.
                        </p>
                    </Panel>
                </div>
            </div>
        );
    }
}
