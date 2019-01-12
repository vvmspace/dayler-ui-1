import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { StateView } from '../StateView';

import style from './style.styl';

export class ScrollView extends PureComponent {
    static propTypes = {
        classes: PropTypes.shape({
            body: PropTypes.string,
            container: PropTypes.string,
        }),
        speed: PropTypes.number,
    };

    static defaultProps = {
        classes: {
            body: '',
            container: '',
        },
        speed: 24,
    };

    state = {
        barSize: 0,
        isActive: false,
        max: 0,
        min: 0,
        y: 0,
    };

    handleWheel = event => {
        const { speed } = this.props;
        const { isActive, max, min, y } = this.state;

        // scroll up
        if (isActive && event.deltaY > 0 && y <= max) {
            this.setState({ y: y + speed });
        }

        // scroll down
        if (isActive && event.deltaY < 0 && y >= min) {
            this.setState({ y: y - speed });
        }
    }

    componentDidMount() {
        const max = this.content.scrollHeight - this.content.clientHeight;
        const barSize = this.content.clientHeight - max;
        const isActive = max > 0;

        this.setState({ barSize, isActive, max });
    }

    componentDidUpdate(props, state) {
        const max = this.content.scrollHeight - this.content.clientHeight;
        const barSize = this.content.clientHeight - max;
        const isActive = max > 0;

        if (max !== state.max) {
            this.setState({ barSize, isActive, max });
        }
    }

    render() {
        const { children, classes, ...props } = this.props;
        const { barSize, isActive, y } = this.state;

        const containerClassNames = classNames(style.container, classes.container);
        const bodyClassNames = classNames(style.body, classes.body)

        return <div {...props} className={containerClassNames} ref={referance => this.container = referance} onWheel={this.handleWheel}>
            <StateView on={isActive}>
                <div className={style.scroll}>
                    <span className={style.bar} style={{ height: barSize, top: y }}></span>
                </div>
            </StateView>
            <div className={bodyClassNames} ref={referance => this.content = referance} style={{ top: `-${y}px`}}>
                {children}
            </div>
        </div>;
    }
}
