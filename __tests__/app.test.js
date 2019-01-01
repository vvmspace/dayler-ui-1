import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';

import { App } from '@app';

import { Navigation } from '@app/components';
import { IntroductionContainer } from '@app/containers';

describe('#app', () => {
    test('root components should be defined', () => {
        const app = mount(
            <Router initialEntries={[ '/' ]}>
                <App />
            </Router>
        );

        const navigationComponent = app.find(Navigation).childAt(0);
        const pageContainer = app.find(IntroductionContainer).childAt(0);

        expect(navigationComponent).toBeDefined();
        expect(navigationComponent.props).toBeDefined();

        expect(pageContainer).toBeDefined();
        expect(pageContainer.props).toBeDefined();
    });
});
