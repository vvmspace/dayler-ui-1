import React, { PureComponent } from 'react';

import { Heading, Syntax, Tab, Tabs, Text } from 'dayler-ui';

import style from './style.styl';

import headingApi from './examples/heading-api.example';
import headingUsage from './examples/heading-usage.example';
import textApi from './examples/text-api.example';
import textUsage from './examples/text-usage.example';

export class TypingsContainer extends PureComponent {
    render() {
        return <div className={style.container}>
            <Heading h2 className={style.title}>Typography</Heading>

            <div className={style.body}>
                <div>
                    <Heading h4 className={style.subtitle}>Headings</Heading>
                    <Tabs>
                        <Tab title="Example" path="" classes={{ container: style.heading }}>
                            <Heading h1>Heading H1</Heading>
                            <Heading h2>Heading H2</Heading>
                            <Heading h3>Heading H3</Heading>
                            <Heading h4>Heading H4</Heading>
                            <Heading h5>Heading H5</Heading>
                            <Heading h6>Heading H6</Heading>
                        </Tab>

                        <Tab title="Usage" path="/usage">
                            <Syntax>{headingUsage}</Syntax>
                        </Tab>

                        <Tab title="Api" path="/api">
                            <Syntax lang="stylus">{headingApi}</Syntax>
                        </Tab>
                    </Tabs>
                </div>

                <div>
                    <Heading h4 className={style.subtitle}>Text</Heading>
                    <Tabs>
                        <Tab title="Example">
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi velit sit in sequi odit facilis, ea. Voluptates aliquam eveniet consequuntur quod repudiandae veniam, rem ab, ipsam tempora molestias sunt molestiae!
                            </Text>
                        </Tab>

                        <Tab title="Usage" path="/usage">
                            <Syntax>{textUsage}</Syntax>
                        </Tab>

                        <Tab title="Api" path="/api">
                            <Syntax lang="stylus">{textApi}</Syntax>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>;
    }
}
