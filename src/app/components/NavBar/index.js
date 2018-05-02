import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from 'ui';

import styles from './styles.styl';

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
            <div className={`${styles.container} ${expand ? styles.expanded : null}`}>
                <div className={styles.header}>
                    <div className={styles.headerAction}>
                        <Icon className={styles.headerIcon}
                            onClick={this.handleClick}
                            name={`chevron-${expand ? 'left' : 'right'}`}
                            size={34}
                        />
                    </div>
                    <img className={styles.headerImage} src="/images/logo_dark.svg" />
                </div>
                <ul className={styles.body}>
                    {data.map(item => (
                        <li className={styles.item} key={Math.random()}>
                            <NavLink className={styles.itemLink}
                                to={item.link}
                                isActive={this.isActive}
                                activeClassName={styles.activeLink}
                            >
                                <Icon className={styles.itemIcon}
                                    name={item.icon}
                                />
                                <span className={styles.itemTitle}>
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
