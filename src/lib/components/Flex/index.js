import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './style';


export class Flex extends PureComponent {
    static propTypes = {
        vertical: PropTypes.bool,
    };

    static defaultProps = {
        vertical: false,
    };

    render() {
        const { vertical } = this.props;

        return <div className={classNames(style.container, { [style.vertical]: vertical })}>
            {this.props.children}
        </div>;
    }
}
