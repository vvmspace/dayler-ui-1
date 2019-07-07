import React, { PureComponent } from 'react'

import { Card, LiveIcon } from 'dayler-ui'

import __CSS__ from './css.styl'

export default class IconsRoute extends PureComponent {
    state = {
        "chevron-left-right": false,
        "chevron-right-left": false,
        "menu-chevron-left": false,
        "menu-chevron-right": false,
        "menu-close": false,
        "menu-left": false,
        "menu-right":  false,
    }

    css = {
        card: { container: __CSS__.card, content: __CSS__.content },
    }

    handleClick = icon => () => {
        this.setState(state => ({ [icon]: !state[icon] }))
    }

    render() {
        return <div className={__CSS__.container}>
            <div className={__CSS__.item}>
                <Card onClick={this.handleClick('chevron-left-right')}
                    classes={{ container: __CSS__.icon}}>
                    <LiveIcon active={this.state['chevron-left-right']}>
                        chevron-left-right
                    </LiveIcon>
                </Card>
                <span className={__CSS__.title}>chevron-left-right</span>
            </div>

            <div className={__CSS__.item}>
                <Card onClick={this.handleClick('chevron-right-left')}
                    classes={{ container: __CSS__.icon}}>
                    <LiveIcon active={this.state['chevron-right-left']}>
                        chevron-right-left
                    </LiveIcon>
                </Card>
                <span className={__CSS__.title}>chevron-right-left</span>
            </div>

            <div className={__CSS__.item}>
                <Card onClick={this.handleClick('menu-chevron-left')}
                    classes={{ container: __CSS__.icon}}>
                    <LiveIcon active={this.state['menu-chevron-left']}>
                        menu-chevron-left
                    </LiveIcon>
                </Card>
                <span className={__CSS__.title}>menu-chevron-left</span>
            </div>

            <div className={__CSS__.item}>
                <Card onClick={this.handleClick('menu-chevron-right')}
                    classes={{ container: __CSS__.icon}}>
                    <LiveIcon active={this.state['menu-chevron-right']}>
                        menu-chevron-right
                    </LiveIcon>
                </Card>
                <span className={__CSS__.title}>menu-chevron-right</span>
            </div>

            <div className={__CSS__.item}>
                <Card onClick={this.handleClick('menu-close')}
                    classes={{ container: __CSS__.icon}}>
                    <LiveIcon active={this.state['menu-close']}>
                        menu-close
                    </LiveIcon>
                </Card>
                <span className={__CSS__.title}>menu-close</span>
            </div>

            <div className={__CSS__.item}>
                <Card onClick={this.handleClick('menu-left')}
                    classes={{ container: __CSS__.icon}}>
                    <LiveIcon active={this.state['menu-left']}>
                        menu-left
                    </LiveIcon>
                </Card>
                <span className={__CSS__.title}>menu-left</span>
            </div>

            <div className={__CSS__.item}>
                <Card onClick={this.handleClick('menu-right')}
                    classes={{ container: __CSS__.icon}}>
                    <LiveIcon active={this.state['menu-right']}>
                        menu-right
                    </LiveIcon>
                </Card>
                <span className={__CSS__.title}>menu-right</span>
            </div>
        </div>
    }
}
