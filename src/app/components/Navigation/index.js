import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';

import { FlexContainer, Icon } from 'dayler-ui';

import schema from './schema';
import style from './style.styl';

export function Navigation({ active, classes, ...props }) {
    const containerClassNames = classnames(style.container, classes.container, {
        [style.open]: active,
    });

    return <div {...props} className={containerClassNames}>
        <FlexContainer classes={{ container: style.content }}>
            {schema.map((group, index) => (
                <div className={style.group} key={index}>
                    {group.map(link => (
                        <NavLink key={link.id} to={link.to} className={style.navlink} activeClassName={style.active}>
                            <Icon size={18} name={link.icon} className={style.icon} />
                            <span className={style.title}>{link.title}</span>
                        </NavLink>
                    ))}
                </div>
            ))}
        </FlexContainer>
    </div>;
}

Navigation.propTypes = {
    active: PropTypes.bool.isRequired,
    classes: PropTypes.shape({
        container: PropTypes.string,
    }),
};

Navigation.defaultProps = {
    active: true,
    classes: {
        container: '',
    },
};
