import React, { useState } from 'react';
import { AnimatedIconMenu, FlexContainer } from 'dayler-ui';

import { Navigation } from '@app/components';
import variables from '@app/variables.json';

import style from './style.styl';

export function Header() {
    const [isOpen, setState] = useState(false);

    return <div className={style.container}>
        <FlexContainer classes={{ container: style.content }}>
            <AnimatedIconMenu active={isOpen} onClick={() => setState(!isOpen)} />
            <img src={variables.logo} alt="Dayler.io" />
        </FlexContainer>
        <Navigation active={isOpen} />
    </div>;
}
