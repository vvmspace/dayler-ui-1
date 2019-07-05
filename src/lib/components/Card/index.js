import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import __CSS__ from './css.styl'

export class Card extends PureComponent {
    static propTypes = {
        classes: PropTypes.shape({
            container: PropTypes.string,
            content: PropTypes.string,
            title: PropTypes.string,
        }),
        title: PropTypes.string,
    }

    static defaultProps = {
        classes: {
            container: '',
            content: '',
            title: '',
        },
    }

    render() {
        const { children, classes, title, ...props } = this.props

        const css = {
            container: classnames(__CSS__.container, classes.container),
            content: classnames(__CSS__.content, classes.content),
            title: classnames(__CSS__.title, classes.title),
        }

        return <div {...props} className={css.container}>
            {title && <span className={css.title}>{title}</span>}
            <div className={css.content}>
                {children}
            </div>
        </div>
    }
}
