import React, { Component } from 'react';
import { Avatar, Button, Crop, Panel } from 'ui';

import styles from '../styles.styl';

const innerStyle = {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
};

const outerStyle = {
    width: 300,
};

export default class ImageCrop extends Component {
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
                <div className={styles.routeBody}>
                    <Panel title="crop" icon="crop" innerStyle={innerStyle} outerStyle={outerStyle}>
                        <Avatar image={image} size={200} style={{ marginBottom: 20 }} />
                        <Button title="change" onClick={this.handleClick} />
                        <Crop origin={{ x: 10, y: 100 }} portalNode="root"
                            onMount={referance => this.cropper = referance}
                            onChange={this.handleChange}
                        />
                    </Panel>
                </div>
            </div>
        );
    }
}
