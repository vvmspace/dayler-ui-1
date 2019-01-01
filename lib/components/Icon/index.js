import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as feather from 'react-feather';

import icons from './icons.json';

export class Icon extends Component {
    static propTypes = {
        name: PropTypes.oneOf(icons),
    };

    getIcon = name => {
        return name.split('-').reduce((result, str) => {
            return result + str.charAt(0).toUpperCase() + str.slice(1);
        }, '');
    };

    render() {
        const { name, ...props } = this.props;
        const icon = this.getIcon(name);
        const Vector = feather[icon] || feather.X;

        return <Vector {...props} />;
    }
}
