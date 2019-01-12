import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Icon, ScrollView } from 'dayler-ui';

import cdn from '@app/cdn.json';

import { NavigationItem } from '../NavigationItem';
import style from './style.styl';

export class Navigation extends Component {
    static propTypes = {
        classes: PropTypes.shape({
            container: PropTypes.string,
        }),
        schema: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                icon: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                to: PropTypes.string.isRequired,
            }),
        ).isRequired,
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

    state = {
        isOpen: false,
    };

    handleOpenMobileMenu = () => {
        this.setState(state => ({ isOpen: !state.isOpen }));
    };

    handleCloseMobileMenu = () => {
        this.setState({ isOpen: false });
    };

    handleViewChange = () => {
        const { onChange, simple } = this.props;

        onChange(!simple);
    };

    render() {
        const { classes, simple, schema, ...props } = this.props;
        const { isOpen } = this.state;

        const containerClassNames = classNames(
            style.container,
            classes.container,
            {
                [style.min]: simple,
            },
        );

        const bodyClassNames = classNames(
            style.body,
            {
                [style.mobileOpened]: isOpen,
            }
        );

        return <div {...props} className={containerClassNames}>
            <div className={style.header}>
                <div className={style.toogle} onClick={this.handleViewChange}>
                    <Icon className={style.toogleIcon}
                        size={32}
                        name={`chevron-${simple ? 'right' : 'left'}`} />
                </div>
                <img className={style.logo} src={cdn.logo} alt="Dayler" />
            </div>
            <div className={style.mobileMenu}>
                <div className={style.mobileToogle} onClick={this.handleOpenMobileMenu}>
                    <Icon name={isOpen ? 'x' : 'menu'} />
                </div>
                <img className={style.mobileLogo} src={cdn.logo} alt="Dayler" />
            </div>
            <div className={bodyClassNames} onClick={this.handleCloseMobileMenu}>
                <ScrollView classes={{ body: style.scrollBody, container: style.scrollContainer }}>
                    {schema.map(item => (
                        <NavigationItem key={item.id} to={item.to} icon={item.icon} simple={simple}>
                            {item.title}
                        </NavigationItem>
                    ))}
                </ScrollView>
            </div>
        </div>;
    }
}
