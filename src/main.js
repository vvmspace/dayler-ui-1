import('dayler-ui');
import React from 'react';
import { render } from 'react-dom';

import('./app')
    .then(({ App }) => render(
        <App />,
        document.querySelector('div#root'),
    ));
