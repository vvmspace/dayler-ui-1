import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './style.styl';

export class Navigation extends PureComponent {
    static propTypes = {
        classes: PropTypes.shape({
            container: PropTypes.string,
        }),
        simple: PropTypes.bool,
        onChange: PropTypes.func.isRequired,
    };

    static defaultProps = {
        classes: {
            container: '',
        },
        simple: false,
        onChange: () => { },
    };

    handleViewChange = () => {
        const { onChange, simple } = this.props;

        onChange(!simple);
    };

    render() {
        const { classes, simple, ...props } = this.props;

        const containerClassNames = classNames(
            style.container,
            classes.container,
            {
                [style.min]: simple,
            },
        );

        return <div {...props} className={containerClassNames}>
            <div onClick={this.handleViewChange}>...</div>
        </div>;
    }
}
