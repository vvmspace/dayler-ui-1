import React, { PureComponent } from 'react';

import { Heading, Panel, Syntax, Text } from 'dayler-ui';

import style from './style.styl';

export class IntroductionContainer extends PureComponent {
    render() {
        return <div className={style.container}>
            <Heading h2 className={style.title}>Dayler React Components</Heading>

            <div className={style.body}>
                <Panel>
                    <Text>
                        Collection of simply beautiful open source react components designed for <a rel="noopener noreferrer" target="_blank" href="https://dayler.io">dayler.io</a> <br/>
                        Here is a collection of examples with usage overview
                    </Text>
                </Panel>

                <Panel title="installation">
                    <Syntax lang="bash">
                        $ npm i --save dayler-ui
                    </Syntax>
                </Panel>

                <Panel>
                    <Text>
                        author: Iakov Salikov (iknpx@aol.com) <br/>
                        repository: <a rel="noopener noreferrer" target="_blank" href="https://github.com/iknpx/dayler-ui">https://github.com/iknpx/dayler-ui</a> <br/><br/>
                        Made with ❤️
                    </Text>
                </Panel>
            </div>
        </div>;
    }
}
