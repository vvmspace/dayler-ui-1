import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import Avatar from '../Avatar';
import IconButton from '../Button/button.icon';

import styles from './styles.styl';

export default class Crop extends Component {
    static propTypes = {
        height: PropTypes.number.isRequired,
        node: PropTypes.string,
        onChange: PropTypes.func.isRequired,
        onMount: PropTypes.func.isRequired,
        size: PropTypes.number,
        title: PropTypes.string,
        width: PropTypes.number.isRequired,
        x: PropTypes.number,
        y: PropTypes.number,
    };

    static defaultProps = {
        height: 500,
        node: '',
        size: 200,
        title: 'Preview',
        width: 760,
        x: 0,
        y: 0,
    };

    state = {
        actionType: null,
        containerHeight: 0,
        containerWidth: 0,
        frameSize: 0,
        imageHeight: 0,
        imageWidth: 0,
        isDragging: false,
        onMouseDownCursorX: 0,
        onMouseDownCursorY: 0,
        onMouseDownPortalLeft: 0,
        onMouseDownPortalSize: 0,
        onMouseDownPortalTop: 0,
        portalLeft: 0,
        portalSize: 0,
        portalTop: 0,
        result: null,
        source: null,
        sourceHeight: 0,
        sourceWidth: 0,
    };

    setInitialGeometry(imageHeight, imageWidth) {
        const { height, width, size, x, y } = this.props;

        const containerHeight = width - height < 160 ? height - 160 : height;
        const containerWidth = width;
        const frameSize = containerHeight;
        const portalSize = size;
        const portalTop = x;
        const portalLeft = y;

        const sourceHeight = imageWidth / imageHeight >= 1
            ? (imageHeight * frameSize) / imageWidth
            : frameSize;

        const sourceWidth = imageWidth / imageHeight >= 1
            ? frameSize
            : (frameSize * imageWidth) / imageHeight;

        this.setState({
            containerHeight,
            containerWidth,
            frameSize,
            imageHeight,
            imageWidth,
            portalLeft,
            portalSize,
            portalTop,
            sourceHeight,
            sourceWidth,
        }, this.handleCrop);
    }

    movePortal(event) {
        const {
            onMouseDownCursorX,
            onMouseDownCursorY,
            onMouseDownPortalLeft,
            onMouseDownPortalTop,
            portalSize,
            sourceHeight,
            sourceWidth,
        } = this.state;

        let left = onMouseDownPortalLeft + event.pageX - onMouseDownCursorX;
        let top = onMouseDownPortalTop + event.pageY - onMouseDownCursorY;

        if (left < 0) {
            left = 0;
        }

        if (top < 0) {
            top = 0;
        }

        if (left > sourceWidth - portalSize) {
            left = sourceWidth - portalSize;
        }

        if (top > sourceHeight - portalSize) {
            top = sourceHeight - portalSize;
        }

        this.setState({
            portalLeft: left,
            portalTop: top,
        });
    }

