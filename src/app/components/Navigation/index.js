import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Feather from 'feather-react'

import { LiveIcon } from 'dayler-ui'

import __CDN__ from 'app/cdn.json'
import __CSS__ from './css.styl'

export class Navigation extends PureComponent {
    static propTypes = {
        isWidth: PropTypes.bool,
        onChangeWidth: PropTypes.func,
    }

    static defaultProps = {
        onChangeWidth: () => { },
    }

    state = {
        isWithWasChanged: false,
    }

    handleIconClick = event => {
        const { onChangeWidth } = this.props
        const { isWithWasChanged } = this.state

        if (!isWithWasChanged) {
            this.setState({ isWithWasChanged: true })
        }

        onChangeWidth(event)
    }

    render() {
        const { isWidth } = this.props
        const { isWithWasChanged } = this.state

        const css = {
            action: classnames(__CSS__.action),
            body: classnames(__CSS__.body),
            container: classnames(__CSS__.container, {
                [__CSS__.xs]: !isWidth,
            }),
            header: classnames(__CSS__.header),
            icon: classnames(__CSS__.icon),
            feather: classnames(__CSS__.feather),
            img: classnames({
                [__CSS__.img]: isWithWasChanged,
            }),
        }

        return <div className={css.container}>
            <div className={css.header}>
                <div className={css.action}>
                    <span className={css.icon} onClick={this.handleIconClick}>
                        <LiveIcon active={isWidth}>menu-close</LiveIcon>
                    </span>

                    <Feather className={css.feather}>menu</Feather>
                </div>
                <img className={css.img} src={__CDN__.logo_green} alt="Dayler UI" />
            </div>
            <div className={css.body}>
                ...
            </div>
        </div>
    }
}
