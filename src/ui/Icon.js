import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as icons from 'react-feather';

export default class Icon extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired, // TODO: switch to feather Enum
    };

    render() {
        const { name, ...props } = this.props

        const icon = name
            .split('-')
            .reduce((r, str) => r + str.charAt(0).toUpperCase() + str.slice(1), '')

        const Result = icons[icon] || icons.X;

        return <Result {...props} />
    }
}
