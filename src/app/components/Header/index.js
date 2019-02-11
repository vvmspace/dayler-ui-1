import React from 'react';

import { AnimatedIconMenu, FlexContainer } from 'dayler-ui';
import { useOpen } from 'dayler-ui/hooks';

import { Navigation } from '@app/components';
import variables from '@app/variables.json';

import style from './style.styl';

export function Header() {
    const { isOpened, toogle, close } = useOpen(false);

    return <>
        <div className={style.container}>
            <FlexContainer classes={{ container: style.content }}>
                <span className={style.menu} onClick={toogle}>
                    <AnimatedIconMenu active={isOpened} />
                </span>
                <img src={variables.logo} alt="Dayler.io" />
            </FlexContainer>
        </div>
        <Navigation active={isOpened} onRouteChange={close} />
    </>;
}
