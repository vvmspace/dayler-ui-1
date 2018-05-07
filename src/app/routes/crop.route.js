import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { coy } from 'react-syntax-highlighter/styles/prism';
import { Avatar, Button, Crop, Panel } from 'ui';

import styles from '../styles.styl';

const innerStyle = {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
};

export default class ImageCropRoute extends Component {
    state = {
        image: 'https://cdn.dayler.io/images/avatar.svg',
    };

    handleChange = image => {
        this.setState({ image });
    };

    handleClick = () => {
        this.cropper.click();
    }

    render() {
        const { image } = this.state;

        return (
            <div className={styles.route}>
                <div className={styles.routeHeader}>
                    <div className={styles.routeTitle}>Image Crop</div>
                </div>
                <Crop node="root"
                    height={500}
                    onChange={this.handleChange}
                    onMount={referance => this.cropper = referance}
                    size={100}
                    width={760}
                    x={20}
                    y={30}
                />
                <div className={styles.routeBody}>
                    <Panel title="crop" icon="crop" innerStyle={innerStyle} outerStyle={{ marginBottom: 20 }}>
                        <Avatar image={image} size={200} style={{ marginBottom: 20 }} />
                        <Button title="change" style={{ alignSelf: 'center' }} onClick={this.handleClick} />
                    </Panel>
                    <Panel title="usage" icon="code">
                        <SyntaxHighlighter language='jsx' style={coy} wrapLines={true}>
                            {`import React, { Component } from 'react';\nimport { Avatar, Button, Crop } from 'dayler-ui';\n\nexport default class MyClass extends Component {\n    state = {\n        image: 'https://cdn.dayler.io/images/avatar.svg',\n    };\n\n    handleChange = image => {\n        this.setState({ image });\n    };\n\n    handleClick = () => {\n        this.cropper.click();\n    }\n\n    render() {\n        return (\n            <div>\n                <Avatar image={image} size={200} />\n                <Button title="change" onClick={this.handleClick} />\n                <Crop node="root"\n                    onChange={this.handleChange}\n                    onMount={referance => this.cropper = referance}\n                    height={500}\n                    width={760}\n                    size={100}\n                    x={20}\n                    y={30}\n                />\n            </div>\n        );\n    }\n}\n`}
                        </SyntaxHighlighter>
                    </Panel>
                </div>
            </div>
        );
    }
}
