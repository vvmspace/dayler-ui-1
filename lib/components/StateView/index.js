import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export class StateView extends Component {
    static propTypes = {
        on: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.number,
            PropTypes.string,
        ]),
        render: PropTypes.func,
    };

    static defaultProps = {
        on: false,
        render: () => null,
    };

    render() {
        const { children, on } = this.props;

        return <Fragment>
            {(!!on && children) || (!!on && this.props.render())}
        </Fragment>;
    }
}
