import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import classnames from 'classnames'
import Feather, { source as iconsSource } from 'feather-react'

import { Spinner } from '../Spinner'

import __CSS__ from './css.styl'

const colors = [
    'blue',
    'green',
    'grey',
    'red',
]

const icons = iconsSource.icons.map(_ => _.name)
const types = ['button', 'submit']

export class Button extends PureComponent {
    static propTypes = {
        classes: PropTypes.shape({
            animate: PropTypes.string,
            container: PropTypes.string,
            icon: PropTypes.string,
            rippler: PropTypes.string,
            title: PropTypes.string,
        }),
        color: PropTypes.oneOf(colors),
        icon: PropTypes.oneOf(icons),
        loading: PropTypes.bool,
        type: PropTypes.oneOf(types),
    }

    static defaultProps = {
        classes: {
            animate: '',
            container: '',
            icon: '',
            rippler: '',
            title: '',
        },
        color: 'grey',
        loading: false,
        type: 'button',
    }

    state = {
        height: 0,
        width: 0,
        left: 0,
        top: 0,
    }

    handleMouseDown = event => {
        const { classes } = this.props
        const { left, top, width } = this.button.getBoundingClientRect()

        const css = {
            animate: classnames(__CSS__.animate, classes.animate),
        }

        this.rippler.classList.remove(css.animate)
        this.button.offsetTop

        this.setState({
            height: width,
            width: width,
            left: event.clientX - left - width / 2,
            top: event.clientY - top - width / 2,
        }, () => this.rippler.classList.add(css.animate))
    }

    render() {
        const { children, classes, color, icon, loading, type, ...props } = this.props
        const { height, width, left, top } = this.state

        const css = {
            container: classnames(__CSS__.container, __CSS__[color], classes.container),
            icon: classnames(__CSS__.icon, classes.icon),
            rippler: classnames(__CSS__.rippler, classes.rippler),
            title: classnames(__CSS__.title, classes.title),
        }

        return <button {...props} type={type}
            className={css.container}
            onMouseDown={this.handleMouseDown}
            ref={referance => this.button = referance}>
            <div className={css.rippler} style={{ height, width, left, top }} ref={referance => this.rippler = referance} />
            {icon && <span className={css.icon}>
                {loading ? <Spinner size={19} /> : <Feather size={17}>{icon}</Feather>}
            </span>}
            {children && <span className={css.title}>{children}</span>}
        </button>
    }
}
