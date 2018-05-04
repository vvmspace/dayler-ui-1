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
        caretStyles: {},
        containerStyles: {},
        cropStyles: {},
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

        reader.onload = data => {

            const image = new Image();
            image.src = data.target.result;

            image.onload = () => {
                this.setState({
                    source: data.target.result,
                    isCropModalShown: true,
                }, () => {
                    this.setContainerStyles(image);
                });
            }
        };

        reader.readAsDataURL(file);
        event.target.value = ''; // Reset input element
    }

    handleSubmit = () => {}

    setContainerStyles(image) {
        const { geometry } = this.props;
        const { source } = this.state;

        this.setState({
            containerStyles: {
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
            }
        }, () => {
            this.setCaretStyles();
            this.setCropStyles(image)
        });
    }

    setCropStyles(image) {
        const { height, width } = image;
        const size = this.props.geometry.height;

        const imageHeight = width / height >= 1
            ? (height * size) / width
            : size;

        const imageWidth = width / height >= 1
            ? size
            : (size * width) / height;

        const top = (size - imageHeight) / 2;
        const bottom = (size - imageHeight) / 2;
        const left = (size - imageWidth) / 2;
        const right = (size - imageWidth) / 2;

        this.setState({ cropStyles: {
            area: { top, bottom, left, right, width: imageWidth, height: imageHeight },
        }});
    }

    setCaretStyles() {
        const { geometry } = this.props;

        this.setState({
            caretStyles: {
                image: {
                    maxWidth: geometry.height,
                    maxHeight: geometry.height,
                }
            }
        });
    }

    getGeometry(x, y, /*caret = {}*/) {
        const caret = {width: 200, height: 200}
        const size = 500;

        return {
            top: 0
        }
    }

    componentDidMount() {
        this.props.onMount(this.fileInput);
    }

    handlePress = event => {
        this.setState({ dragging: true, pos: {
            x: event.pageX - this.caret.getBoundingClientRect().left,
            y: event.pageY - this.caret.getBoundingClientRect().top
        } })
    }

    handleRelease = event => {
        this.setState({ dragging: false });
    }

    handleMove = event => {
        // const { dragging } = this.state;
        // const { geometry } = this.props;

        // if (dragging) {
        //     const { x, y } = this.state.pos;
        //     const caretGeometry = this.caret.getBoundingClientRect();
        //     const containerGeometry = this.source.getBoundingClientRect();

        //     const caretPosition = {
        //         x: containerGeometry.left - caretGeometry.left,
        //         y: containerGeometry.top - caretGeometry.top + event.pageY - containerGeometry.top - y,
        //     }

        //     console.log(caretPosition);

        //     this.setState({ caretStyles: {
        //         caret: {
        //             top: Math.floor(caretPosition.y)
        //         },
        //         image: {
        //             maxWidth: geometry.height,
        //             maxHeight: geometry.height,
        //             marginTop: -Math.floor(caretPosition.y)
        //         }
        //     }})
        // }
    }

    render() {
        const { portalNode, title } = this.props;

        const {
            caretStyles,
            containerStyles,
            cropStyles,
            result,
            source,
        } = this.state;

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
                        <div className={initialStyles.sourceContainer} style={containerStyles.sourceContainer} onMouseMove={this.handleMove} onMouseUp={this.handleRelease}>
                            <img className={initialStyles.sourceImage}
                                style={containerStyles.sourceImage}
                                crossOrigin="anonymous"
                                alt={Math.random()}
                                src={source}
                                ref={referance => this.source = referance}
                            />
                            <div className={initialStyles.cropArea} style={cropStyles.area}>
                                <div className={initialStyles.caret} style={caretStyles.caret} onMouseDown={this.handlePress} ref={referance => this.caret = referance}>
                                    <div className={initialStyles.caretCircle}>
                                        <img src={source} alt="clone" className= {initialStyles.caretImage} style={caretStyles.image} />
                                    </div>
                                    <span className={initialStyles.caretBorder}></span>
                                    <span className={initialStyles.caretTL} data-action="tl"></span>
                                    <span className={initialStyles.caretTR} data-action="tr"></span>
                                    <span className={initialStyles.caretBR} data-action="br"></span>
                                    <span className={initialStyles.caretBL} data-action="bl"></span>
                                </div>
                            </div>
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