    resizePortal(event, actionType) {
        const {
            onMouseDownCursorX,
            onMouseDownCursorY,
            onMouseDownPortalLeft,
            onMouseDownPortalSize,
            onMouseDownPortalTop,
            sourceHeight,
            sourceWidth,
        } = this.state;

        const shiftX = event.pageX - onMouseDownCursorX;
        const shiftY = event.pageY - onMouseDownCursorY;

        if (actionType === 'br') {
            let size = onMouseDownPortalSize + Math.max(shiftX, shiftY);

            if (onMouseDownPortalTop + size > sourceHeight) {
                size = sourceHeight - onMouseDownPortalTop;
            }

            if (onMouseDownPortalLeft + size > sourceWidth) {
                size = sourceWidth - onMouseDownPortalLeft;
            }

            this.setState({
                portalSize: size,
            });
        }

        if (actionType === 'tr') {
            let size = shiftX + shiftY > 0
                ? onMouseDownPortalSize + shiftX
                : onMouseDownPortalSize - shiftY;

            let top = shiftX + shiftY > 0
                ? onMouseDownPortalTop - shiftX
                : onMouseDownPortalTop + shiftY;

            if (onMouseDownPortalLeft + size > sourceWidth) {
                size = sourceWidth - onMouseDownPortalLeft;
                top = onMouseDownPortalTop - sourceWidth + onMouseDownPortalLeft + onMouseDownPortalSize;
            }

            if (top < 0) {
                size = onMouseDownPortalTop + onMouseDownPortalSize;
                top = 0;
            }

            this.setState({
                portalSize: size,
                portalTop: top,
            });
        }

        if (actionType === 'tl') {
            let size = shiftX - shiftY < 0
                ? onMouseDownPortalSize - shiftX
                : onMouseDownPortalSize - shiftY;

            let left = shiftX - shiftY < 0
                ? onMouseDownPortalLeft + shiftX
                : onMouseDownPortalLeft + shiftY;

            let top = shiftX - shiftY < 0
                ? onMouseDownPortalTop + shiftX
                : onMouseDownPortalTop + shiftY;

            if (top < 0) {
                left = onMouseDownPortalLeft - onMouseDownPortalTop;
                size = onMouseDownPortalTop + onMouseDownPortalSize;
                top = 0;
            }

            if (left < 0) {
                left = 0;
                size = onMouseDownPortalLeft + onMouseDownPortalSize;
                top = onMouseDownPortalTop - onMouseDownPortalLeft;
            }

            this.setState({
                portalLeft: left,
                portalSize: size,
                portalTop: top,
            });
        }

        if (actionType === 'bl') {
            let size = shiftX + shiftY > 0
                ? onMouseDownPortalSize + shiftY
                : onMouseDownPortalSize - shiftX;

            let left = shiftX + shiftY > 0
                ? onMouseDownPortalLeft - shiftY
                : onMouseDownPortalLeft + shiftX;

            if (size + onMouseDownPortalTop > sourceHeight) {
                left = onMouseDownPortalLeft - sourceHeight + onMouseDownPortalTop + onMouseDownPortalSize;
                size = sourceHeight - onMouseDownPortalTop;
            }

            if (left < 0) {
                left = 0;
                size = onMouseDownPortalLeft + onMouseDownPortalSize;
            }

            this.setState({
                portalLeft: left,
                portalSize: size,
            });
        }
    }

    handleFileChange = event => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = data => {

            const image = new Image();
            image.src = data.target.result;

            image.onload = () => {
                this.setState({
                    source: data.target.result,
                }, () => {
                    this.setInitialGeometry(image.height, image.width);
                });
            };
        };

