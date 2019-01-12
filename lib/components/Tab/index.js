import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class Tab extends PureComponent {
    static propTypes = {
        classes: PropTypes.shape({
            container: PropTypes.string,
        }),
    };

    static defaultProps = {
        path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        classes: {
            container: '',
        },
    };

    render() {
        const { children, classes, path, title, ...props } = this.props;

        return <div {...props} className={classes.container}>
            {children}
        </div>;
    }
}
