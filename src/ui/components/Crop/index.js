import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import Avatar from '../Avatar';
import IconButton from '../Button/button.icon';

import initialStyles from './styles.styl';

export default class Crop extends Component {
    static propTypes = {
        onMount: PropTypes.func.isRequired,
        onChange: PropTypes.func.isRequired,
        portalNode: PropTypes.string,
        title: PropTypes.string,
        geometry: PropTypes.shape({
            height: PropTypes.number,
            width: PropTypes.number,
        }),
        origin: PropTypes.shape({
            x: PropTypes.number,
            y: PropTypes.number,
        }),
    };

    static defaultProps = {
        portalNode: '',
        title: 'Preview',
        geometry: {
            height: 500,
            width: 760,
        },
        origin: {
            x: 0,
            y: 0,
        },
    };

    state = {
        result: `https://cdn.dayler.io/images/avatar.svg`,
        source: null,
        isCropModalShown: false,
        dragging: false,
        containerStyles: {},
    }

    handleClose = () => {
        this.setState({
            isCropModalShown: false,
            source: null,
        });
    }

    handleFileChange = event => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = data => this.setState({
            source: data.target.result,
            isCropModalShown: true,
        });

        reader.readAsDataURL(file);
    }

    handleSubmit = () => {}

    getContainerStyles = () => {
        const { geometry } = this.props;
        const { source } = this.state;

        return {
            container: {
                ...geometry,
                gridTemplateColumns: `${geometry.height}px auto`,
            },
            shadow: {
                display: source ? 'flex' : 'none',
            },
            sourceContainer: {
                width: geometry.height,
                height: geometry.height,
            },
            sourceImage: {
                maxWidth: geometry.height,
                maxHeight: geometry.height,
            },
        };
    }

    componentDidMount() {
        this.props.onMount(this.fileInput);
    }

    render() {
        const { portalNode, title } = this.props;
        const { result, source } = this.state;

        const containerStyles = this.getContainerStyles();

        const CropElement = (
            <div className={initialStyles.wrapper}>
                <input type="file" style={{ display: 'none' }}
                    onChange={this.handleFileChange}
                    ref={referance => this.fileInput = referance}
                />
                <div className={initialStyles.shadow} style={containerStyles.shadow}>
                    <div className={initialStyles.container}
                        style={containerStyles.container}
                        ref={referance => this.container = referance }>
                        <div className={initialStyles.sourceContainer} style={containerStyles.sourceContainer}>
                            <img className={initialStyles.sourceImage}
                                style={containerStyles.sourceImage}
                                crossOrigin="anonymous"
                                alt={Math.random()}
                                src={source}
                                ref={referance => this.source = referance}
                            />
                        </div>
                        <div className={initialStyles.preview}>
                            <div>
                                <span className={initialStyles.title}>{title}</span>
                            </div>

                            <div className={initialStyles.avatars}>
                                <Avatar image={result} style={{ marginBottom: 20 }} size={120} />
                                <Avatar image={result} style={{ marginBottom: 20 }} size={70} />
                            </div>

                            <div>
                                <IconButton color="red" title="Crop" icon="crop" style={{ marginRight: 10 }} />
                                <IconButton color="dark" title="Cancel" icon="x" onClick={this.handleClose} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

        return portalNode
            ? ReactDOM.createPortal(CropElement, document.getElementById(portalNode))
            : CropElement;
    }
}