        reader.readAsDataURL(file);
        event.target.value = ''; // Reset input element
    };

    handleCrop = () => {
        const {
            imageWidth,
            sourceWidth,
            portalSize,
            portalLeft,
            portalTop,
        } = this.state;

        const canvas = document.createElement('canvas');
        const scale = imageWidth / sourceWidth;
        const size = portalSize * scale;
        const x = portalLeft * scale;
        const y = portalTop * scale;

        canvas.width = size;
        canvas.height = size;
        canvas.getContext('2d').drawImage(this.sourceImage, x, y, size, size, 0, 0, size, size);

        this.setState({
            result: canvas.toDataURL(),
        }, () => canvas.remove());
    };

    handleClose = () => {
        this.setState({
            source: null,
        });
    };

    handleSubmit = () => {
        const { onChange } = this.props;
        const { result } = this.state;

        this.setState({
            source: null,
            result: null,
        }, () => onChange(result));
    };

    handleMouseDown = event => {
        const { portalLeft, portalSize, portalTop } = this.state;

        const actionType = event.target.getAttribute('data-action')
            ? event.target.getAttribute('data-action')
            : event.target.parentNode.getAttribute('data-action');

        this.setState({
            actionType,
            isDragging: true,
            onMouseDownCursorX: event.pageX,
            onMouseDownCursorY: event.pageY,
            onMouseDownPortalLeft: portalLeft,
            onMouseDownPortalSize: portalSize,
            onMouseDownPortalTop: portalTop,
        });
    };

    handleMouseUp = () => {
        this.setState({ isDragging: false }, this.handleCrop);
    };

    handleMouseMove = event => {
        const {
            actionType,
            isDragging,
        } = this.state;

        if (!isDragging) {
            event.preventDefault();
            return false;
        }

        if (actionType === 'move') {
            this.movePortal(event);
        } else {
            this.resizePortal(event, actionType);
        }
    };

    componentDidMount() {
        this.props.onMount(this.input);
    }

    render() {
        const { node, title } = this.props;

        const {
            containerHeight,
            containerWidth,
            frameSize,
            portalLeft,
            portalSize,
            portalTop,
            result,
            source,
            sourceHeight,
            sourceWidth,
        } = this.state;

        const containerStyle = {
            gridTemplateColumns: `${containerHeight}px 300px`,
            height: containerHeight,
            width: containerWidth,
        };

        const frameStyle = {
            height: frameSize,
            width: frameSize,
        };

        const sourceImageStyle = {
            height: sourceHeight,
            maxHeight: containerHeight,
            maxWidth: containerHeight,
            width: sourceWidth,
        };

        const sourceShadowStyle = {
            height: sourceHeight,
            left: (frameSize - sourceWidth) / 2,
            top: (frameSize - sourceHeight) / 2,
            width: sourceWidth,
        };

        const portalStyle = {
            height: portalSize,
            left: portalLeft,
            top: portalTop,
            width: portalSize,
        };

        const fakeSourceStyle = {
            height: sourceHeight,
            marginLeft: -portalLeft,
            marginTop: -portalTop,
            with: sourceWidth,
        };

        const CropElement = (
            <div className={styles.wrapper}>
                <input type="file"
                    className={styles.input}
                    onChange={this.handleFileChange}
                    ref={referance => this.input = referance}
                />
                <div className={styles.shadow}
                    style={{ display: source ? 'flex' : 'none' }}
                    onMouseMove={this.handleMouseMove}
                    onMouseUp={this.handleMouseUp}>
                    <div className={styles.container}
                        style={containerStyle}>
                        <div className={styles.frame}
                            style={frameStyle}>
                            <img className={styles.source}
                                alt="source"
                                style={sourceImageStyle}
                                crossOrigin="anonymous"
                                src={source}
                                ref={referance => this.sourceImage = referance}
                            />
                            <div className={styles.sourceShadow}
                                style={sourceShadowStyle}>
                                <div className={styles.portal}
                                    style={portalStyle}
                                    onMouseDown={this.handleMouseDown}
                                    ref={referance => this.portal = referance}>
                                    <div className={styles.fakePortal}>
                                        <img className={styles.fakeSource}
                                            alt="fake source"
                                            style={fakeSourceStyle}
                                            src={source}
                                        />
                                    </div>
                                    <span className={styles.portalHandler}
                                        data-action="move">
                                    </span>
                                    <span className={styles.portalDotTL}
                                        data-action="tl">
                                    </span>
                                    <span className={styles.portalDotTR}
                                        data-action="tr">
                                    </span>
                                    <span className={styles.portalDotBR}
                                        data-action="br">
                                    </span>
                                    <span className={styles.portalDotBL}
                                        data-action="bl">
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.preview}>
                            <div>
                                <span className={styles.title}>{title}</span>
                            </div>
                            <div className={styles.avatars}>
                                <Avatar image={result} style={{ marginBottom: 20 }} size={140} />
                                <Avatar image={result} style={{ marginBottom: 20 }} size={100} />
                            </div>
                            <div>
                                <IconButton style={{ marginRight: 10, marginTop: 10, paddingTop: 1 }}
                                    color="red"
                                    icon="crop"
                                    onClick={this.handleSubmit}
                                    title="Apply"
                                />
                                <IconButton style={{ marginTop: 10, paddingTop: 1 }}
                                    icon="x"
                                    onClick={this.handleClose}
                                    title="Cancel"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

        return node
            ? ReactDOM.createPortal(CropElement, document.getElementById(node))
            : CropElement;
    }
}
