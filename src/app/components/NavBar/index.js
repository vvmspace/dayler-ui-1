import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './style.styl'

import Icon from 'ui/Icon';

export default class NavBar extends Component {
    static propTypes = {
        data: PropTypes.array.isRequired,
        expand: PropTypes.bool.isRequired,
        onExpand: PropTypes.func.isRequired,
    };

    static defaultProps = {
        expand: true,
    };

    isActive = (match, location) => {
        return match && match.path === '/' + location.pathname.split('/')[1];
    };

    handleClick = event => {
        const { expand, onExpand } = this.props

        onExpand(!expand)
    };

    render() {
        const { data, expand } = this.props;

        return (
            <div className={`navbar fadeInLeft ${expand ? 'expand' : ''}`}>
                <div className="header">
                    <div className="header__action">
                        <Icon className="header__action--icon"
                            onClick={this.handleClick}
                            name={`chevron-${expand ? 'left' : 'right'}`}
                            size={34}
                        />
                    </div>
                    <img className="header__image" src="/images/logo_dark.svg" />
                </div>
                <ul className="body">
                    {data.map(item => (
                        <li className="item" key={Math.random()}>
                            <NavLink className="item__link"
                                to={item.link}
                                isActive={this.isActive}
                                activeClassName="active"
                            >
                                <Icon className="item__icon"
                                    name={item.icon}
                                />
                                <span className="item__title">
                                    {item.title}
                                </span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
