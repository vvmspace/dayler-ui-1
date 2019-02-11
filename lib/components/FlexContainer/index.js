import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import style from './style.styl';

export function FlexContainer({ children, classes, ...props }) {
    const containerClassNames = classnames(style.container, classes.container);

    return <div {...props} className={containerClassNames}>
        {children}
    </div>;
}

FlexContainer.propTypes = {
    classes: PropTypes.shape({
        container: PropTypes.string,
    }),
};

FlexContainer.defaultProps = {
    classes: {
        container: '',
    },
};